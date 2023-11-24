import React from 'react';
import {
	RadioGroup,
	Stack,
	Radio,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from '@chakra-ui/react';

const RadioThemeInput = ({
	name,
	register,
	label,
	errorMsg,
	defaultValue,
	isRequired,
	options,
	radioGroupOnChange,
	radioGroupValue,
	direction,
	spacing,
	valueKey,
	labelKey,
	...reset
}) => {
	return (
		<FormControl
			id={name}
			isInvalid={!!errorMsg}
			isRequired={isRequired}>
			<FormLabel>{label}</FormLabel>
			<RadioGroup
				onChange={radioGroupOnChange}
				value={radioGroupValue}>
				<Stack
					spacing={spacing}
					direction={direction}>
					{(options || []).map((item, index) => (
						<Radio
							{...register(name)}
							value={item[valueKey]}
							key={index}
							id={index}
							{...reset}>
							{item[labelKey]}
						</Radio>
					))}
				</Stack>
			</RadioGroup>
			{errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
		</FormControl>
	);
};

export default RadioThemeInput;
