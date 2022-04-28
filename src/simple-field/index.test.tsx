import { Form, Formik } from "formik";
import React from "react";
import SimpleField from "./index";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const InputContainer = ({
  initValue = "init value",
}: {
  initValue?: string;
}) => {
  return (
    <Formik initialValues={{ field: initValue }} onSubmit={() => {}}>
      <Form>
        <SimpleField data-testid="input-field" name={"field"} />
      </Form>
    </Formik>
  );
};
const user = userEvent.setup();

test("input should be defined", () => {
  const { getByTestId, debug } = render(<InputContainer />);
  expect(getByTestId("input-field")).toBeInTheDocument();
});

test("input should have an initial value of init value", () => {
  const { getByTestId } = render(<InputContainer />);
  expect((getByTestId("input-field") as HTMLInputElement).value).toBe(
    "init value"
  );
});

test("should change value", async () => {
  const { getByTestId } = render(<InputContainer initValue="" />);
  const input = getByTestId("input-field") as HTMLInputElement;
  await user.type(input, "new value");
  await waitFor(() => expect(input.value).toBe("new value"));
});

test("should be in focus", async () => {
  const { getByTestId } = render(<InputContainer initValue="" />);
  const input = getByTestId("input-field") as HTMLInputElement;
  await userEvent.click(input);
  expect(input).toHaveFocus();
});
