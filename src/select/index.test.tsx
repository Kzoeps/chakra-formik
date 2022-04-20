import {Form, Formik} from 'formik';
import * as React from 'react';
import SelectField from './index';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const SelectContainer = () => {
	return (
		<>
			<Formik initialValues={{field: ''}} onSubmit={() => {}}>
				<Form>
					<SelectField data-testid="select" name="field">
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</SelectField>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</>
	);
};

test('should render SelectField', () => {
	const {queryByTestId} = render(<SelectContainer />);
	expect(queryByTestId('select')).toBeInTheDocument();
})

test('should change value when option selected', async () => {
	const {getByTestId,getByRole} = render(<SelectContainer />);
	const select = getByTestId('select');
	await userEvent.selectOptions(select, '2');
	const selectedOption = getByRole('option', {selected: true}) as HTMLOptionElement;
	expect(selectedOption.selected).toBe(true);
})
