import { readFile } from "node:fs/promises";
import clipboard from "clipboardy";
import { InvalidArgumentError, program } from "commander";
import { copylen } from ".";
import { description, name, version } from "../package.json";
import { positiveInt } from "./option";

type Options = {
	len: number;
	clipboard?: boolean;
};

program
	.name(name)
	.description(description)
	.version(version)
	.argument("[file-to-path]", "Input file path")
	.option("-l, --len <length>", "Length of the password", positiveInt)
	.option("-c, --clipboard", "Input from clipboard")
	.action(
		async (fileToPath: string, { len, clipboard: fromClipboard }: Options) => {
			if (!fromClipboard && !fileToPath) {
				throw new InvalidArgumentError(
					"Expected a file path or clipboard input",
				);
			}

			const value = fromClipboard
				? await clipboard.read()
				: await readFile(fileToPath, "utf-8");

			copylen(value, len);
		},
	);

program.parse(process.argv);
