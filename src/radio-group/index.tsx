import React from 'react';
import {RadioGroup, RadioGroupProps as ChakraRadioGroupProps } from '@chakra-ui/react';
import {Field, FieldProps} from 'formik';

export interface RadioGroupProps extends ChakraRadioGroupProps {
	name: string;
	children: React.ReactNode;
}

export const RadioField = ({name, children, ...restProps}: RadioGroupProps) => {
    return (
		<Field name={name}>
			{
				({field: {onChange, onBlur, value}, form: {setFieldValue}}: FieldProps) => {
					return (
						<>
							<RadioGroup
								name={name}
								onChange={
									(event) => {
										onChange(event);
										setFieldValue(name, event);
									}
								}
								value={value}
								onBlur={(event) => onBlur(event)}
								{...restProps}>
								{children}
							</RadioGroup>
						</>
					);
				}
			}
		</Field>
	)
}

export { RadioField as RadioGroup };
export default RadioField;
