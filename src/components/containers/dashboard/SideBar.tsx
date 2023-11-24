import React from 'react';
import CreateProjectIcon from '../../../../public/images/images/CreatProjectIcon';
import AllProjectIcon from '../../../../public/images/images/AllProjectIcon';
import { useRouter } from 'next/router';
import { Stack, Text, Tooltip } from '@chakra-ui/react';
import CreateProjectModal from "../../modal/CreateProjectModal"
interface SideBar {
	width: string;
}

function SideBar({width}:SideBar) {
	const router = useRouter();

	return (
		<Stack
			background={'rgb(250, 250, 250)'}
			opacity={1}
			// border={'1px solid green'}
			pt={'1rem'}
			alignItems={'center'}
			w={width}>
			<Tooltip
				hasArrow
				label='Test'
				bg='rgb(29, 24, 33)'
				placement={'right'}
				color='rgb(255, 255, 255)'>
				<Stack
					h={'2.5rem'}
					justifyContent={'center'}
					alignItems={'center'}
					cursor={'pointer'}
					w={'2.5rem'}
					style={
						router.pathname.includes('rahul')
							? {
									border: `.13rem solid rgb(29, 24, 33)`,
									background: '#fff',
									borderRadius: '.4rem',
							  }
							: {}
					}>
					<Stack
						borderRadius={'.2rem'}
						justifyContent={'center'}
						alignItems={'center'}
						textTransform={'uppercase'}
						h={'2rem'}
						w={'2rem'}
						bg={
							router.pathname.includes('rahul')
								? 'rgb(8, 199, 84)'
								: 'rgba(8, 199, 84, 0.3)'
						}>
						<Text
							color={'rgb(255, 255, 255)'}
							fontWeight={700}>
							TE
						</Text>
					</Stack>
				</Stack>
			</Tooltip>
			<Tooltip
				hasArrow
				label='Create new project'
				bg='rgb(29, 24, 33)'
				placement={'right'}
				color='rgb(255, 255, 255)'>
				<Stack
					borderRadius={'.2rem'}
					justifyContent={'center'}
					alignItems={'center'}
					h={'2rem'}
					cursor={'pointer'}
					w={'2rem'}
					bg={'rgba(29, 24, 33, 0.1)'}>
					<CreateProjectIcon />
				</Stack>
			</Tooltip>
			<Tooltip
				hasArrow
				label='Show all project'
				bg='rgb(29, 24, 33)'
				placement={'right'}
				color='rgb(255, 255, 255)'>
				<Stack
					h={'2.5rem'}
					justifyContent={'center'}
					alignItems={'center'}
					cursor={'pointer'}
					w={'2.5rem'}
					style={
						router.pathname.includes('rahul')
							? {
									border: `.15rem solid black`,
									background: '#fff',
									borderRadius: '.4rem',
							  }
							: {}
					}>
					<Stack
						borderRadius={'.2rem'}
						justifyContent={'center'}
						alignItems={'center'}
						h={'2rem'}
						w={'2rem'}
						bg={'rgba(29, 24, 33, 0.1)'}>
						<AllProjectIcon />
					</Stack>
				</Stack>
			</Tooltip>
            {/* <CreateProjectModal /> */}
		</Stack>
	);
}

export default SideBar;
