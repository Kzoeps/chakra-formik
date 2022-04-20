import * as React from "react";
import RadioField from './index';
import {Radio} from '@chakra-ui/react';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';

const RadioContainer = () => {
	return <>
		<RadioField data-testid="radio" name={'field'}>
			<Radio value="1">One</Radio>
			<Radio value="2">Two</Radio>
			<Radio value="3">Three</Radio>
		</RadioField>
	</>
}


test('should render radio container', () => {
	const {queryByTestId} = render(<RadioContainer/>);
	expect(queryByTestId('radio')).toBeInTheDocument();
})
