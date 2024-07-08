import { InvalidArgumentError } from "commander";

export const positiveInt = (value: string) => {
	const parsed = Number.parseInt(value, 10);

	if (Number.isNaN(parsed)) {
		throw new InvalidArgumentError("Expected a number");
	}

	if (parsed <= 0) {
		throw new InvalidArgumentError("Expected a positive number");
	}

	return parsed;
};
