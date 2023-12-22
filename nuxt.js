import { join } from 'path'

const components = [
	'components',
]

export default function() {
	this.nuxt.hook('components:dirs', dirs => {
		components.forEach(comp => {
			dirs.push({
				path: join(__dirname, comp),
				prefix: 'd',
			})
		})
	})
}
