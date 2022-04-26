import React from 'react';
import {ChakraProvider, Radio} from '@chakra-ui/react';
import {Formik, Form} from 'formik';
import SimpleField from './simple-field';
import {FormControl} from './form-control';
import SelectField from './select';
import * as Yup from 'yup';
import RadioField from './radio-group';

const validation = Yup.object().shape({
	name: Yup.string().required('Required'),
	age: Yup.number().required('Required'),
})

export function App() {
	return <ChakraProvider>
		<Formik initialValues={{name: '', age: '', gender: '2'}} validationSchema={validation} onSubmit={console.log}>
			<Form>
				<FormControl name={'name'}>
					<SimpleField name={'name'}/>
				</FormControl>
				<FormControl name={'age'}>
					<SelectField placeholder="Please select option" name={'age'}>
						<option value={'1'}>1</option>
						<option value={'2'}>2</option>
						<option value={'3'}>3</option>
					</SelectField>
				</FormControl>
				<FormControl name={'gender'}>
					<RadioField name={'gender'}>
						<Radio name='gender' value="1">ONE</Radio>
						<Radio name='gender' value="2">TWO</Radio>
					</RadioField>
				</FormControl>
				{/*<SimpleField label={'Name'} name={'name'}/>*/}
				<button type={'submit'}>Submit</button>
			</Form>
		</Formik>
	</ChakraProvider>;
}
