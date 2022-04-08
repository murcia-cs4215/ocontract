import {
  getCurrentContractScope,
  popContractEnvironment,
  pushContractEnvironment,
} from 'contracts/environment';
import { Contract } from 'contracts/types';
import { wrapExpressionInMonitor } from 'contracts/utils';
import { Node, Program } from 'parser/types';

import { Context } from '../../runtimeTypes';

export function monitorProgram(program: Program, context: Context): void {
  monitorNode(program, context);
}

/**
 * This function basically sets pos and neg for all identifier nodes, with or
 * without contracts. This is so that if any contract is violated, the identifier
 * node will know who to blame at that point in time.
 */
function monitorNode(node: Node, context: Context): void {
  switch (node.type) {
    case 'Program': {
      for (const body of node.body) {
        monitorNode(body, context);
      }
      break;
    }
    case 'ContractDeclarationStatement': {
      break;
    }
    case 'ExpressionStatement': {
      monitorNode(node.expression, context);
      break;
    }
    case 'Identifier': {
      // We don't need the exact contract now. The goal is to assign a pos and neg
      // so that we know who to blame when things go wrong.
      wrapExpressionInMonitor(
        node,
        undefined,
        node.name,
        getCurrentContractScope(context),
      );
      break;
    }
    case 'LocalLetExpression': {
      monitorNode(node.left, context);
      monitorNode(node.right, context);
      break;
    }
    case 'CallExpression': {
      monitorNode(node.callee, context);
      node.arguments.forEach((arg) => monitorNode(arg, context));
      break;
    }
    case 'GlobalLetStatement': {
      monitorNode(node.left, context);
      pushContractEnvironment(context, {
        contractMap: new Map<string, Contract>(),
        currentScope: node.left.name,
      });
      monitorNode(node.right, context);
      popContractEnvironment(context);
      break;
    }
    case 'UnaryExpression': {
      monitorNode(node.argument, context);
      break;
    }
    case 'BinaryExpression': {
      monitorNode(node.left, context);
      monitorNode(node.right, context);
      break;
    }
    case 'ConditionalExpression': {
      monitorNode(node.test, context);
      monitorNode(node.consequent, context);
      monitorNode(node.alternate, context);
      break;
    }
    case 'LambdaExpression': {
      monitorNode(node.body, context);
      break;
    }
    case 'LogicalExpression': {
      monitorNode(node.left, context);
      monitorNode(node.right, context);
      break;
    }
  }
}
