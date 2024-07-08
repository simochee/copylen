import { spawn } from "node:child_process";

export const copy = (value: string) =>
	new Promise((resolve, reject) => {
		const pbcopy = spawn("pbcopy");

		pbcopy.on("error", reject);
		pbcopy.on("close", resolve);

		pbcopy.stdin.write(value);
		pbcopy.stdin.end();
	});
