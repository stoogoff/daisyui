<template>
	<div class="flex flex-col py-8 px-4 mb-4 border-4 border-dashed cursor-pointer" :class="colour">
		<input
			ref="fileUpload"
			type="file"
			class="hidden"
			:accept="acceptString"
		/>
		<div class="text-center">
			<span class="inline-block mr-1 relative top-2">
				<icon :icon="icon" lg />
			</span>
			<span class="text-lg">
				<slot>Drag files or click to upload.</slot>
			</span>
		</div>
	</div>
</template>

<script>

import Vue from 'vue'
import Icon from '../feedback/icon'

const uploadOff = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L6.56 8.45L5 10H8.11L9 10.89V16H14.11L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M15 10H19L12 3L9.1 5.9L15 11.8V10Z" /></svg>'
const upload = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" /></svg>'

export default Vue.component('DropZone', {
	props: {
		accept: {
			type: Array,
			default: () => ['*/*'],
		},
	},

	components: {
		'icon': Icon,
	},

	data() {
		return {
			dragging: false,
			fileError: false,
		}
	},

	computed: {
		icon() {
			return this.fileError ? uploadOff : upload
		},

		acceptString() {
			return this.accept.join(',')
		},

		colour() {
			if(this.fileError) {
				return 'text-error'
			}

			if(this.dragging) {
				return 'text-info'
			}

			return ''
		},
	},

mounted() {
		const dropzone = this.$el
		const fileUpload = this.$refs.fileUpload

		if(dropzone) {
			dropzone.addEventListener('click', () => {
				if(fileUpload) {
					fileUpload.click()
				}
			})

			dropzone.addEventListener('dragenter', e => {
				e.preventDefault()

				this.dragging = true

				let fileList = Array.from(e.dataTransfer.items || [])

				e.dataTransfer.dropEffect = 'copy'
				e.dataTransfer.effectAllowed = 'copy'

				fileList = this.excludeRestrictedFiles(fileList)

				if(fileList.length === 0) {
					this.fileError = true
				}
			})

			dropzone.addEventListener('dragleave', e => {
				e.preventDefault()

				this.dragging = false
				this.fileError = false
			})

			dropzone.addEventListener('dragover', e => {
				e.preventDefault()

				e.dataTransfer.dropEffect = 'copy'
				e.dataTransfer.effectAllowed = 'copy'

				this.dragging = true
			})

			dropzone.addEventListener('drop', e => {
				e.preventDefault()

				this.dragging = false

				if(this.fileError) {
					this.fileError = false
					return
				}

				if(e.dataTransfer) {
					const fileList = this.excludeRestrictedFiles(
						Array.from(e.dataTransfer.files)
					)
					if(fileList.length > 0) {
						this.filesSelected(fileList)
					}
				}
			})
		}

		if(fileUpload) {
			fileUpload.addEventListener('change', (e) => {
				if(e.target.files) {
					this.filesSelected(Array.from(e.target.files))
				}
			})
		}
	},

	methods: {
		dragenter(e) {
			e.preventDefault()
			this.dragging = true

			e.dataTransfer.dropEffect = 'copy'
			e.dataTransfer.effectAllowed = 'copy'

			const fileList = this.excludeRestrictedFiles(Array.from(e.dataTransfer.items || []))

			if(fileList.length === 0) {
				this.fileError = true
			}
		},

		dragleave(e) {
			e.preventDefault()
			this.dragging = false
			this.fileError = false
		},

		drop(e) {
			e.preventDefault()
			this.dragging = false
			this.fileError = false

			console.log(e.dataTransfer)
			Array.from(e.dataTransfer.files).forEach(f => console.log(f))
			Array.from(e.dataTransfer.items).forEach(f => {
				console.log(f)

				const file = f.getAsFile()

				console.log(file)
			})
		},

		excludeRestrictedFiles(fileList) {
			return fileList.filter((file) => this.isAcceptableFileType(file))
		},

		isAcceptableFileType(file) {
			if(file.type === '' && !file.name) return true
			if(this.accept.length === 0) return true
			if(this.accept.includes('*/*')) return true
			for(let i = 0, len = this.accept.length; i < len; ++i) {
				const accept = this.accept[i]

				if(accept.endsWith('/*')) {
					const acceptSplit = accept.split('/')
					const typeSplit = file.type.split('/')

					if(acceptSplit[0] === typeSplit[0]) {
						return true
					}
				}

				if(accept.includes('/') && file.type === accept) {
					return true
				}

				if(accept.startsWith('.') && file.name !== undefined) {
					const ext = file.name.substring(file.name.lastIndexOf('.'))

					if(accept === ext) {
						return true
					}
				}
			}
			return false
		},

		filesSelected(fileList) {
			this.$emit('input', fileList)
		},
	},
})
</script>
