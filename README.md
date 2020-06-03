# eslint-config-peggy
a shareable eslint config package for front-end/back-end projects using TypeScript

## installation

Install `eslint-config-peggy` and [`ESlint`](https://eslint.org/):
```
npm install -D eslint eslint-config-prettier
```
Then, add `eslint-config-peggy` to the "extends" array in your `.eslintrc.*` file.

```json
{
  "extends": [
    "some-other-config-you-use",
    "peggy"
  ]
}
```

note:
> this package also includes the eslint settings for: [ `Prettier`](https://prettier.io/),
which does a great job at handling code formatting.
To make the most of it, you may also want to install prettier in you project as a dev-dependency.
```
npm install -D prettier
```
## Usage


Add 2 more scripts in your `package.json`, run:
```
  "scripts": {
    ...
    "lint": "eslint . --ext .js,.ts,.jsx,.tsx",
    "lint:fix": "eslint . --ext .js,.ts,.jsx,.tsx --fix"
    ...
  },
```

to check code issues, run `npm run lint`

to fix issues, run `npm run lint:fix`

for more details about ESlint usage, see: https://eslint.org

if you are using [VSCode](https://code.visualstudio.com), and want to auto fix the format issues whenever a file is saved, create a `settings.json` file in the `.vscode` folder under the root of your project. in your `settings.json` file, add:
```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true 
  }
}
```
this will tell VSCode to run `ESlint`'s automatic fix command: (`eslint --fix`) when you save a file.
