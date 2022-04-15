import {Form, Formik} from 'formik';
import React from 'react';
import SimpleField from './index';
import {render} from '@testing-library/react';

const InputContainer = () => {
	return (
		<Formik initialValues={{field: 'init value'}} onSubmit={() => {}}>
			<Form>
				<SimpleField name={'field'}/>
			</Form>
		</Formik>
	);
};

test('1 + 1 is equal to 2', () => {
	const {getByTestId} = render(<InputContainer/>);
	expect(1 + 1).toBe(2);
});
