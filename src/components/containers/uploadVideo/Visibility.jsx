import React, { useEffect, useState } from 'react';

import { Box, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { CheckCircleIcon, RepeatIcon } from '@chakra-ui/icons';
import FloatingLabelThemeInput from '@/components/forms/FloatingLabelThemeInput';
import MediaUploader from '@/components/common/MediaUploader';
import Scrollbars from 'react-custom-scrollbars';
// import WFPlayer from 'wfplayer';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchAllStepData,
	handleCurrentStep,
} from '../../store/actions/uploadVideoModalActions';
import { extractFileNameWithoutExt } from '@/utils/helper';
// import { setFormValue } from '../../utils/helper';
import LeftPlayIcon from '../../../../public/images/svg/LeftPlayIcon';
import RightPlayIcon from '../../../../public/images/svg/RightPlayIcon';
import ExpandVidFullScrIcon from '../../../../public/images/svg/ExpandVidFullScrIcon';
import PlayAudioFileIcon from '../../../../public/images/svg/PlayAudioFileIcon';
import Photo from '../../../../public/images/svg/photo.png';
import PauseBtnIcon from '../../../../public/images/svg/pauseAudio.png';
import PlayBtnIcon from '../../../../public/images/svg/PlayBtnIcon.png';
// import Thumbnail from '../../../../public/images/svg/thumbnail.png';
import Image from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useAppSelector } from '@/components/hooks/redux-hooks';

function Visibility() {
	const {
		control,
		register,
		// handleSubmit,
		// watch,
		// setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(),
	});
	const [state, setState] = useState({
		playingIndex: null,
	});
	const { playingIndex } = state;
	const dispatch = useDispatch();
	const {
		uploadFileDataStep1: { id },
		allStepData: {
			// id,
			// video_id,
			source_lang,
			required_languages,
			// status,
			// single_speaker,
			// is_active,
			title,
			description,
			// thumbnail,
			s3_path,
			// user_id,
		},
	} = useSelector((state) => state.uploadVideModal);

	const auth = useAppSelector((state) => state.auth);
	const {
		user: { access_token },
	} = auth;

	const handleChange = () => {};
	// const tabs = [
	// 	{
	// 		label: 'Effect',
	// 	},
	// 	{
	// 		label: 'Info',
	// 	},
	// 	{
	// 		label: 'Library',
	// 	},
	// 	{
	// 		label: 'Media',
	// 	},
	// ];
	var playerRefArray = [];
	useEffect(() => {
		const test = async () => {
			if (typeof window !== 'undefined') {
				const WFPlayer = (await import('wfplayer')).default;
				if (required_languages.length > 0 || [source_lang].length > 0) {
					if (playerRefArray.length) {
						(required_languages.length
							? required_languages
							: [source_lang]
						).forEach((element, index) => {
							playerRefArray[index]?.destroy();
						});
					}
					// eslint-disable-next-line
					(required_languages.length
						? required_languages
						: [source_lang]
					).forEach((element, index) => {
						playerRefArray[index] = new WFPlayer({
							container: document.querySelector(
								`#waveform-${element}`,
							),
							mediaElement: document.querySelector(
								`#audio-${element}`,
							),
							wave: true,
							// Waveform color
							waveColor: 'rgba(255, 255, 255, 0.1)',

							// Background color
							backgroundColor: 'rgb(28, 32, 34)',

							// Whether to display cursor
							cursor: true,

							// Cursor color
							cursorColor: '#ff0000',

							// Whether to display progress
							progress: true,

							// progress color
							progressColor: 'rgba(255, 255, 255, 0.5)',

							// Whether to display grid
							grid: false,

							// Grid color
							gridColor: 'rgba(255, 255, 255, 0.05)',

							// Whether to display ruler
							ruler: true,

							// Ruler color
							rulerColor: 'rgba(255, 255, 255, 0.5)',

							// Whether to display ruler at the top
							rulerAtTop: true,

							// Indicates whether to do http fetching with cookies
							withCredentials: false,

							// Indicates whether to enable CORS for http fetching
							cors: true,

							// Initialize http headers
							headers: {},

							// Pixel ratio
							pixelRatio: window.devicePixelRatio,

							// Which audio channel to render
							channel: 0,

							// Duration of rendering
							duration: 10,

							// The ratio of spaces on both sides
							padding: 0,

							// Waveform height scale ratio
							waveScale: 0.7,
						});
						playerRefArray[index].on('click', (currentTime) => {
							playerRefArray[index].seek(currentTime);
						});
						playerRefArray[index].on('grabbing', (currentTime) => {
							playerRefArray[index].seek(currentTime);
						});
						// scroll event
						playerRefArray[index].on('scroll', (deltaY) => {
							playerRefArray[index].seek(
								playerRefArray[index].currentTime + deltaY / 10,
							);
						});
						playerRefArray[index].load(
							document.querySelector(`#audio-${element}`),
						);
					});
				}
			}
		};
		test();

		return () => {
			if (required_languages.length > 0 || [source_lang].length > 0) {
				// eslint-disable-next-line
				(required_languages.length
					? required_languages
					: [source_lang]
				).forEach((element, index) => {
					playerRefArray[index]?.destroy();
				});
			}
		};

		// eslint-disable-next-line
	}, [required_languages, source_lang]);
	const handleAudioFileChange = (file) => {
	};
	useEffect(() => {
		dispatch(fetchAllStepData(access_token,id));

		// eslint-disable-next-line
	}, []);
	return (
		<Stack
			as={'form'}
			direction={'row'}
			pl={'2rem'}
			flexGrow={1}>
			<Flex
				h={'100%'}
				flexDirection={'column'}
				w={'35%'}>
				{/* <Scrollbars
					autoHeight
					autoHeightMin={0}
					autoHeightMax='15rem'> */}
				<Stack spacing={2}>
					<Flex
						bg={'#29292B'}
						h={'12rem'}
						border={'.1rem solid #000000'}
						borderRadius={'.6rem .6rem .6rem .6rem'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Image
							src={Photo}
							alt=''
							h={'3rem'}
							w={'3rem'}
						/>
					</Flex>
					<Stack
						direction={'row'}
						justifyContent={'center'}
						alignItems={'center'}>
						<Stack
							bg='#2D2D53'
							direction={'row'}
							justifyContent={'center'}
							alignItems={'center'}
							px={'.2rem'}
							spacing={0}>
							<Text color={'#0047FF'}>00:00</Text>
							<Text mx={'.2rem'}> | </Text>
							<Text>00:00</Text>
						</Stack>
						<Spacer />
						<Stack
							justifyContent={'center'}
							alignItems={'center'}
							direction={'row'}
							p={'.3rem'}
							bg='#2D2D53'>
							<LeftPlayIcon
								h={'1.3rem'}
								pt={'.2rem'}
								w={'1.3rem'}
							/>
							<Image
								src={PlayBtnIcon}
								alt={''}
								h={'1.7rem'}
								w={'1.7rem'}
							/>
							<RightPlayIcon
								h={'1.3rem'}
								pt={'.2rem'}
								w={'1.3rem'}
							/>
						</Stack>
						<Spacer />
						<Stack
							bg={'#2D2D53'}
							justifyContent={'center'}
							alignItems={'center'}
							p={'.2rem'}>
							<ExpandVidFullScrIcon />
						</Stack>
					</Stack>
					<Heading
						as={'h3'}
						color={'#787878'}
						fontWeight={600}
						size={'md'}>
						File Name
					</Heading>
					<Text
						fontWeight={400}
						fontSize={'1rem'}
						color={'#BBB9B9'}>
						{extractFileNameWithoutExt(s3_path.split('/').pop())}
						{/* Triple vector Media */}
					</Text>
					<Stack
						direction={'row'}
						// p={'.5rem'}
						// justifyContent={'center'}
						alignItems={'center'}>
						<CheckCircleIcon
							boxSize={'1rem'}
							color={'#20AEF1'}
						/>
						<Text
							fontWeight={600}
							color={'#787878'}
							fontSize={'.8rem'}>
							Video upload Complete
						</Text>
					</Stack>
				</Stack>

				{/* </Scrollbars> */}
			</Flex>
			<Flex
				// border={'1px solid red'}
				pl={'1rem'}
				flexDirection={'column'}
				w={'60%'}>
				{/* <Scrollbars
					autoHeight
					autoHeightMin={0}
					autoHeightMax='17rem'> */}
					<Stack
						spacing={'1rem'}
						mt={'1rem'}>
						<FloatingLabelThemeInput
							name={'title'}
							register={register}
							readOnly={true}
							value={title || ''}
							label={'Video Title'}
							formLabelAttObj={{
								fontWeight: 600,
								fontSize: '.9rem',
							}}
							fontSize={'1rem'}
							color={'white'}
							bg={'#000'}
							_focus={{
								bg: '#000',
								color: '#fff',
								border: '.1rem solid #fff',
							}}
							placeholder=' '
							border={'.1rem solid #fff'}
						/>
						<FloatingLabelThemeInput
							name={'description'}
							register={register}
							label={'Description'}
							value={description || ''}
							readOnly={true}
							color={'white'}
							type={'textarea'}
							formLabelAttObj={{
								fontWeight: 600,
								fontSize: '.9rem',
							}}
							errorMsg={errors?.videoDescription?.msg}
							bg={'#000'}
							fontSize={'1rem'}
							_focus={{
								bg: '#000',
								color: '#fff',
								border: '.1rem solid #fff',
							}}
							placeholder=' '
							border={'.1rem solid #fff'}
						/>
						{/* <Stack>
							<Heading
								as={'h4'}
								fontSize={'1rem'}
								color='white'
								fontWeight={700}>
								Thumbnail
							</Heading>
							<Text
								fontWeight={500}
								color={'white'}
								fontSize={'.8rem'}>
								Select or upload file image or audio & video
							</Text>
						</Stack>
						<Stack
							// border={'1px solid red'}
							direction={'row'}
							overflowX={'auto'}
							// flexWrap={'wrap'}
						>
							<Flex>
								<MediaUploader
									accept={[
										'AVI',
										'MP4',
										'MPEG4',
										'MOV',
										'WebM',
									]}
									handleChange={handleChange}
									name={'file'}
									control={control}>
									<Stack
										border={'.13rem dotted #FFFFFF'}
										borderRadius={'.4rem'}
										justifyContent={'center'}
										minWidth={'5rem'}
										minHeight={'5rem'}
										alignItems={'center'}>
										<Image
											// h={'1.3rem'}
											// border={'1px solid red'}
											// w={'1.3rem'}
											alt=''
											src={Thumbnail}
										/>
									</Stack>
								</MediaUploader>
							</Flex>
							<Flex
								borderRadius={'.4rem'}
								justifyContent={'center'}
								bg={'#D9D9D9'}
								display={thumbnail ? 'flex' : 'none'}
								alignItems={'center'}>
								<img
									src={thumbnail}
									alt={''}
									style={{ height: '5rem', width: '5rem' }}
									// h={'5rem'}
									// w={'5rem'}
								/>
							</Flex>
						</Stack> */}
						{(required_languages.length > 0
							? required_languages
							: [source_lang]
						).map((item, index) => {
							return (
								<React.Fragment key={index}>
									<Stack spacing={0}>
										<Heading
											as={'h6'}
											color={'white'}
											fontSize={'1rem'}>
											{item}
										</Heading>
									</Stack>
									<Stack spacing={2}>
										<Heading
											as={'h6'}
											color={'white'}
											fontSize={'1rem'}>
											Transcript
										</Heading>
										<Text
											bg={'#486370'}
											p={'.5rem'}
											color={'white'}
											borderRadius={'.6rem'}>
											Audio title and more item or adding
											section
										</Text>
									</Stack>
									<Stack
										direction={'row'}
										spacing={1}>
										<Stack
											direction={'column'}
											display={'inline-flex'}>
											{playingIndex === null ? (
												<PlayAudioFileIcon
													h={'1.5rem'}
													cursor={'pointer'}
													onClick={() => {
														setState((prev) => ({
															...prev,
															playingIndex: index,
														}));
														document
															.getElementById(
																`audio-${item}`,
															)
															.play();
													}}
												/>
											) : playingIndex === index ? (
												<Flex
													height={'1.5rem'}
													width={'1.5rem'}>
													<Image
														onClick={() => {
															setState(
																(prev) => ({
																	...prev,
																	playingIndex:
																		null,
																}),
															);
															document
																.getElementById(
																	`audio-${item}`,
																)
																.pause();
														}}
														alt={''}
														src={PauseBtnIcon}
													/>
												</Flex>
											) : (
												<PlayAudioFileIcon
													h={'1.5rem'}
													cursor={'pointer'}
													onClick={() => {
														document
															.getElementById(
																`audio-${required_languages[playingIndex]}`,
															)
															.pause();
														setState((prev) => ({
															...prev,
															playingIndex: index,
														}));
														document
															.getElementById(
																`audio-${item}`,
															)
															.play();
													}}
												/>
											)}
											<RepeatIcon
												cursor={'pointer'}
												onClick={() => {
													setState((prev) => ({
														...prev,
														playing: true,
													}));
													document
														.getElementById(
															`audio-${item}`,
														)
														.load();
													document
														.getElementById(
															`audio-${item}`,
														)
														.play();
												}}
												h={'1.5rem'}
												w={'1.2rem'}
											/>
										</Stack>
										<Stack flexGrow={1}>
											<Box
												// border={'1px solid blue'}
												id={`waveform-${item}`}
												height={'4rem'}></Box>
										</Stack>
										<audio
											id={`audio-${item}`}
											// ref={audioRef}
											// controls='controls'
											src={'audio/english.mp3'}></audio>
									</Stack>
									<MediaUploader
										accept={[
											'M4A,FLAC,MP3,MP4,WAV,WMA,AAC',
										]}
										handleChange={handleAudioFileChange}
										name={'audioFile'}
										control={control}>
										<Stack
											px={'1rem'}
											py={'.5rem'}
											display={'inline-flex'}
											color={'#5B5A5A'}
											borderRadius={'.8rem'}
											bg={'#EFEFEF'}
											justifyContent={'center'}
											alignItems={'center'}>
											<Text>Add Audio</Text>
										</Stack>
									</MediaUploader>
								</React.Fragment>
							);
						})}
					</Stack>
				{/* </Scrollbars> */}
			</Flex>
			<Flex
				w='5%'
				justifyContent={'flex-end'}
				onClick={() => {
					dispatch(handleCurrentStep(6));
				}}
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

export default Visibility;
