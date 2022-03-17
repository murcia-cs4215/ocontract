import { Context } from 'types';

import { ContractType, Expression, Node, Program } from 'parser/types';

import {
  addContractToCurrentScope,
  getCurrentContractScope,
  lookupContracts,
} from './environment';

export function wrapProgramInMonitor(program: Program, context: Context): void {
  _wrapNodeInMonitor(program, context);
}

export function propagateContract(
  contract: ContractType,
  pos: string,
  neg: string,
  toNode: Expression,
): void {
  _wrapExpressionInMonitor(toNode, contract, pos, neg);
}

function _wrapNodeInMonitor(node: Node, context: Context): void {
  switch (node.type) {
    case 'Program': {
      for (const body of node.body) {
        _wrapNodeInMonitor(body, context);
      }
      break;
    }
    case 'ContractDeclarationStatement': {
      addContractToCurrentScope(
        context.contractEnvironment,
        node.id.name,
        node.contract.contract,
      );
      break;
    }
    case 'ExpressionStatement': {
      _wrapNodeInMonitor(node.expression, context);
      break;
    }
    case 'Identifier': {
      const contractForIdentifier = lookupContracts(
        node.name,
        context.contractEnvironment,
      );
      if (contractForIdentifier != undefined) {
        _wrapExpressionInMonitor(
          node,
          contractForIdentifier,
          node.name,
          getCurrentContractScope(context.contractEnvironment),
        );
      }
      break;
    }
    case 'LocalLetExpression': {
      context.contractEnvironment.push({
        contractMap: new Map<string, ContractType>(),
        currentScope: node.left.left.name,
      });
      _wrapNodeInMonitor(node.right, context);
      context.contractEnvironment.pop();
      break;
    }
    case 'CallExpression': {
      _wrapNodeInMonitor(node.callee, context);
      node.arguments.forEach((arg) => _wrapNodeInMonitor(arg, context));
      break;
    }
    case 'GlobalLetStatement': {
      _wrapNodeInMonitor(node.right, context);
      break;
    }
    case 'UnaryExpression': {
      _wrapNodeInMonitor(node.argument, context);
      break;
    }
    case 'BinaryExpression': {
      _wrapNodeInMonitor(node.left, context);
      _wrapNodeInMonitor(node.right, context);
      break;
    }
    case 'ConditionalExpression': {
      _wrapNodeInMonitor(node.test, context);
      _wrapNodeInMonitor(node.consequent, context);
      _wrapNodeInMonitor(node.alternate, context);
      break;
    }
    case 'LambdaExpression': {
      _wrapNodeInMonitor(node.body, context);
      break;
    }
    case 'LogicalExpression': {
      _wrapNodeInMonitor(node.left, context);
      _wrapNodeInMonitor(node.right, context);
      break;
    }
  }
}

function _wrapExpressionInMonitor(
  exp: Expression,
  contract: ContractType | undefined,
  pos: string | undefined,
  neg: string | undefined,
): void {
  exp.contract = contract;
  exp.pos = pos;
  exp.neg = neg;
}
