import {Input} from '@chakra-ui/react';
import {Field, FieldProps} from 'formik';
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
			{({field: {value, onChange, onBlur}, form: {touched}, meta}: FieldProps) => {
				return (
					<>
							<Input
								{...restProps}
								name={name}
								value={value}
								onChange={(event) => {
									onChange(event);
								}}
								onBlur={(event) => {
									onBlur(event);
								}}
							/>
					</>
				);
			}}
		</Field>
	);
}
export { SimpleField as Input };
export default SimpleField;
