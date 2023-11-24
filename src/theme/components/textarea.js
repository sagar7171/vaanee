const baseStyle = {
	fontSize: 'md',
	color: '#fff',
	fontWeight: '400',
	fontFamily: `Lato, sans-serif`,
	borderRadius: '16px',
};

const defaultProps = {
	size: 'md',
	variant: 'filled',
};

const variants = {
	filled: {
		border: '1px solid',
		borderColor: '#303030',
		borderRadius: '4px',
		fontWeight: '400',
		fontFamily: `Lato, sans-serif`,
		bg: '#303030',
		px: '1rem',
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
};

const Textarea = {
	baseStyle,
	defaultProps,
	variants,
};

export default Textarea;
