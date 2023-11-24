import React, { useState } from 'react'
import SideBar from '@/components/containers/dashboard/SideBar';
import {
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Stack,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import VaaneeLogo from 'public/images/vaaneeLogo.png';
import Image from 'next/image';
import CreateProjectIcon from '../../../../public/images/images/CreatProjectIcon';
import { useRouter } from 'next/router';
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons'
import SidebarCom from './SidebarCom';
function SideNav({ width, expand }: { width: string, expand: boolean }) {
	const router = useRouter()
	let sideBarOption = [
		{
			label: 'All Project',
			active: true,
			title: "All Project",
			icon: CreateProjectIcon,
		},
		{
			label: 'My Profile',
			title: "My Profile",
			icon: CreateProjectIcon,
			active: false,
		},
	];
	return (
		<Stack
			// border={'1px solid green'}
			h={'100%'}
			position={"absolute"}
			left={expand ? `0` : `-${width}`}
			transition={"left 0.3s ease-in-out"}
			border={".1rem solid rgb(233, 232, 234)"}
			w={width}>
			<Box
				pt={'.5rem'}
				pr={'.5rem'}>
				<Image
					src={VaaneeLogo}
					priority
					alt='Logo'
				/>
			</Box>
			<Box mt={'.5rem'}>
				{sideBarOption.map((item, index) => {
					const { icon: Icon } = item
					return (
						<HStack spacing={0} key={index} px={'.7rem'}>
							<Tooltip
								hasArrow
								label={item.title}
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
							<Text
								color={
									item.active
										? 'rgb(148, 58, 252)'
										: ''
								}
								cursor={'pointer'}
								px={'1.5rem'}
								fontSize={'1rem'}
								font-weight={500}
								_hover={{
									background: 'rgb(248, 244, 255)',
								}}
								py={'.4rem'}>
								{item.label}
							</Text>
						</HStack>
					);
				})}
			</Box>
		</Stack>
	)
}

export default SideNav