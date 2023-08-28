import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { mediaSize } from './theme.css'

const space = {
	'sp-0': 0,
	'sp-2': 2,
	'sp-4': 4,
	'sp-6': 6,
	'sp-8': 8,
	'sp-10': 10,
	'sp-12': 12,
	'sp-16': 16,
	'sp-20': 20,
	'sp-24': 24,
	'sp-28': 28,
	'sp-32': 32,
	'sp-auto': 'auto'
} as const

const borderWidth = {
	none: 0,
	thin: 1,
	medium: 2,
	thick: 3
} as const

const borderRadius = {
	none: 0,
	rounded: 8,
	'rounded-lg': 24
} as const

const zIndex = {
	'z-0': 0,
	'z-10': 10,
	'z-20': 20,
	'z-30': 30,
	'z-40': 40,
	'z-50': 50,
	'z-auto': 'auto'
} as const

const fontSize = {
	'text-12': 12,
	'text-13': 13,
	'text-14': 14,
	'text-16': 16,
	'text-18': 18,
	'text-20': 20,
	'text-24': 24,
	'text-28': 28,
	'text-32': 32,
	'text-36': 36,
	'text-40': 40,
	'text-48': 48
} as const

const lineHeight = {
	'leading-tight': 1.15,
	'leading-normal': 1.25,
	'leading-relaxed': 1.375,
	'leading-loose': 1.5
} as const

const positions = [0, '100%', 'auto'] as const

const color = {
	primary: '#FF354A',
	white: '#fff',
	gray1: '#A9A9A9',
	gray2: '#767676',
	gray3: '#2C2C2C',
	gray4: '#212121',
	black1: '#262626',
	black2: '#151515'
} as const

export const responsiveProperties = defineProperties({
	conditions: {
		mobile: { '@media': `(max-width: ${mediaSize.tablet}px)` },
		tablet: { '@media': `(max-width: ${mediaSize.desktop}px)` },
		desktop: {}
	},
	defaultCondition: 'desktop',
	properties: {
		position: ['relative', 'absolute', 'fixed', 'sticky', 'static'],
		top: positions,
		bottom: positions,
		left: positions,
		right: positions,
		zIndex,
		display: ['none', 'flex', 'inline-flex', 'block', 'inline-block'],
		flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
		justifyContent: [
			'center',
			'flex-start',
			'flex-end',
			'space-around',
			'space-between',
			'space-evenly'
		],
		alignItems: ['center', 'flex-start', 'flex-end'],
		alignSelf: ['center', 'flex-start', 'flex-end'],
		rowGap: space,
		columnGap: space,
		flex: ['1', '100%', 'none', 'auto'],
		marginTop: space,
		marginBottom: space,
		marginLeft: space,
		marginRight: space,
		paddingTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
		width: [0, '100%', 'auto', 'inherit', 'fit-content'],
		height: [0, '100%', 'auto', 'inherit', 'fit-content'],
		fontSize,
		textAlign: ['center', 'left', 'right'],
		lineHeight
	},
	shorthands: {
		placeItems: ['justifyContent', 'alignItems'],
		gap: ['rowGap', 'columnGap'],
		margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		inset: ['top', 'bottom', 'left', 'right']
	}
})

const colorProperties = defineProperties({
	properties: {
		color,
		backgroundColor: color,
		borderColor: color
	}
})

export const otherProperties = defineProperties({
	properties: {
		fontWeight: ['400', '600', '700'],
		borderTopWidth: borderWidth,
		borderBottomWidth: borderWidth,
		borderLeftWidth: borderWidth,
		borderRightWidth: borderWidth,
		borderStyle: ['dashed', 'solid'],
		borderRadius: borderRadius,
		backgroundPosition: ['center', 'top', 'bottom', 'left', 'right'],
		backgroundSize: ['cover', 'contain', 'auto'],
		backgroundRepeat: ['no-repeat', 'repeat']
	},
	shorthands: {
		borderWidthX: ['borderLeftWidth', 'borderRightWidth'],
		borderWidthY: ['borderTopWidth', 'borderBottomWidth'],
		borderWidth: ['borderTopWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRightWidth']
	}
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties, otherProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
