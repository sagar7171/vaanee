import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from '@chakra-ui/react';
import React from 'react';

const ThemeInput = ({
	errorMsg,
	isRequired,
	label,
	formHelperText,
	name,
	register,
	placeholder,
	variant,
	...rest
}) => {
	return (
		<FormControl isRequired={isRequired} isInvalid={errorMsg}>
			{label && <FormLabel>{label}</FormLabel>}
			<Input
				placeholder={placeholder}
				type={'text'}
				{...register(name)}
				{...rest}
			/>
			{formHelperText && (
				<FormHelperText>{formHelperText}</FormHelperText>
			)}
			{errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	);
};

export default ThemeInput;
