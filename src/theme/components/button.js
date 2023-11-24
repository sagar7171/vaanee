import { mode } from '@chakra-ui/theme-tools';
const accessibleColorMap = {
	yellow: {
		bg: 'yellow.400',
		color: 'black',
		hoverBg: 'yellow.500',
		activeBg: 'yellow.600',
	},
	cyan: {
		bg: 'cyan.400',
		color: 'black',
		hoverBg: 'cyan.500',
		activeBg: 'cyan.600',
	},
	red: {
		bg: 'red.400',
		color: 'white',
		hoverBg: 'red.500',
		activeBg: 'red.600',
	},
};

const defaultButtonProps = (props) => {
	const { colorScheme: c } = props;
	const {
		bg = `${c}.600`,
		color = 'white',
		hoverBg = `${c}.600`,
		activeBg = `${c}.700`,
	} = accessibleColorMap[c] || {};

	const background = mode(bg, `${c}.200`)(props);
	const shadowColor = c === 'brand' ? `${c}.500` : 'rgba(0, 0, 0, 0.35)';
	return {
		bg: background,
		color: mode(color, `gray.800`)(props),
		boxShadow: `${shadowColor}`,
		_hover: {
			bg: mode(hoverBg, `${c}.300`)(props),
			boxShadow: `0px 11px 22px ${shadowColor}`,
			_disabled: {
				bg: background,
			},
		},
		_active: {
			bg: mode(activeBg, `${c}.400`)(props),
			boxShadow: `1px 2px 5px ${shadowColor}`,
		},
	};
};

const baseStyle = () => {
	return {
		fontFamily: `Lato, sans-serif`,
		borderRadius: '6px',
		fontWeight: 500,
		lineHeight: '26px',
		letterSpacing: '0.06em',
		textAlign: 'left',
	};
};

// const sizes = {
//   lg: {
//     fontSize: 'lg',
//     px: 6,
//   },
//   md: {
//     fontSize: 'md',
//     px: 4,
//   },
//   sm: {
//     fontSize: 'sm',
//     px: 3,
//   },
//   xs: {
//     fontSize: 'xs',
//     px: 2,
//   },
// };

const defaultProps = {
	variant: 'with-shadow',
	size: 'md',
	colorScheme: 'brand',
};

const variants = {
	'with-shadow': defaultButtonProps,
	ghost: {
		color: 'gray.500',
	},
	solid: {
		bg: 'blue.500',
		color: 'white',
		fontFamily: `Lato, sans-serif`,
		fontSize: 'sm',
		paddingTop: '15px',
		paddingBottom: '15px',
		paddingLeft: '30px',
		paddingRight: '30px',
	},
	error: {
		bg: 'red.600',
		color: 'white',
		fontFamily: `Lato, sans-serif`,
		fontSize: 'sm',
	},
	choosefile: {
		bgColor: 'blue.200',
		color: 'blue.300',
		borderRadius: '12px',
		boxShadow: `0px 11px 22px red`,
		fontFamily: `Lato, sans-serif`,
		fontSize: 'sm',
		letterSpacing: '0',
		m: '4px',
		fontWeight: 400,
		h: '32px',
	},
};

const Button = {
	baseStyle,
	variants,
	// sizes,
	defaultProps,
};

export default Button;
