import { StyleRule } from '@vanilla-extract/css'

import { mediaSize } from '~styles/theme.css'

export const px = (value: number) => `${value}px`

export const isClient = () => typeof window !== 'undefined'

export const isIOS = () => {
	if (!isClient()) return false

	const platform = navigator?.userAgent || 'unknown'

	return /iPhone|iPod|iPad/.test(platform)
}

export const getAppStoreLink = () =>
	isIOS()
		? 'itms-apps://itunes.apple.com/app/id1607034662'
		: 'https://apps.apple.com/kr/app/apple-store/id1607034662'

export const createSequentialArray = (size: number) => Array.from({ length: size }, (_, i) => i + 1)

export const responsiveStyle = ({
	tablet = {},
	mobile = {}
}: {
	tablet?: StyleRule
	mobile?: StyleRule
}) => ({
	'@media': {
		[`(max-width: ${mediaSize.desktop}px)`]: tablet,
		[`(max-width: ${mediaSize.tablet}px)`]: mobile
	}
})

export const copyToClipboard = (text: string) => {
	const textarea = document.createElement('textarea')
	textarea.value = text
	document.body.appendChild(textarea)
	textarea.select()
	document.execCommand('copy')
	document.body.removeChild(textarea)
}
