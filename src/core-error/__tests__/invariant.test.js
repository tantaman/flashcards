import invariant from "../invariant";

test("throws on false", () => {
  expect(() => invariant(false, "")).toThrow();
});

test("does not throw on true", () => {
  expect(() => invariant(true, "")).not.toThrow();
});

test("Has the message in the exception", () => {
  let message = "";
  try {
    invariant(false, "failure");
  } catch (e) {
    message = e.message;
  }

  expect(message).toEqual("failure");
});
