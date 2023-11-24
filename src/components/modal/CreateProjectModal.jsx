import { Box, Stack,VStack,Heading,Text,HStack,Spacer,Button } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { handleOtpModal } from '../store/actions/modalActions';
import ModalComp from '../common/ModalCom';
import Image from 'next/image';
import ThemeInput from '@/components/forms/ThemeInput';
import SelectThemeInput from '@/components/forms/SelectThemeInput';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectCreationValidation } from '@/utils/validation';
import ChevronDownIcon from '../../../public/images/svg/ChevronDownIcon';
import {
	createProject,
	handleCurrentStep,
} from '@/components/store/actions/uploadVideoModalActions';

function CreateProjectModal() {
	const modal = useAppSelector((state) => state.modal);
	const auth = useAppSelector((state) => state.auth);
	const { otpModal } = modal;
	const { user:{access_token} } = auth;
	const dispatch = useAppDispatch();
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
		<ModalComp
			size={'xl'}
			isCentered={true}
			modalConBackground={'#fff'}
			autoFocus={false}
			isOpen={otpModal}
			modalBtnColor={"rgb(120, 128, 140)"}
			onClose={() => {
				dispatch(handleOtpModal(false));
			}}
			modalBody={<Stack 
				// border={"1px solid red"}
				 m={".5rem"}
			as={'form'}
			noValidate='noValidate'
			onSubmit={handleSubmit(onSubmit)}
			>
				<Box
				//  border={"1px solid yellow"}
				  w={"100%"}>
				<img src={"/images/images/createProject.png"} alt={""}/> 
				</Box>
				<Text fontWeight={400} mt={"1.5rem"} fontSize={"1.7rem"} color={'rgb(29, 24, 33)'}>
					Create new project
				</Text>
				<Text color={'rgb(120, 128, 140)'} lineHeight={"1.5rem"}>
					Create an audio/video workspace. Each project has its own
					settings, distributions, and analytics.
				</Text>
				<VStack mt={'2rem'} spacing={"1rem"}>
				<ThemeInput
				name={'title'}
				borderRadius={'.3rem'}
				register={register}
				border={".1rem solid rgb(233, 232, 234)"}
				errorMsg={errors?.title?.message}
				fontWeight={500}
				color={'rgb(120, 128, 140)'}
				_hover={{background:"#fff",color:'rgb(120, 128, 140)' }}
				_focus={{color:'rgb(29, 24, 33)' ,borderColor:'rgb(148, 58, 252)'}}
				placeholder={'Enter Project Title'}
				bg={"#fff"}
				/>
				<SelectThemeInput
					borderRadius={'.3rem'}
					bg={"#fff"}
					color={'rgb(120, 128, 140)'}
					border={".1rem solid rgb(233, 232, 234)"}
					// icon={<ChevronDownIcon fill={'#000'} />}
					_focus={{color:'rgb(29, 24, 33)' ,borderColor:'rgb(148, 58, 252)'}}
					name='projectType'
					register={register}
					errorMsg={errors?.projectType?.message}
					_hover={{background:"#fff",color:'rgb(120, 128, 140)' }}
					optionStyle={{  color: 'rgb(29, 24, 33)' }}
					labelKey={'label'}
					valueKey={'value'}
					options={[
						{ value: '', label: 'Select The Project Type' },
						{ value: 'audio', label: 'Audio Project' },
						{ value: 'video', label: 'Video Project' },
					]}
				/>
				</VStack>
				<HStack mt={"1.5rem"}>
					<Spacer/>
					<HStack>
					<Button
					borderRadius={'.3rem'}
					width={"6rem"}
					color={"rgb(148, 58, 252)"}
					_hover={{bg:"rgb(148, 58, 252)",color:"#fff"}}
					background={'#fff'}
					>Cancel</Button>
					<Button
					_hover={{bg:"rgb(29, 24, 33)",color:"#fff"}}
					borderRadius={'.3rem'}
					width={"6rem"}
					 bg={'rgb(148, 58, 252)'} color={'#fff'}>Create</Button>
					</HStack>
				</HStack>

			</Stack>}
		/>
	);
}

export default CreateProjectModal;
