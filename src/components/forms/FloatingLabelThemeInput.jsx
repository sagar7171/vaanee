import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Textarea,
} from '@chakra-ui/react';
import React from 'react';

function FloatingLabelThemeInput({
	formHelperText,
	formHelperTextAttrObj,
	label,
	formLabelAttObj,
	register,
	name,
	errorMsg,
	type,
	isRequired,
	...rest
}) {
	return (
		<FormControl
			variant='floating'
			isRequired={isRequired}
			isInvalid={errorMsg}
			id={name}>
			{type !== 'textarea' ? (
				<Input
					placeholder=' '
					{...register(name)}
					{...rest}
				/>
			) : (
				<Textarea
					placeholder=' '
					{...register(name)}
					{...rest}
				/>
			)}
			<FormLabel {...formLabelAttObj}>{label}</FormLabel>
			<FormHelperText {...formHelperTextAttrObj}>
				{formHelperText}
			</FormHelperText>
			{errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	);
}

export default FloatingLabelThemeInput;
