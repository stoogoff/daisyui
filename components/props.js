
const kebabCaseToCamel = (prefix, name) => {
	const stripPrefix = new RegExp(`^${ prefix }-`)

	return name
		.replace(stripPrefix, '')
		.replace(/-./g, str => str[1].toUpperCase())
}

export const createProps = (prefix, classes) => {
	const output = {}

	classes.forEach(cls => {
		const prop = kebabCaseToCamel(prefix, cls)

		output[prop] = {
			type: Boolean,
			default: false,
		}
	})

	return output
}

export const createClasses = (prefix, classes, component) => {
	const output = {}

	classes.forEach(cls => {
		const prop = kebabCaseToCamel(prefix, cls)

		output[cls] = component[prop]
	})

	return output
}

export const createComponent = (prefix, classes) => ({
	props: createProps(prefix, classes),

	computed: {
		classes() {
			console.log(createClasses(prefix, classes, this))
			return createClasses(prefix, classes, this)
		},
	},
})
