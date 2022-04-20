import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {Formik, Form} from 'formik';
import SimpleField from './simple-field';
import {FormControl} from './form-control';
import Select from './select';

export function App() {
	return <ChakraProvider>
		<Formik initialValues={{name: '', age: ''}} validate={values => (values.name ? {} : {name: "required"})} onSubmit={console.log}>
			<Form>
				<FormControl name={'name'}>
					<SimpleField name={'name'}/>
				</FormControl>
				<FormControl name={'age'}>
					<Select name={'age'}>
						<option value={'1'}>1</option>
						<option value={'2'}>2</option>
						<option value={'3'}>3</option>
					</Select>
				</FormControl>
				{/*<SimpleField label={'Name'} name={'name'}/>*/}
				<button type={'submit'}>Submit</button>
			</Form>
		</Formik>
	</ChakraProvider>;
}
