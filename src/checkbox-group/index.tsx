import {Field, FieldProps} from 'formik';
import React from 'react';
import {CheckboxGroup} from '@chakra-ui/react';

export interface CheckboxGroupProps {
	name: string;
	children: React.ReactNode;
}

export const CheckBoxGroup = ({name, children, ...restProps}: CheckboxGroupProps) => {
	return (
		<>
			<Field name={name}>
				{({field: {value}, form: {setFieldValue}}: FieldProps) => {
					return (
						<CheckboxGroup value={value} onChange={(value) => {
							setFieldValue(name, value);
						}}>
							{children}
						</CheckboxGroup>
					);
				}}
			</Field>
		</>
	);
};

export default CheckBoxGroup;
