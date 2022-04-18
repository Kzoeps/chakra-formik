import React from 'react';
import {Form, Formik} from 'formik';
import FormItem from './index';
import SimpleField from '../simple-field';
import {render} from '@testing-library/react';

interface FormContainerProps {
	initValue?: string;
	label?: string;
}

const FormContainer = ({initValue = '', label = undefined}: FormContainerProps) => {
	return (
		<Formik initialValues={{field: initValue}} onSubmit={() => {}}>
			<Form>
				<FormItem data-testid="form-item" label={label} name={'field'}>
					<SimpleField name={'field'}/>
				</FormItem>
			</Form>
		</Formik>
	)
}

test('FormItem renders correctly', () => {
	const {getByTestId} = render(<FormContainer/>);
	expect(getByTestId('form-item')).toBeDefined();
});

test('FormItem renders label when provided', () => {
	const {getByTestId} = render(<FormContainer label="name"/>);
	expect(getByTestId('label')).toBeDefined();
})
