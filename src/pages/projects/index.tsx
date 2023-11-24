import React, { useEffect } from 'react';
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Avatar,
	Stack,
	Text,
	Spacer,
	HStack,
	Heading,
	Box,
	Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import DashLayout from '@/components/containers/dashboard/DashLayout';
import DoubleQuoteIcon from '../../../public/images/images/DoubleQuoteIcon';

import { useRouter } from 'next/router';
import { toggleUploadVideoModal } from '@/components/store/actions/modalActions';
import { useAppDispatch, useAppSelector } from '@/components/hooks/redux-hooks';
import { logout } from '@/components/store/actions/authActions';
import { toast } from 'react-toastify';
import WithAuth from '@/components/common/WithAuth';
import AvatarComp from '@/components/common/AvtarComp';
import GlobalTable from '@/components/common/GlobalTable';
import useColAllProject from '@/components/containers/dashboard/useColAllProject';
import { GlobalTableProps } from '@/components/store/models/page-props';
import { fetchAllProject, handlePageChange, resetData } from '@/components/store/actions/dashboardActions';
import ResponsivePagination from 'react-responsive-pagination';
import Scrollbars from 'react-custom-scrollbars';

interface Project { }

function Project({ }: Project) {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { user: { access_token } } = useAppSelector(state => state.auth)
	const { data, totalPage, page, dataLoading } = useAppSelector(state => state.dashboard)

	useEffect(() => {
		if (dataLoading) {
			dispatch(fetchAllProject(access_token))
		}
	}, [page, dataLoading])

	useEffect(()=>{
		return ()=>{
			dispatch(handlePageChange(1))
		}
	},[])

	return (
		<DashLayout>
			<Stack
				direction={'row'}
				spacing={0}
				h={'100%'}
				w={'100%'}
				py={"1rem"}
			// border={'1px solid yellow'}
			>
				<Stack
					// border={'1px solid blue'}
					px={"1rem"}
					// spacing={'1rem'}
					w={'100%'}

				>
					<HStack
						// border={"1px solid pink"}
						px={'1rem'}
						h={'10%'}>
						<Text fontWeight={400}>All Project</Text>
						<Spacer />
						<AvatarComp />
					</HStack>
					{/* <HStack
						// border={"1px solid orange"}
						flex={1}>
						<Stack
							//  border={"1px solid green"}
							w={'50%'}
							h={'100%'}
							px={'1.5rem'}>
							<Heading
								as='h4'
								size='md'
								fontWeight={500}>
								Create audio
							</Heading>
							<Text
								lineHeight={'1.5rem'}
								color={'rgb(120, 128, 140)'}>
								Use the Editor to create audio from plain text,
								or upload audio to BeyondWords.
							</Text>
							<Stack
								mt={'2rem'}
								spacing={'1.5rem'}
								//  border={"1px solid red"}
								flex={1}>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										Text-to-Speech Editor
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										Upload Audio
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
							</Stack>
						</Stack>
						<Stack
							// border={"1px solid blue"}
							w={'50%'}
							h={'100%'}
							px={'1.5rem'}>
							<Heading
								as='h4'
								size='md'
								fontWeight={500}>
								Connect your CMS
							</Heading>
							<Text
								lineHeight={'1.5rem'}
								color={'rgb(120, 128, 140)'}>
								Automatically create and embed audio by
								connecting your CMS to BeyondWords.
							</Text>
							<Stack
								mt={'2rem'}
								spacing={'1.5rem'}
								// border={"1px solid red"}
								flex={1}>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										WordPress
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										Ghost
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										RSS FEED IMPORTER{' '}
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
								<HStack
									_hover={{
										boxShadow:
											'rgb(248, 244, 255) 0px 2px 6px',
										backgroundColor: 'rgb(248, 244, 255)',
									}}
									px={'1rem'}
									border={'1px solid rgb(233, 232, 234)'}
									h={'4rem'}
									borderRadius={'.5rem'}>
									<Stack
										h={'2.5rem'}
										w={'2.5rem'}
										background={'#000'}
										borderRadius={'.3rem'}
										_hover={{
											background:
												'linear-gradient(rgb(58, 61, 252) 0%, rgb(219, 58, 97) 82.81%, rgb(252, 58, 65) 100%)',
										}}
										justifyContent={'center'}
										alignItems={'center'}>
										<DoubleQuoteIcon color={'#FFF'} />
									</Stack>
									<Text
										fontSize={'1.1rem'}
										fontWeight={500}
										color={'rgb(120, 128, 140)'}
										_hover={{ color: '#000' }}>
										API
									</Text>
									<Spacer />
									<ArrowForwardIcon
										height={'2rem'}
										color='#000'
										_hover={{ color: 'teal' }}
										cursor={'pointer'}
										width={'2rem'}
									/>
								</HStack>
							</Stack>
						</Stack>
					</HStack> */}
					<Scrollbars
						style={{ width: "100%" }}
						autoHeight
						autoHeightMin={0}
						autoHeightMax="calc(100vh - 10rem)"
					>
						<GlobalTable
							tableStyle={{
								border: 0,
								cellPadding: 0,
								cellSpacing: 0,
							}}
							colorScheme='gray'
							loadingMsg='Loading...'
							cols={
								useColAllProject() as GlobalTableProps["cols"]
							}
							data={data}
						/>
					</Scrollbars>

					<Stack
						// border={"1px solid red"}
						justifyContent={"center"} alignItems={"center"}>
						<Box w={"50%"}>
							<ResponsivePagination
								total={totalPage}
								current={page}
								onPageChange={page => {
									dispatch(handlePageChange(page))
									dispatch(resetData())
								}}
								previousLabel={"<"}
								nextLabel={">"}
							/>
						</Box>

					</Stack>
				</Stack>
			</Stack>
		</DashLayout>
	);
}

export default WithAuth(Project);
// export default Project;
