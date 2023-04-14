# react-monorepo

## Badges

## Description

The front-end architecture was built using `monorepo` paradigm with `lerna` and `npm` for tooling.

### Basic structure

All the environment was made using this basic libraries

- Typescript
- Babel
- Eslint
  - Prettier
  - Import
  - Typescript-Eslint
- Lerna
- Jest

### Shared packages

- `apps/react-app` CRA Application using `React@18.2.0`
- `packages/corelib` Core business logic layer
- `packages/designsystem` Visual components library
  - Built with Storybook
- `packages/internal` Used for internal configuration files (typescript, jest, eslint, etc)

## Installation

Run `npm install` in project root folder.

## Design System

To run `storybook` for the `@monorepo/designsystem` run `npm run storybook`

You should be able to view each design system component in storybook interface

### Basic Design System component structure

Each component should have at lease those files (until we have [Plop or Yeoman](#pending-tasks)) as follows

- Component Folder
  - `__tests__`
    - `Component.test.tsx` Component test implementation
  - `index.ts` Component index (with `export * from`)
  - `Component.tsx` Component implementation file
  - `Component.stories.tsx` Component storybook file
  - `Component.css` / style.ts Component styles

## Tests

The test stack is `@testing-library` and `jest` runner

To run tests we have two main scripts

- `npm run test` Run tests
- `npm run test:dev` Run tests with watch mode (rerun when files change)

## Git hooks

### commit-msg Commit lint

The project uses [@commitlint](https://commitlint.js.org/#/) with [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) rules

### pre-commit

Lint-Staged will ensure that no `tests` or `lint` rules was broke

## Pending tasks

[ ] [Plop](https://github.com/plopjs/plop) (or [yeoman](https://jellypepper.com/blog/improving-developer-efficiency-with-generators)) file generator
