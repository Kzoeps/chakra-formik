import React from "react";
import {ChakraProvider} from '@chakra-ui/react';
import SimpleField from './simple-field';

export function App() {
  return <ChakraProvider>
	  <h1>Hello world!</h1>
	  <h1>Hola como estas</h1>
	  <SimpleField/>
  </ChakraProvider>;
}
