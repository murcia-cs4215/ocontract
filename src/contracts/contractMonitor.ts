import { Context } from 'types';

import { ContractType, Expression, Node, Program } from 'parser/types';

import {
  addContractToCurrentScope,
  getCurrentContractScope,
  lookupContractInCurrentScope,
} from './environment';

export function wrapProgramInMonitor(program: Program, context: Context): void {
  _wrapNodeInMonitor(program, context);
}

export function propogateContract(
  fromNode: Expression,
  toNode: Expression,
): void {
  if (fromNode.contract && fromNode.pos && fromNode.neg) {
    _wrapExpressionInMonitor(
      toNode,
      fromNode.contract,
      fromNode.pos,
      fromNode.neg,
    );
  }
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
      const contractForIdentifier = lookupContractInCurrentScope(
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
  }
}

function _wrapExpressionInMonitor(
  exp: Expression,
  contract: ContractType,
  pos: string,
  neg: string,
): Expression {
  return {
    ...exp,
    contract,
    pos,
    neg,
  };
}
