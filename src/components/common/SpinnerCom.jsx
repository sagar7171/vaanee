import { Flex, Spinner,Text } from '@chakra-ui/react';
import React from 'react';
import { useAppSelector } from '@/components/hooks/redux-hooks';
function SpinnerCom({msg=false}) {
	// const { siteLoader } = useAppSelector((state) => state.modal);
	return (
		<Flex
			position={'absolute'}
			width={'100vw'}
			height={'100vh'}
			// style={{ display: siteLoader ||show? 'flex' : 'none' }}
			opacity={0.7}
			top={0}
			left={0}
			zIndex={99999}
			justifyContent={'center'}
			alignItems={'center'}>

{msg?<Text>Loading...</Text>:<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='blue.500'
				size='xl'
			/>}
		</Flex>
	);
}

export default SpinnerCom;
