import pressAnyKey from "press-any-key";
import { copy } from "./copy";

export const copylen = async (input: string, length: number) => {
	const chunks = Math.ceil(input.length / length);

	for (let i = 0; i < chunks; i += 1) {
		await copy(input.slice(i * length, (i + 1) * length));

		await pressAnyKey(
			`Copied chunk ${i + 1} of ${chunks} to clipboard. Press any key to continue...`,
		);
	}
};
