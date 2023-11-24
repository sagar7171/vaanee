import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Select,
} from '@chakra-ui/react';
import React from 'react';

const SelectThemeInput = ({
	errorMsg,
	isRequired,
	label,
	formHelperText,
	name,
	register,
	placeholder,
	valueKey,
	labelKey,
	options,
	optionStyle,
	...rest
}) => {
	return (
		<FormControl isRequired={isRequired} isInvalid={errorMsg}>
			{label && <FormLabel>{label}</FormLabel>}
			<Select
				placeholder={placeholder}
				{...register(name)}
				{...rest}>
				{(options || []).map((op, idx) => {
					return (
						<option
							key={idx}
							style={{ ...optionStyle }}
							value={op[valueKey]}>
							{op[labelKey]}
						</option>
					);
				})}
			</Select>
			{formHelperText && (
				<FormHelperText>{formHelperText}</FormHelperText>
			)}
			{errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	);
};

export default SelectThemeInput;
