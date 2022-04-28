import * as React from "react";
import RadioField from "./index";
import { Radio } from "@chakra-ui/react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, Formik } from "formik";

const user = userEvent.setup();

const RadioContainer = () => {
  return (
    <>
      <Formik initialValues={{ field: "1" }} onSubmit={() => {}}>
        <Form>
          <RadioField value="1" data-testid="radio" name={"field"}>
            <Radio value="1" data-testid="radio-box">
              One
            </Radio>
            <Radio value="2" data-testid="radio-box">
              Two
            </Radio>
            <Radio value="3" data-testid="radio-box">
              Three
            </Radio>
          </RadioField>
        </Form>
      </Formik>
    </>
  );
};

test("should render radio options", () => {
  const { queryAllByTestId } = render(<RadioContainer />);
  expect(queryAllByTestId("radio-box")).toHaveLength(3);
});
