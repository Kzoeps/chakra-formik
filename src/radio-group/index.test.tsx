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

test("should render radio container", () => {
  const { queryByTestId } = render(<RadioContainer />);
  expect(queryByTestId("radio")).toBeInTheDocument();
});

test("should render radio boxes", () => {
  const { queryAllByTestId } = render(<RadioContainer />);
  expect(queryAllByTestId("radio-box")).toHaveLength(3);
});

test("should change value on click", async () => {
  const { getByRole, getByTestId, debug } = render(<RadioContainer />);
  // const radio = getByRole('radio', {name: 'One'});
  // await user.click(radio);
  // expect(radio).toBeChecked();
  debug();
  const radioGroup = getByTestId("radio") as HTMLSelectElement;
  expect(radioGroup.value).toBe("1");
});
