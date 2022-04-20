import React from 'react';
import {Select as ChakraSelect} from '@chakra-ui/react';
import {Field, FieldProps} from 'formik';

export interface SelectProps {
	name?: string;
	children?: React.ReactNode;
}

export const SelectField = ({name, children, ...restProps}: SelectProps) => {
	return (
		<Field name={name}>
			{({field: {value, onChange, onBlur}}: FieldProps) => {
				return (
					<>
						<ChakraSelect
							{...restProps}
							name={name}
							onBlur={(event) => {
							onBlur(event);
						}} onChange={(event) => {
							onChange(event);
						}} placeholder="Select option" value={value}>
							{children}
						</ChakraSelect>
					</>
				);
			}}
		</Field>
	);
};

export { SelectField as Select };
export default SelectField;
