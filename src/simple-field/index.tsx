import {FormControl, FormHelperText, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import {Field, FieldProps} from 'formik';
import React, {useState} from 'react';

export interface SimpleFieldProps {
	name: string;
	helperText?: string;
}

const SimpleField: React.FC<React.PropsWithChildren<SimpleFieldProps>> = ({name, helperText}: React.PropsWithChildren<SimpleFieldProps>) => {
	const [input, setInput] = useState('');

	const handleInputChange = (e: any) => setInput(e.target.value);

	const isError = input === '';

	return (
		<Field name={name}>
			{({field: {value, onChange}}: FieldProps) => {
				return (
					<FormControl isInvalid={true}>
						<FormLabel>EMAIL</FormLabel>
						<Input
							name={name}
							value={value}
							onChange={(event) => {
								onChange(event);
							}}
						/>
						{!!helperText && <FormHelperText>{helperText}</FormHelperText>}
						{<FormErrorMessage>ERROR</FormErrorMessage>}
					</FormControl>
				);
			}}
		</Field>
	);
}
export default SimpleField;
