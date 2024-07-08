# copylen

[![npm version](https://badge.fury.io/js/copylen.svg)](https://badge.fury.io/js/copylen)
[![Release](https://github.com/simochee/copylen/actions/workflows/release.yaml/badge.svg)](https://github.com/simochee/copylen/actions/workflows/release.yaml)

📋 A simple, intuitive CLI tool to copy content from a file based on character length.

Cross-platform Supports: macOS, Windows, Linux.

## Installation

[npm](https://docs.npmjs.com/cli/v6/commands/npm) · [yarn](https://yarnpkg.com/) · [pnpm](https://pnpm.io/) · [bun](https://bun.sh/)

```shell
# npm
npm install -g copylen
```

```bash
# yarn
yarn global add copylen
```

```shell
# pnpm
pnpm add -g copylen
```

```shell
# bun
bun install --global copylen
```

## Usage

```shell
Usage: copylen [options] <length>

Copies file content based on character length

Arguments:
  length              Length of chunk characters

Options:
  -V, --version       output the version number
  -l, --len <length>  Length of chunk characters
  -f, --file          Input file path
  -c, --clipboard     Input from clipboard
  -h, --help          display help for command
```

## License

[MIT License](https://github.com/simochee/copylen?tab=MIT-1-ov-file#readme)
