import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Spacer,
	Stack,
	Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import FloatingLabelThemeInput from '../../forms/FloatingLabelThemeInput';
import MediaUploader from '../../common/MediaUploader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { uploadVideoModalDetailsValidation } from '@/utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import {
	handleCurrentStep,
	updatedVideoRelatedData,
} from '../../store/actions/uploadVideoModalActions';
import Photo from '../../../../public/images/svg/photo.png';
// import Thumbnail from '../../../../public/images/svg/thumbnail.png';
import Image from 'next/image';
import { useAppSelector } from '@/components/hooks/redux-hooks';
function DetailsStep() {
	const uploadVideModal = useSelector((state) => state.uploadVideModal);
	const {
		uploadFileDataStep1: { videoFileName, id },
	} = uploadVideModal;
	const auth = useAppSelector((state) => state.auth);
	const {
		user: { access_token },
	} = auth;
	const dispatch = useDispatch();
	// const [state, setState] = useState({
	// 	thumbnailLocalPath: '',
	// });
	// const { thumbnailLocalPath } = state;
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(uploadVideoModalDetailsValidation),
	});
	// const handleThumbnailChange = (file) => {
	// 	const fileUrl = URL.createObjectURL(file);
	// 	setState((prev) => ({ ...prev, thumbnailLocalPath: fileUrl }));
	// 	setValue('thumbnail', file);
	// };
	const onSubmit = (formData) => {
		const transformData = new FormData();
		// transformData.append('thumbnail', formData.thumbnail);
		transformData.append('title', formData.title);
		transformData.append('description', formData.description);
		dispatch(updatedVideoRelatedData(access_token,id, transformData))
			.then((res) => {
				dispatch(handleCurrentStep(5));
			})
			.catch((err) => {
			});
	};
	useEffect(() => {
		setValue('title', videoFileName);
		// eslint-disable-next-line
	}, []);

	return (
		<Stack
			as={'form'}
			direction={'row'}
			pl={'2rem'}
			autoComplete='off'
			autoCapitalize='off'
			// border={"1px solid #fff"}
			flexGrow={1}
			noValidate='noValidate'
			onSubmit={handleSubmit(onSubmit)}>
			<Flex
				// border={'1px solid red'}
				w={'35%'}>
				<Flex
					w='100%'
					flexDirection={'column'}>
					<Flex
						bg={'#29292B'}
						h={'8rem'}
						border={'.1rem solid #000000'}
						borderRadius={'.6rem .6rem 0rem 0rem'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Image
							src={Photo}
							h={'3rem'}
							w={'3rem'}
						/>
					</Flex>
					<Flex
						border={'.1rem solid #000000'}
						bg={'#474747'}
						height={'3.5rem'}
						px={'1rem'}
						borderRadius={'0rem 0rem .6rem .6rem'}>
						<Flex
							// border={'1px solid orange'}

							fontWeight={700}
							// fontSize={"1rem"}
							flexDirection={'column'}>
							<Flex color='#FFF'>File Name</Flex>
							<Text color='#FFF'>{videoFileName}</Text>
						</Flex>
						<Spacer />
						<Flex
							// border={'1px solid red'}
							justifyContent={'center'}
							alignItems={'center'}>
							<CheckCircleIcon
								// color={'green'}
								w={'2rem'}
								h={'1.5rem'}
							/>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				// border={'1px solid red'}
				pl={'2rem'}
				flexDirection={'column'}
				w={'60%'}>
				{/* <Scrollbars
					autoHeight
					autoHeightMin={0}
					autoHeightMax='15rem'> */}
				<Stack spacing={3}>
					<FloatingLabelThemeInput
						name={'title'}
						isRequired={true}
						register={register}
						label={'Video Title'}
						formLabelAttObj={{
							fontWeight: 500,
							fontSize: '1rem',
						}}
						color={'#fff'}
						formHelperTextAttrObj={{
							fontWeight: 300,
							color: '#fff',
							fontSize: '.8rem',
						}}
						formHelperText={'Your video title 2-55 characters'}
						errorMsg={errors?.title?.message}
						// height={'3rem'}
						fontSize={'1rem'}
						_focus={{
							bg: '#2F3032',
							color: '#fff',
							border: '.1rem solid #fff',
						}}
						placeholder=' '
						border={'.1rem solid #fff'}
					/>
					<FloatingLabelThemeInput
						name={'description'}
						register={register}
						isRequired={true}
						color={'#fff'}
						label={'Video Description'}
						formLabelAttObj={{
							fontWeight: 500,
							fontSize: '1rem',
						}}
						errorMsg={errors?.description?.message}
						height={'4rem'}
						fontSize={'1rem'}
						_focus={{
							bg: '#2F3032',
							color: '#fff',
							border: '.1rem solid #fff',
						}}
						placeholder=' '
						border={'.1rem solid #fff'}
					/>
					{/* <Stack spacing={0}>
						<FormControl>
							<FormLabel
								as={'h4'}
								color={'#FFFFFF'}
								fontSize={'1rem'}
								fontWeight={500}>
								Thumbnail
							</FormLabel>
						</FormControl>
						<Text
							fontWeight={300}
							color={'#FFFFFF'}
							fontSize={'.8rem'}>
							Select or upload a picture that shows what's in your
							video. A good thumbnail stands out and draws
							viewers' attention.
						</Text>
						<Box w={'40%'}>
							<MediaUploader
								accept={['PNG', 'JPG', 'JPEG']}
								handleChange={handleThumbnailChange}
								name={'thumbnail'}
								errorMsg={errors?.thumbnail?.message}
								control={control}>
								<Stack
									mt={'.2rem'}
									border={'.15rem dotted #FFFFFF'}
									borderRadius={'.4rem'}
									justifyContent={'center'}
									alignItems={'center'}
									px={'.5rem'}
									minWidth={'2rem'}
									minH={'7rem'}
									spacing={1}>
									{thumbnailLocalPath ? (
										<img
											src={thumbnailLocalPath}
											alt={''}
											style={{
												height: '5rem',
												widht: '5rem',
											}}
										/>
									) : (
										<>
											<img
												height={'2rem'}
												width={'2rem'}
												src={Thumbnail}
											/>
											<Text
												fontWeight={300}
												color={'#FFFFFF'}
												fontSize={'.8rem'}>
												Upload Thumbnail
											</Text>
										</>
									)}
								</Stack>
							</MediaUploader>
						</Box>
						{/* <Text
							color={'red'}
							display={
								errors?.thumbnail?.message ? 'block' : 'none'
							}>
							{errors?.thumbnail?.message}
						</Text> */}
					{/* </Stack> */}
				</Stack>
				{/* </Scrollbars> */}
			</Flex>
			<Flex
				w='5%'
				as={'button'}
				type='submit'
				justifyContent={'flex-end'}
				alignItems={'flex-end'}
				// border={'1px solid red'}
			>
				<ArrowForwardIcon
					cursor={'pointer'}
					height={'2rem'}
					color='white'
					_hover={{ color: 'teal' }}
					width={'2rem'}
				/>
			</Flex>
		</Stack>
	);
}

export default DetailsStep;
