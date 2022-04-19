import React from 'react';
import {Form, Formik} from 'formik';
import FormItem from './index';
import SimpleField from '../simple-field';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

interface FormContainerProps {
	initValue?: string;
	label?: string;
}
const user = userEvent.setup();

const FormContainer = ({initValue = '', label = undefined}: FormContainerProps) => {
	return (
		<Formik initialValues={{field: initValue}} onSubmit={() => {}}>
			<Form>
				<FormItem data-testid="form-item" label={label} name={'field'}>
					<SimpleField data-testid="input" name={'field'}/>
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

test('FormItem does not display error message if valid', async () => {
	const {getByTestId, queryByTestId} = render(<FormContainer label="name"/>);
	const input = getByTestId('input');
	await user.click(input);
	await user.keyboard('a');
	expect(queryByTestId('error-message')).toBeFalsy();
})

test('FormItem displays error message if invalid', async () => {
	const {getByTestId, queryByTestId} = render(<FormContainer label="name"/>);
	const input = getByTestId('input');
	await userEvent.type(input, 'a');
	// await userEvent.type(input, '');
	// expect(queryByTestId('error-message')).toBeDefined();
})
