import { readFile } from "node:fs/promises";
import { program } from "commander";
import { copylen } from ".";
import { description, name, version } from "../package.json";
import { positiveInt } from "./option";

type Options = {
	length: number;
};

program
	.name(name)
	.description(description)
	.version(version)
	.argument("<file-to-path>", "File to copy")
	.option("-L, --length, --len <length>", "Length of the password", positiveInt)
	.action(async (fileToPath: string, { length }: Options) => {
		const value = await readFile(fileToPath, "utf-8");

		copylen(value, length);
	});

program.parse(process.argv);
