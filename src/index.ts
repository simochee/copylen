import boxen from "boxen";
import clipboard from "clipboardy";
import logUpdate from "log-update";
import colors from "yoctocolors";
import { name, version } from "../package.json";
import { waitForAnyKey } from "./keyboard";

export const copylen = async (input: string, length: number) => {
	console.log(
		`Received input of length ${input.length.toLocaleString()} and chunk length ${length.toLocaleString()}`,
	);

	const chunks = Math.ceil(input.length / length);

	for (let i = 0; i < chunks; i += 1) {
		await clipboard.write(input.slice(i * length, (i + 1) * length));

		const message = [
			`Copied chunk: ${i + 1} / ${chunks}`,
			"",
			colors.gray("Press any key to copy the next chunk ..."),
		].join("\n");

		logUpdate(
			boxen(message, {
				title: `📋 ${name} v${version}`,
				titleAlignment: "center",
				textAlignment: "center",
				padding: 1,
				margin: 1,
			}),
		);

		if (chunks > 1) {
			await waitForAnyKey();
		}
	}

	const chunksText = chunks > 1 ? `${chunks} chunks` : "a chunk";
	const charactersText =
		input.length > 1 ? `${input.length} characters` : "1 character";

	logUpdate(`🎉 Copied ${chunksText} of ${charactersText} each`);
};
