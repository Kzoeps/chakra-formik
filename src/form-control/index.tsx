import {FormControl, FormErrorMessage, FormLabel} from '@chakra-ui/react';
import {Field, FieldProps, getIn} from 'formik';
import React from 'react';

export interface FormControlProps {
	name: string;
	label?: string;
	validate?: string;
	helperText?: string;
	children: React.ReactNode;
}

export const FormItem = ({children, name, label, ...restProps}: FormControlProps) => {
	return (
		<Field name={name}>
			{({field:{value}, form: {errors, touched, initialErrors}}: FieldProps) => {
				const error = getIn(errors, name);
				const isTouched = getIn(touched, name);
				const hasError = error && isTouched;
				return (
					<FormControl {...restProps} isInvalid={hasError}>
						{label && <FormLabel data-testid="label">{label}</FormLabel>}
						{children}
						{hasError && <FormErrorMessage data-testid="error-msg">{error}</FormErrorMessage>}
					</FormControl>
				);
			}}
		</Field>
	);
};

export {FormItem as FormControl};
export default FormItem;
