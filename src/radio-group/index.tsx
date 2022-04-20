import React from "react";
import {RadioGroup} from '@chakra-ui/react';

export interface RadioGroupProps {
	name: string;
	children: React.ReactNode;
}

export const RadioField = ({name, children, ...restProps}: RadioGroupProps) => {
    return (
		<RadioGroup name={name} {...restProps}>
			{children}
		</RadioGroup>
    )
}

export { RadioField as RadioGroup };
export default RadioField;
