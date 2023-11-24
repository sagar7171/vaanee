import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

function ProgressBar({
	containerAttr,
	progressBarAtt,
	value,
	label,
	labelAttr,
}) {
	return (
		<Stack spacing={0}>
			{label && <Text {...labelAttr}>{label}</Text>}
			<Flex {...containerAttr}>
				<Box
					{...progressBarAtt}
					width={value}
				/>
			</Flex>
		</Stack>
	);
}

export default ProgressBar;
