import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.commentOutsideSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor!');
            return;
        }

        const document = editor.document;
        const selection = editor.selection;

        let testCasesLine = -1;
        for (let i = 0; i < document.lineCount; i++) {
            if (document.lineAt(i).text.includes('*** Test Cases ***')) {
                testCasesLine = i;
                break;
            }
        }

        if (testCasesLine === -1) {
            vscode.window.showErrorMessage('*** Test Cases *** not found in the file.');
            return;
        }

        editor.edit(editBuilder => {
            // Comment lines after "*** Test Cases ***" and before the start of selection
            for (let i = testCasesLine + 1; i < selection.start.line; i++) {
                const line = document.lineAt(i);
                if (!line.text.trim().startsWith('#')) {
                    editBuilder.insert(line.range.start, '# ');
                }
            }

            // Uncomment the selected lines
            for (let i = selection.start.line; i <= selection.end.line; i++) {
                const line = document.lineAt(i);
                if (line.text.trim().startsWith('#')) {
                    const firstNonWhitespaceCharacterIndex = line.firstNonWhitespaceCharacterIndex;
                    const rangeToDelete = new vscode.Range(
                        new vscode.Position(i, firstNonWhitespaceCharacterIndex),
                        new vscode.Position(i, firstNonWhitespaceCharacterIndex + 1)
                    );
                    editBuilder.delete(rangeToDelete);
                }
            }

            // Comment lines after the end of selection to the end of file
            for (let i = selection.end.line + 1; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                if (!line.text.trim().startsWith('#')) {
                    editBuilder.insert(line.range.start, '# ');
                }
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}