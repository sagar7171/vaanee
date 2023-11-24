import React from 'react';
import { Controller } from 'react-hook-form';
import { FileUploader } from 'react-drag-drop-files';
import { Text } from '@chakra-ui/react';

const MediaUploader = ({
	handleChange,
	accept,
	className,
	children,
	control,
	name,
	errorMsg,
	multiple,
	disabled,
}) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, name, ref, ...field } }) => (
					<FileUploader
						handleChange={handleChange}
						name={name}
						types={accept}
						classes={className}
						multiple={multiple}
						onChange={onChange}
						disabled={disabled}>
						{children}
					</FileUploader>
				)}
			/>
			{errorMsg !== 'undefined' && (
				<Text
					fontSize={'.8rem'}
					mt={".5rem"}
					color='red'>
					{errorMsg}
				</Text>
			)}
		</>
	);
};

export default MediaUploader;
