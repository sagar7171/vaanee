const baseStyle = {
	fontSize: 'md',
	color: 'black.100',
	borderRadius: '16px',
};

const defaultProps = {
	size: 'md',
	variant: 'filled',
};

const variants = {
	filled: {
		field: {
			border: '1px solid',
			borderColor: '#303030',
			borderRadius: '12px',
			fontWeight: '400',
			fontFamily: `Lato, sans-serif`,
			bg: '#303030',
			_hover: {
				bg: '#404040',
				color: '#fff',
				border: '1px solid #303030',
			},
			_focus: {
				bg: '#FBFBFB',
				color: '#101010',
				border: '1px solid #FFf',
			},
		},
	},
	ghost: {
		field: {
			fontWeight: '400',
			fontFamily: `Lato, sans-serif`,
			_hover: {
				bg: '#FBFBFB',
			},
			_focus: {
				bg: '#FBFBFB',
			},
		},
	},
};

const Select = {
	baseStyle,
	defaultProps,
	variants,
};

export default Select;
