import { Icon } from '@chakra-ui/icons';
import * as React from 'react';
const RightPlayIcon = (props) => (
	<Icon
		xmlns='http://www.w3.org/2000/svg'
		width={19}
		height={17}
		fill='none'
		{...props}>
		<path
			fill='#fff'
			d='M.84 3.065v10.367c0 2.124 2.13 3.456 3.83 2.394l4.15-2.589 4.15-2.6c1.7-1.061 1.7-3.715 0-4.777l-4.15-2.6L4.67.67C2.97-.39.84.93.84 3.066ZM17.316 15.75c-.41 0-.75-.369-.75-.813V1.548c0-.444.34-.812.75-.812s.75.368.75.812v13.39c0 .444-.33.813-.75.813Z'
		/>
	</Icon>
);
export default RightPlayIcon;
