import { join } from 'path'

const components = [
	'actions',
	'data',
	'feedback',
	'input',
	'layout',
	'navigation',
	'transitions',
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
