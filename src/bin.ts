import { readFile } from "node:fs/promises";
import clipboard from "clipboardy";
import { InvalidArgumentError, program } from "commander";
import { copylen } from ".";
import { description, name, version } from "../package.json";
import { positiveInt } from "./option";

type Options = {
	length: number;
	clipboard?: boolean;
};

program
	.name(name)
	.description(description)
	.version(version)
	.argument("[file-to-path]", "Input file path")
	.option("-L, --length, --len <length>", "Length of the password", positiveInt)
	.option("-C, --clipboard", "Input from clipboard")
	.action(
		async (
			fileToPath: string,
			{ length, clipboard: fromClipboard }: Options,
		) => {
			if (!fromClipboard && !fileToPath) {
				throw new InvalidArgumentError(
					"Expected a file path or clipboard input",
				);
			}

			const value = fromClipboard
				? await clipboard.read()
				: await readFile(fileToPath, "utf-8");

			copylen(value, length);
		},
	);

program.parse(process.argv);
