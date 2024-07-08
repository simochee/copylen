import { readFile } from "node:fs/promises";
import clipboard from "clipboardy";
import { InvalidArgumentError, program } from "commander";
import { copylen } from ".";
import { description, name, version } from "../package.json";
import { positiveInt } from "./option";

type Options = {
	file?: string;
	clipboard?: boolean;
};

program
	.name(name)
	.description(description)
	.version(version)
	.argument("<length>", "Length of chunk characters", positiveInt)
	.option("-l, --len <length>", "Length of chunk characters", positiveInt)
	.option("-f, --file", "Input file path")
	.option("-c, --clipboard", "Input from clipboard")
	.action(
		async (length: number, { file, clipboard: fromClipboard }: Options) => {
			if (!fromClipboard && !file) {
				throw new InvalidArgumentError(
					"Expected a file path or clipboard input",
				);
			}

			const value =
				fromClipboard || !file
					? await clipboard.read()
					: await readFile(file, "utf-8");

			copylen(value, length);
		},
	);

program.parse(process.argv);
