import React from 'react';
import ModalComp from '../common/ModalCom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUploadVideoModal } from '../store/actions/modalActions';
import {
	Spacer,
	Text,
	Button,
	Flex,
	Heading,
	Box,
	Circle,
} from '@chakra-ui/react';
import ThemeInput from '../forms/ThemeInput';
import UploadIcon from '../../../public/images/svg/UploadIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { uploadVideoModalValidation } from '../../utils/validation';
import { Search2Icon } from '@chakra-ui/icons';
import VideoElementStep from '../containers/uploadVideo/VideoElementStep';
import UploadStep from '../containers/uploadVideo/UploadStep';
import DetailsStep from '../containers/uploadVideo/DetailsStep';
import Visibility from '../containers/uploadVideo/Visibility';
import VideoPlayerStep from '../containers/uploadVideo/VideoPlayerStep';
import { resetToInitial } from '../store/actions/uploadVideoModalActions';
import CreateProjectStep from '../containers/uploadVideo/CreateProjectStep';
const UploadVideoModal = () => {
	const modal = useSelector((state) => state.modal);
	const uploadVideModal = useSelector((state) => state.uploadVideModal);
	const { showUploadVideoModal } = modal;
	const { currentStep } = uploadVideModal;
	const dispatch = useDispatch();
	const {
		// control,
		register,
		// handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(uploadVideoModalValidation),
	});

	const steps = [
		{
			label: 'Upload',
		},
		{
			label: 'Video Elements',
		},

		{
			label: 'Details',
		},
		{
			label: 'Visibility',
		},
	];

	return (
		<ModalComp
			size={'full'}
			isCentered={true}
			modalConBackground={'#000000'}
			autoFocus={false}
			isOpen={showUploadVideoModal}
			onClose={() => {
				dispatch(resetToInitial())
				dispatch(toggleUploadVideoModal());
			}}
			modalBody={
				<Flex
					my='1.5rem'
					flexDirection={'column'}>
					{/* <Flex
						mb='1rem'
						w={'65%'}>
						<ThemeInput
							borderRadius={'.3rem 0rem 0rem .3rem'}
							placeholder={'Search for video'}
							name={'search'}
							register={register}
							errorMsg={errors?.search?.message}
						/>
						<Button
							type='button'
							borderRadius={'0rem .3rem .3rem 0rem'}
							colorScheme='b<UploadStep />lue'>
							<Search2Icon />
						</Button>
					</Flex> */}
					<Flex
						// border={'2px solid blue'}
						alignItems={'center'}
						justifyContent={'center'}>
						<Circle
							size='2.5rem'
							bg='blue.600'>
							<UploadIcon
								h={'1.4rem'}
								width={'1.3rem'}
							/>
						</Circle>

						<Heading
							ml={'.5rem'}
							as='h3'
							fontWeight={400}
							color={"white"}
							fontSize={'1.1rem'}
							size='sm'>
							Upload new video
						</Heading>
						<Spacer />
						<Heading
							ml={'.5rem'}
							as='h3'
							color={"white"}
							fontWeight={400}
							fontSize={'1.1rem'}
							size='sm'>
							3 Step Video Upload
						</Heading>
					</Flex>
					<Box
						mt='.5rem'
						bg={'#7E7E7E'}	
						// border={'1px solid white'}
						h={'.1rem'}></Box>
					<Flex
						// bg={ '#2F3032' }
						bg={currentStep <= 4 ? '#2F3032' : ''}

						// last step black background
						// p={'1rem'}
						borderRadius={'.5rem'}
						flexDirection={'column'}
						// border={'2px solid green'}
						mt='2rem'>
						<Flex
							mt={'2rem'}
							// border={'1px solid red'}
						>
							{steps.map((item, index) => {
								const { label } = item;
								return (
									<React.Fragment key={index}>
										<Flex
											flexDirection={'column'}
											justifyContent={'center'}
											w={'25%'}
											alignItems={'center'}>
											<Text
												w='100%'
												color={"white"}
												textAlign={'center'}>
												{label}
											</Text>
											<Flex
												w='100%'
												alignItems={'center'}>
												<Flex
													flex={1}
													bg={'#7E7E7E'}
													h={
														index === 0
															? '0rem'
															: '.3rem'
													}
													w={
														index === 0
															? '0rem'
															: '4rem'
													}></Flex>
												<Circle
													bg={'#D9D9D9'}
													size={'1rem'}
													// onClick={() => {
													// 	index + 1 !==
													// 		currentStep &&
													// 		index + 1 <=
													// 			currentStep &&
													// 		dispatch(
													// 			handleCurrentStep(
													// 				index + 1,
													// 			),
													// 		);
													// }}
													border={
														index + 1 <= currentStep
															? '3px solid #20AEF1'
															: ''
													}></Circle>

												<Flex
													flex={1}
													bg={'#7E7E7E'}
													h={
														index ===
														steps.length - 1
															? '0rem'
															: '.3rem'
													}
													w={
														index ===
														steps.length - 1
															? '0rem'
															: '4rem'
													}></Flex>
											</Flex>
										</Flex>
									</React.Fragment>
								);
							})}
						</Flex>
						<Flex
							// border={'1px solid red'}
							mx={'4rem'}
							mt={'2rem'}
							mb={'1.5rem'}

							// mt='4rem'
						>
							{/* step 1 */}

							{currentStep === 1 && <CreateProjectStep />}
							{/* step 2 */}
							{currentStep === 2 && <UploadStep />}
							{/* step 3 */}
							{currentStep === 3 && <VideoElementStep />}
							{/* step 4 */}
							{currentStep === 4 && <DetailsStep />}
							{/* step 5 */}
							{currentStep === 5 && <Visibility />}
							{/* step 6 */}
							{currentStep === 6 && <VideoPlayerStep />}
						</Flex>
					</Flex>
				</Flex>
			}
		/>
	);
};

export default UploadVideoModal;
