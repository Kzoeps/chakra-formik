import React from "react";
import { Form, Formik } from "formik";
import FormItem from "./index";
import SimpleField from "../simple-field";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

interface FormContainerProps {
  initValue?: string;
  label?: string;
}
const user = userEvent.setup();

const FormContainer = ({
  initValue = "",
  label = undefined,
}: FormContainerProps) => {
  return (
    <Formik
      initialValues={{ field: initValue }}
      validate={(values) => (values?.field ? {} : { field: "Required" })}
      onSubmit={() => {}}
    >
      <Form>
        <FormItem data-testid="form-item" label={label} name={"field"}>
          <SimpleField data-testid="input" name={"field"} />
        </FormItem>
        {/* to simulate unfocus/ blur*/}
        <button type="submit" data-testid="submit">
          submit
        </button>
      </Form>
    </Formik>
  );
};

test("FormItem renders correctly", () => {
  const { getByTestId } = render(<FormContainer />);
  expect(getByTestId("form-item")).toBeInTheDocument();
});

test("FormItem renders label when provided", () => {
  const { queryByTestId } = render(<FormContainer label="label" />);
  expect(queryByTestId("label")).toBeInTheDocument();
  expect(queryByTestId("label")).toHaveTextContent("label");
});

test("FormItem does not display error message if valid", async () => {
  const { getByTestId, queryByTestId } = render(<FormContainer label="name" />);
  const input = getByTestId("input");
  await user.type(input, "a");
  expect(queryByTestId("error-message")).toBeFalsy();
});

test("FormItem displays error message if invalid", async () => {
  const { getByTestId, queryByTestId, debug } = render(
    <FormContainer label="name" />
  );
  const input = getByTestId("input") as HTMLInputElement;
  await user.type(input, "test");
  await userEvent.clear(input);
  const button = getByTestId("submit");
  await user.click(button);
  expect(queryByTestId("error-message")).toBeInTheDocument();
});

test("FormItem displays correct error message", async () => {
  const { getByTestId, queryByTestId } = render(<FormContainer label="name" />);
  const input = getByTestId("input") as HTMLInputElement;
  await user.type(input, "test");
  await userEvent.clear(input);
  const button = getByTestId("submit");
  await user.click(button);
  expect(queryByTestId("error-message")).toHaveTextContent("Required");
});
