import { nextTick, stdin } from "node:process";

export const waitForAnyKey = async () =>
	new Promise<void>((resolve, reject) => {
		stdin.resume();
		stdin.setRawMode(true);

		stdin.once("error", reject);
		stdin.once("data", (buffer) => {
			stdin.setRawMode(false);
			stdin.pause();

			const bytes = Array.from(buffer);

			// Ctrl+C (SIGINT)
			if (bytes[0] === 3) {
				process.exit(1);
			}

			nextTick(resolve);
		});
	});
