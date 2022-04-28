import { Input, InputProps } from "@chakra-ui/react";
import { Field, FieldProps } from "formik";
import React from "react";

export interface SimpleFieldProps extends InputProps {
  name: string;
}

const SimpleField: React.FC<React.PropsWithChildren<SimpleFieldProps>> = ({
  name,
  ...restProps
}: React.PropsWithChildren<SimpleFieldProps>) => {
  return (
    <Field name={name}>
      {({
        field: { value, onChange, onBlur },
        form: { touched },
        meta,
      }: FieldProps) => {
        return (
          <>
            <Input
              {...restProps}
              name={name}
              value={value}
              onChange={(event) => {
                onChange(event);
              }}
              onBlur={(event) => {
                onBlur(event);
              }}
            />
          </>
        );
      }}
    </Field>
  );
};
export { SimpleField as Input };
export default SimpleField;
