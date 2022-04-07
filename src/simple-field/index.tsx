import {FormControl, FormErrorMessage, FormHelperText, FormLabel, Input} from '@chakra-ui/react';
import React, {useState} from 'react';

function SimpleField() {
	const [input, setInput] = useState('')

	const handleInputChange = (e: any) => setInput(e.target.value)

	const isError = input === ''

	return (
		<FormControl isInvalid={isError}>
			<FormLabel htmlFor='email'>Email</FormLabel>
			<Input
				id='email'
				type='email'
				value={input}
				onChange={handleInputChange}
			/>
			{!isError ? (
				<FormHelperText>
					Enter the email you'd like to receive the newsletter on.
				</FormHelperText>
			) : (
				<FormErrorMessage>Email is required.</FormErrorMessage>
			)}
		</FormControl>
	)
}
export default SimpleField;
