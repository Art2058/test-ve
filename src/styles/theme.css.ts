import { createGlobalTheme } from '@vanilla-extract/css'

import { px } from '~common/utils'

export const mediaSize = {
	desktop: 1280,
	tablet: 840
} as const

export const vars = createGlobalTheme(':root', {
	font: {
		roboto: 'Roboto, sans-serif',
		lora: 'Lora, serif',
		pretendard: 'Pretendard-Regular'
	},
	mediaSize: {
		desktop: px(mediaSize.desktop),
		tablet: px(mediaSize.tablet)
	}
})
