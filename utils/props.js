
export const createProps = (prefix, classes) => {
	const stripPrefix = new Regex(`^${ prefix }`)
	const output = {}

	classes.forEach(cls => {
		const prop = cls
			.replace(stripPrefix, '')
			.replace(/-./g, str => str[1].toUpperCase())

		output[prop] = {
			type: Boolean,
			default: false,
		}
	})

	return output
}

export const createClasses = (prefix, classes, component) => {
	const stripPrefix = new Regex(`^${ prefix }`)
	const output = {}

	classes.forEach(cls => {
		const prop = cls
			.replace(stripPrefix, '')
			.replace(/-./g, str => str[1].toUpperCase())

		output[cls] = component[prop]
	})

	return output
}
