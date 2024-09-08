# Comment Outside Selection

This Visual Studio Code extension allows you to quickly comment out all lines in your code that are outside of a selected range, except for lines above a specific marker (`*** Test Cases ***`). This tool is especially useful for developers who frequently need to isolate sections of code for testing or debugging, while ensuring that test case headers remain untouched.

## Features

- **Selective Commenting**: Automatically comments out all lines outside of your selected text in the active editor.
- **Preserves Test Case Headers**: Does not comment lines above the `*** Test Cases ***` marker, making it ideal for working with test suites.

## Usage

1. **Select the text** in the editor that you want to remain uncommented.
2. **Execute the command**: Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and type `Comment Outside Selection`. Hit enter to run the command.

## Requirements

This extension does not have specific requirements or dependencies. Just ensure that you have the latest version of Visual Studio Code installed.

## Installation

To install this extension, follow these steps:

- Download the `.vsix` file from the release section.
- In Visual Studio Code, open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and select `Extensions: Install from VSIX...`.
- Locate the `.vsix` file on your machine and select it to install.

## Known Issues

Currently, there are no known issues. If you encounter any problems, please open an issue on the [GitHub repository](#).

## Contributing

Contributions are always welcome! If you would like to contribute, please fork the repository and submit a pull request.

## License

This extension is released under the MIT License. See the [LICENSE](LICENSE) file for more details.