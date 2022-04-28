import { Form, Formik } from "formik";
import * as React from "react";
import CheckBoxGroup from "./index";
import { Checkbox } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

const CheckboxContainer = (props: unknown) => {
  return (
    <>
      <Formik initialValues={{ field: "" }} onSubmit={() => {}}>
        <Form>
          <CheckBoxGroup data-testid="checkbox-group" name={"field"} {...props}>
            <Checkbox data-testid="naruto" value="naruto">
              Naruto
            </Checkbox>
            <Checkbox data-testid="sasuke" value="sasuke">
              Sasuke
            </Checkbox>
            <Checkbox data-testid="sakura" value="Sakura">
              Sakura
            </Checkbox>
          </CheckBoxGroup>
        </Form>
      </Formik>
    </>
  );
};

test("should render options", () => {
  const { queryAllByRole } = render(<CheckboxContainer />);
  const checkboxes = queryAllByRole("checkbox");
  expect(checkboxes.length).toBe(3);
});
