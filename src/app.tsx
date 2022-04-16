import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {Formik, Form} from 'formik';
import SimpleField from './simple-field';

export function App() {
	return <ChakraProvider>
		<Formik initialValues={{name: ''}} validate={values => (values.name ? {} : {name: "required"})} onSubmit={console.log}>
			<Form>
				<SimpleField label={'Name'} name={'name'}/>
				<button type={'submit'}>Submit</button>
			</Form>
		</Formik>
	</ChakraProvider>;
}
