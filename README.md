# Enterprise

Things I think an enterprise app should have

## Node Version

[Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) is used to manage mulitple globally installed Node verions. Use .nvmrc to define the node version for a project. Then run `nvm use` to use this defined verions. Or set up [NVM shell integration](https://github.com/nvm-sh/nvm?tab=readme-ov-file#deeper-shell-integration) so that NVM will automatically download and use the defined verion.

# Linting + Formatting

## EditorConfig, Prettier, and ESLint

These are three tools can that help with the automatic formatting and linting of the project.

Initially it can be quite confusing on what the purpose of each of these is, and how they interplay with each other.

The following is my own interpretation of what these do.

- EditorConfig: Sets your Editors options for how it should configure tab sizes, units and line endings. This can be done on a file type, or individual file basis
- Prettier: Handles whitespace across all files. Overlaps with the EditorConfig.
- ESLint: Semantic linting rules for javascript and more.

I found it best to set Prettier as the formatter, and autofix the ESLint errors on document save.

This can be done by setting the following options in the projects .vscode/setting.json files

```
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["javascript"]
```

### VSCode Recommendations

This project is set up to recommend to the user to download the EditorConfig, Prettier, and ESLint extensions.

Theses are recommendations are defined in the [.vscode/extensions.json](.vscode/extensions.json).

## Git

- .gitignore
- branching strategy: trunk or gitflow

# Security

- Helmet
- Remove fingerprints
- HTTPS

# Others

- Testing
- Security
- Logging
- gitignore
- Git hooks
