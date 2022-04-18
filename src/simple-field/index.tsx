import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from '@chakra-ui/react';
import {Field, FieldProps, getIn} from 'formik';
import React from 'react';

export interface SimpleFieldProps {
	name: string;
	label?: string;
	validate?: string;
	helperText?: string;
}

const SimpleField: React.FC<React.PropsWithChildren<SimpleFieldProps>> = ({
																			  name,
	label,
																			  helperText,
	...restProps
																		  }: React.PropsWithChildren<SimpleFieldProps>) => {
	return (
		<Field name={name}>
			{({field: {value, onChange}, form: {errors}, meta}: FieldProps) => {
				// const error = getIn(errors, name);
				return (
					<>
						{/*<FormControl isInvalid={!!error}>*/}
						{/*	{!!label && <FormLabel>{label}</FormLabel>}*/}
							<Input
								{...restProps}
								name={name}
								value={value}
								onChange={(event) => {
									onChange(event);
								}}
							/>
							{/*{!!helperText && <FormHelperText>{helperText}</FormHelperText>}*/}
							{/*{!!error && <FormErrorMessage>{error}</FormErrorMessage>}*/}
						{/*</FormControl>*/}
					</>
				);
			}}
		</Field>
	);
}
export { SimpleField as Input };
export default SimpleField;
