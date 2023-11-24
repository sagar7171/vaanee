import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
	Text,
	Flex,
	Heading,
	Box,
	RadioGroup,
	Radio,
	Stack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import MediaUploader from '@/components/common/MediaUploader';
import { Scrollbars } from 'react-custom-scrollbars';
import UploadIcon from '../../../../public/images/svg/UploadIcon';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { uploadVideoModalValidation } from '@/utils/validation';
import { useDispatch, useSelector } from 'react-redux';
import SelectThemeInput from '../../forms/SelectThemeInput';
import {
	fetchSupportedLanguage,
	handleCurrentStep,
	handleLangClick,
	handleLanguageList,
	resetLangListToInitialValue,
	updatedVideoRelatedData,
	uploadVideoFile,
	videoWorkflowTrigger,
} from '../../store/actions/uploadVideoModalActions';
import ChevronDownIcon from '../../../../public/images/svg/ChevronDownIcon';
import { useAppSelector } from '@/components/hooks/redux-hooks';

function UploadStep() {
	const uploadVideModal = useSelector((state) => state.uploadVideModal);
	const auth = useAppSelector((state) => state.auth);
	const {
		user: { access_token },
	} = auth;
	const {
		uploadFileDataStep1: { videoS3Url, id },
		languageList,
		project_id,
		sourceLang,
		modelAndLang,
	} = uploadVideModal;
	const [state, setState] = useState({
		showLangSelectError: false,
	});

	const { showLangSelectError } = state;

	const {
		control,
		register,
		handleSubmit,
		watch,
		setValue,
		getValues,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(uploadVideoModalValidation),
	});

	const dispatch = useDispatch();
	const modelValue = useWatch({ control, name: 'model' });

	useEffect(() => {
		if (modelAndLang.length > 0) {
			let tempArray = modelAndLang
				.filter((item) => item.value === modelValue)[0]
				['supportedLang'].filter(
					(_item) => _item.value !== getValues('source_lang'),
				);
			dispatch(handleLanguageList(tempArray.length ? tempArray : []));
		}
	}, [modelValue]);

	const handleFileChange = (data) => {
		setValue('file', data);
		dispatch(uploadVideoFile(access_token, { file: data,project_id }));
	};

	const onSubmit = (formData) => {
		const { multiLang, source_lang, model } = formData;
		let tempLangList = [];
		let tempStatusObj = {};

		if (
			multiLang === '1' &&
			languageList.filter((item) => item.selected).length === 0
		) {
			setState((prev) => ({ ...prev, showLangSelectError: true }));
			return;
		}
		if (multiLang === '1') {
			tempLangList = languageList
				.filter((item) => item.selected)
				.map((_item) => _item.value);
			tempLangList.forEach((_item) => {
				tempStatusObj = {
					...tempStatusObj,
					[_item]: 'pending',
				};
			});
		}
		dispatch(
			updatedVideoRelatedData(access_token, id, {
				source_lang,
				...(multiLang === '1' && {
					required_languages: tempLangList,
				}),
				...(Object.keys(tempStatusObj).length > 0 && {
					status: tempStatusObj,
				}),
				model,
			}),
		)
			.then((res) => {
				dispatch(
					videoWorkflowTrigger(access_token, {
						workflow_name: 'transcode_video',
						metadata: {
							video: videoS3Url,
							target_audio: tempLangList,
							// watermark?: string,
						},
						project_id,
					}),
				);
				dispatch(handleCurrentStep(3));
			})
			.catch((err) => {});
	};

	useLayoutEffect(() => {
		dispatch(fetchSupportedLanguage(access_token));
	}, []);

	useEffect(() => {
		if (
			showLangSelectError &&
			languageList.filter((item) => item.selected).length >= 1
		) {
			setState((prev) => ({ ...prev, showLangSelectError: false }));
		}
		// eslint-disable-next-line
	}, [languageList]);
	return (
		<Stack
			direction={'row'}
			pl={'2rem'}
			flexGrow={1}
			as={'form'}
			noValidate='noValidate'
			onSubmit={handleSubmit(onSubmit)}>
			<Flex
				// border={'2px solid blue'}
				// mx={'1rem'}
				w='35%'>
				<MediaUploader
					accept={['AVI', 'MP4', 'MPEG4', 'MOV', 'WebM', 'M3u8']}
					handleChange={handleFileChange}
					name={'file'}
					control={control}>
					<Flex
						width={'100%'}
						borderRadius={'1rem'}
						p='1rem'
						justifyContent={'center'}
						alignItems={'center'}
						border={'.1rem solid #000'}>
						{videoS3Url ? (
							<video
								width={'inherit'}
								height={'inherit'}
								src={videoS3Url}
								controls></video>
						) : (
							<Flex
								borderRadius={'1rem'}
								px={'4.4rem'}
								justifyContent={'center'}
								alignItems={'center'}
								border={'.15rem dotted #FFF'}
								w='100%'>
								<UploadIcon
									h='13rem'
									color={'#7E7E7E'}
									width='6rem'
								/>
							</Flex>
						)}
					</Flex>
				</MediaUploader>
			</Flex>
			<Flex
				px={'1rem'}
				flex={1}
				flexDirection={'column'}
				// border={'2px solid pink'}
				w='60%'>
				<Box
					w='16rem'
					color={'white'}
					display={id ? 'block' : 'none'}
				>
					<SelectThemeInput
						variant='unstyled'
						size={'lg'}
						icon={<ChevronDownIcon />}
						name='source_lang'
						// placeholder={'Select Language'}
						register={register}
						style={{ color: 'white' }}
						errorMsg={errors?.source_lang?.message}
						optionStyle={{ background: '#777777', color: 'white' }}
						labelKey={'label'}
						valueKey={'value'}
						options={[
							{ value: '', label: 'Select  Language' },
							...sourceLang,
						]}
					/>
				</Box>
				<Box
					mt={'1rem'}
					w='16rem'
					color={'white'}
					display={watch('source_lang') ? 'block' : 'none'}
				>
					<SelectThemeInput
						variant='unstyled'
						size={'lg'}
						icon={<ChevronDownIcon />}
						name='model'
						// placeholder={'Select Language'}
						register={register}
						style={{ color: 'white' }}
						errorMsg={errors?.model?.message}
						optionStyle={{ background: '#777777', color: 'white' }}
						labelKey={'label'}
						valueKey={'value'}
						options={[
							{ value: '', label: 'Select  Model' },
							,
							...modelAndLang,
						]}
					/>
				</Box>
				<Stack
					direction={'column'}
					display={id ? 'none' : 'flex'}>
					<Heading
						// my={'.5rem'}
						as='h3'
						fontWeight={'700'}
						color={'white'}
						fontSize={'1.5rem'}
						// size='md'
					>
						Drag and drop video files to upload
					</Heading>
					<Heading
						as='h3'
						// mb={'.5rem'}
						fontSize={'.91rem'}
						color={'white'}
						fontWeight={'700'}>
						Your videos will be private until you publish them.
					</Heading>
				</Stack>
				<RadioGroup
					mt={'1rem'}
					name={'multiLang'}
					value={watch('multiLang')}
					onChange={(value) => {
						value === '0' &&
							dispatch(resetLangListToInitialValue());
					}}
					display={watch('model') ? 'block' : 'none'}
					ml={'.3rem'}>
					<Stack
						display={'inline-flex'}
						// spacing={5}
					>
						<Radio
							colorScheme='blue.600'
							isInvalid={errors?.multiLang?.message}
							{...register('multiLang')}
							value={'0'}>
							<Text
								fontWeight={700}
								color={'white'}
								fontSize={'.91rem'}>
								Single Audio
							</Text>
						</Radio>

						<Flex
						//  border={'1px solid red'}
						>
							<Radio
								colorScheme='blue.600'
								{...register('multiLang')}
								isInvalid={errors?.multiLang?.message}
								value={'1'}>
								<Text
									fontWeight={700}
									mr={'1rem'}
									color={'white'}
									fontSize={'.91rem'}>
									Multiple Audio
								</Text>
							</Radio>
							<Menu
								// defaultIsOpen={true}
								closeOnSelect={false}
								position={'absolute'}>
								<MenuButton
									as={IconButton}
									onClick={() => {
										watch('multiLang') !== 1 &&
											setValue('multiLang', '1');
									}}
									color={showLangSelectError ? 'red' : ''}
									aria-label='Options'
									icon={
										<ChevronDownIcon
											color='white'
											_hover={{ color: 'teal' }}
											h={'1rem'}
											w={'1rem'}
										/>
									}
									variant='unstyled'
								/>

								<MenuList
									position={'relative'}
									right={'8.5rem'}
									border={'.1rem solid #000000'}
									background={'#2D2E2F'}>
									<Scrollbars
										style={{
											width: '15rem',
										}}
										autoHeight
										autoHeightMin={0}
										autoHeightMax='15rem'>
										<Stack
											direction={'row'}
											spacing={3}
											justifyContent={'center'}
											alignItems={'center'}
											flexWrap={'wrap'}>
											{languageList.map((item, index) => {
												const { label, selected } =
													item;
												return (
													<React.Fragment key={index}>
														<MenuItem
															as={Flex}
															onClick={() => {
																dispatch(
																	handleLangClick(
																		index,
																	),
																);
															}}
															color={'white'}
															justifyContent={
																'center'
															}
															alignItems={
																'center'
															}
															// border={
															// 	'1px solid red'
															// }
															width={'40%'}
															// m={'.5rem'}
															background={
																selected
																	? '#20AEF1'
																	: '#212121'
															}>
															{label}
														</MenuItem>
													</React.Fragment>
												);
											})}
										</Stack>
									</Scrollbars>
								</MenuList>
							</Menu>
						</Flex>
					</Stack>
				</RadioGroup>
				<Text
					display={showLangSelectError ? 'block' : 'none'}
					color={'red'}
					size={'sm'}>
					Please select at least one language in which you want
					convert your file.
				</Text>
				<Scrollbars
					style={
						{
							// width: '15rem',
							display:
								languageList.filter((_item) => _item.selected)
									.length > 0
									? 'block'
									: 'none',
						}
					}
					autoHeight
					autoHeightMin={0}
					autoHeightMax='4rem'>
					<Stack
						direction={'row'}
						// spacing={3}
						// border={'1px solid red'}
						flexWrap={'wrap'}>
						{languageList
							.filter((_item) => _item.selected)
							.map((item, index) => {
								return (
									<React.Fragment key={index}>
										<Flex
											justifyContent={'center'}
											alignItems={'center'}
											// border={
											// 	'1px solid red'
											// }
											p={'.5rem'}
											color={'white'}
											// width={'25%'}
											// m={'.5rem'}
											// background={'#20AEF1'}
											background={'#212121'}>
											{item.label}
										</Flex>
									</React.Fragment>
								);
							})}
					</Stack>
				</Scrollbars>
			</Flex>
			<Flex
				justifyContent={'flex-end'}
				alignItems={'flex-end'}
				display={id ? 'flex' : 'none'}
				w={'5%'}
				as={'button'}
				type={'submit'}
				// border={'1px solid red'}
			>
				<ArrowForwardIcon
					height={'2rem'}
					color='white'
					_hover={{ color: 'teal' }}
					cursor={'pointer'}
					width={'2rem'}
				/>
			</Flex>
		</Stack>
	);
}

export default UploadStep;
