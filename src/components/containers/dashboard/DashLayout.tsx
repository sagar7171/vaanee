import { Box, Flex, Stack, Text, Tooltip, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
// import SideBar from './SideBar';
// import SideNav from './SideNav';
import SidebarCom from './SidebarCom';
import { Image } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import AllProjectIcon from '../../../../public/images/images/AllProjectIcon';
import { useAppSelector, useAppDispatch } from '@/components/hooks/redux-hooks';
import UploadVideoModalModel from '@/components/modal/UploadVideoModal';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, SettingsIcon } from "@chakra-ui/icons";
import { handleSidebarIsOpen } from '@/components/store/actions/dashboardActions';

interface DashLayout {
	children: React.ReactNode;
}

function DashLayout({ children }: DashLayout) {
	// const [isOpen, setIsOpen] = useState(true);
	const router = useRouter();
	const dispatch=useAppDispatch();
	const { showUploadVideoModal } = useAppSelector(state => state.modal)
	const { sidebarIsOpen } = useAppSelector(state => state.dashboard)

	const sideBarList = [{ title: "Dashboard", icon: SettingsIcon, label: "Dashboard", pathname: "/dashboard" },{ title: "Show all project", icon: AllProjectIcon, label: "My Project", pathname: "/projects" }]

	return (
		<Flex height="100vh" overflow="hidden">
			<SidebarCom sidebarWidth={sidebarIsOpen ? "10rem" : "3rem"}>
				{sidebarIsOpen ? (
					<VStack w={'100%'} h={'100%'}>
						<Link href={'/'}>
							<Flex alignItems="center" height={"3rem"} p={"1rem"}>
								<Image
									src={"images/images/logo-light.png"}
									objectFit='cover'
									// priority
									alt='Logo'
								/>
								<Box
									cursor={'pointer'}
									p={0}
									onClick={(e) => {
										e.preventDefault()
										e.stopPropagation()
										dispatch(handleSidebarIsOpen(!sidebarIsOpen))
									}}>
									<ArrowLeftIcon h={'.5rem'} color={'rgb(120, 128, 140)'}
										_hover={{ color: '#1E90FF' }} />
								</Box>
							</Flex>
						</Link>
						<VStack mt={"2rem"} w={'100%'}>
							{sideBarList.map((item, index) => {
								return <React.Fragment key={index}>
									<Stack w={'100%'} px={'1rem'}
										_hover={{ background: 'rgb(248, 244, 255)' }}
									>
										<Link href={item.pathname}>
											<Text fontWeight={"500"} color={router.pathname.includes(item.pathname) ? "#1E90FF" : ''}>{item.label}</Text>
										</Link>
									</Stack>
								</React.Fragment>
							})}

							<Stack w={'100%'} px={'1rem'}
								_hover={{ background: 'rgb(248, 244, 255)' }}
							>
								<Link href={'/profile'}>
									<Text fontWeight={"500"} color={router.pathname.includes('/profile') ? "#1E90FF" : ''}>Profile</Text>
								</Link>
							</Stack>
						</VStack>
					</VStack>
				) : (
					<VStack h={'100%'}>
						<Link href={'/'}>
							<Flex alignItems="center" height={"2rem"} width={"1.6rem"}>
								<Image objectFit='cover' src={"images/images/vlipprLogo.png"} alt={''} />
								<Box
									cursor={'pointer'}
									p={0}
									onClick={(e) => {
										e.preventDefault()
										e.stopPropagation()
										dispatch(handleSidebarIsOpen(!sidebarIsOpen))
									}}>

									<ArrowRightIcon h={'.5rem'} color={'rgb(120, 128, 140)'}
										_hover={{ color: '#1E90FF' }}
									/>
								</Box>
							</Flex>
						</Link>
						<VStack mt={"2rem"}>
							{sideBarList.map((item, key) => {
								const { icon: Icon, title, pathname } = item;
								return <Tooltip
									key={key}
									hasArrow
									label={title}
									bg='rgb(29, 24, 33)'
									placement={'right'}
									color='rgb(255, 255, 255)'>
									<Stack
										h={'2rem'}
										justifyContent={'center'}
										alignItems={'center'}
										cursor={'pointer'}
										w={'2rem'}
										style={
											router.pathname.includes(pathname)
												? {
													border: `.13rem solid black`,
													background: '#fff',
													borderRadius: '.4rem',
												}
												: {}
										}
									>
										<Link href={pathname}>
											<Stack
												borderRadius={'.2rem'}
												justifyContent={'center'}
												alignItems={'center'}
												h={'1.5rem'}
												w={'1.5rem'}
												// _hover={{ color: "#1E90FF" }}
												bg={'rgba(29, 24, 33, 0.1)'}
											>
												<Icon />
											</Stack>
										</Link>

									</Stack>
								</Tooltip>
							})
							}
							<Tooltip
								hasArrow
								label='My Profile'
								bg='rgb(29, 24, 33)'
								placement={'right'}
								color='rgb(255, 255, 255)'>
								<Stack
									h={'2rem'}
									justifyContent={'center'}
									alignItems={'center'}
									cursor={'pointer'}
									w={'2rem'}
									style={
										router.pathname.includes("/profile")
											? {
												border: `.13rem solid rgb(29, 24, 33)`,
												background: '#fff',
												borderRadius: '.4rem',
											}
											: {}
									}>
									<Link href={"/profile"}>
										<Stack
											borderRadius={'.2rem'}
											justifyContent={'center'}
											alignItems={'center'}
											textTransform={'uppercase'}
											h={'1.5rem'}
											w={'1.5rem'}
											bg={
												router.pathname.includes('/profile')
													? 'rgb(8, 199, 84)'
													: 'rgba(8, 199, 84, 0.3)'
											}>
											<Text
												color={'rgb(255, 255, 255)'}
												fontWeight={700}>
												R
											</Text>
										</Stack>
									</Link>
								</Stack>
							</Tooltip>
						</VStack>
					</VStack>


				)}
			</SidebarCom>
			<Box width="100%"
			>
				<>
					{children}
				</>
			</Box>
			{showUploadVideoModal && <UploadVideoModalModel />}
		</Flex>
	);
}

export default DashLayout;
