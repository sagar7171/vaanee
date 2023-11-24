import { Stack, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import SelectThemeInput from '@/components/forms/SelectThemeInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectCreationValidation } from '@/utils/validation';
import ThemeInput from '@/components/forms/ThemeInput';
import ChevronDownIcon from '../../../../public/images/svg/ChevronDownIcon';
import { useAppDispatch, useAppSelector } from '@/components/hooks/redux-hooks';
import {
	createProject,
	handleCurrentStep,
} from '@/components/store/actions/uploadVideoModalActions';


function CreateProjectStep() {
	let whiteColor = 'rgb(239, 239, 239)';
	const {
		control,
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(projectCreationValidation),
	});

	const dispatch = useAppDispatch();
	const auth = useAppSelector((state) => state.auth);
	const { user:{access_token} } = auth;
	const onSubmit = (data) => {
		dispatch(
			createProject(access_token,{
				project_name: data.title,
				project_type: data.projectType,
			}),
		).then(() => {
			dispatch(handleCurrentStep(2));
		});
	};
	return (
		<Stack
			// border={'1px solid red'}
			direction='row'
			as={'form'}
			noValidate='noValidate'
			onSubmit={handleSubmit(onSubmit)}
			height={'100%'}
			width={'100%'}>
			<Stack
				// border={'1px solid blue'}
				height={'100%'}
				width={'95%'}>
				<Heading
					as='h2'
					color={whiteColor}
					size='lg'>
					Create new project
				</Heading>
				<Text color={whiteColor}>
					Create an audio/video workspace. Each project has its own
					settings, distributions, and analytics.
				</Text>
				<ThemeInput
					w={'50%'}
					name={'title'}
					size={'lg'}
					borderRadius={'.4rem'}
					color={whiteColor}
					_focus={{
						bg: '#2F3032',
						color: whiteColor,
						border: `.1rem solid ${whiteColor}`,
					}}
					register={register}
					_hover={{ border: `1px solid ${whiteColor}` }}
					placeholder={'Enter Project Title'}
					errorMsg={errors?.title?.message}
				/>
				<SelectThemeInput
					// variant='unstyled'
					size={'lg'}
					w={'50%'}
					borderRadius={'.4rem'}
					// border={"1px solid white"}
					icon={<ChevronDownIcon fill={'white'} />}
					_focus={{
						bg: '#2F3032',
						color: whiteColor,
						border: `.1rem solid ${whiteColor}`,
					}}
					name='projectType'
					register={register}
					style={{ color: 'white' }}
					errorMsg={errors?.projectType?.message}
					_hover={{ border: `1px solid ${whiteColor}` }}
					optionStyle={{ background: '#777777', color: 'white' }}
					labelKey={'label'}
					valueKey={'value'}
					options={[
						{ value: '', label: 'Select The Project Type' },
						{ value: 'audio', label: 'Audio Project' },
						{ value: 'video', label: 'Video Project' },
					]}
				/>
			</Stack>
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

export default CreateProjectStep;
