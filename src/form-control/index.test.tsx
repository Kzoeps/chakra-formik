import React from 'react';
import {Form, Formik} from 'formik';
import FormItem from './index';
import SimpleField from '../simple-field';
import {render} from '@testing-library/react';


const FormContainer = ({initValue = ''}: {initValue?: string}) => {
	return (
		<Formik initialValues={{field: initValue}} onSubmit={() => {}}>
			<Form>
				<FormItem data-testid="form-item" name={'field'}>
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
