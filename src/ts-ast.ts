
import assert from 'assert'

import * as ts from 'typescript'

export function getIdentifierName(name: ts.Identifier | ts.PropertyName): string {
    return name['escapedText'];
}

export function parseFile(fileName: string): ts.SourceFile {
    const program = ts.createProgram([fileName], {});
    const sourceFiles = program.getSourceFiles().filter((sourceFile: ts.SourceFile) => !sourceFile.isDeclarationFile);
    assert(sourceFiles.length == 1)
    return sourceFiles[0]
}

export function getAssignedVariables(root: ts.Node): Set<string> {
    const assignedVariables: Set<string> = new Set<string>();
    root.forEachChild((child: ts.Node) => {
        getAssignedVariables(child).forEach((name: string) => {
            assignedVariables.add(name);
        });
    });
    if (root.kind == ts.SyntaxKind.BinaryExpression &&
        (root as ts.BinaryExpression).operatorToken.kind == ts.SyntaxKind.EqualsToken && // TODO: support more operators
        (root as ts.BinaryExpression).left.kind == ts.SyntaxKind.Identifier) {
        const name = getIdentifierName((root as ts.BinaryExpression).left as ts.Identifier);
        assignedVariables.add(name);
    }
    return assignedVariables;
}
