export function generateRandomIndex(length: number): number {
	return Math.floor(Math.random() * length)
}

export function getRandomNumberArray(
	length: number,
	dataSize: number
): number[] {
	const indices: number[] = []
	while (indices.length < length + 1) {
		const num = generateRandomIndex(dataSize)
		if (!indices.includes(num)) indices.push(num)
	}
	return indices
}