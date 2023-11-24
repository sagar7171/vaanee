import { Icon } from '@chakra-ui/react';
import * as React from 'react';
const UploadIcon = (props) => (
	<Icon
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={2}
		style={{
			verticalAlign: 'middle',
		}}
		viewBox='0 0 24 24'
		{...props}>
		<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12' />
	</Icon>
);
export default UploadIcon;
