import * as React from "react";
import RadioField from './index';
import {Radio} from '@chakra-ui/react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

const RadioContainer = () => {
	return <>
		<RadioField data-testid="radio" name={'field'}>
			<Radio value="1" data-testid="radio-box">One</Radio>
			<Radio value="2" data-testid="radio-box">Two</Radio>
			<Radio value="3" data-testid="radio-box">Three</Radio>
		</RadioField>
	</>
}


test('should render radio container', () => {
	const {queryByTestId} = render(<RadioContainer/>);
	expect(queryByTestId('radio')).toBeInTheDocument();
})

test('should render radio boxes', () => {
	const {queryAllByTestId} = render(<RadioContainer/>);
	expect(queryAllByTestId('radio-box')).toHaveLength(3);
})
