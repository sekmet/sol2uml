import { ASTNode } from '@solidity-parser/parser/dist/ast-types';
import { UmlClass } from './umlClass';
export declare function convertNodeToUmlClass(node: ASTNode, codePath: string): UmlClass[];
