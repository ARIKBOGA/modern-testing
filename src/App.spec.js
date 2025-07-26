import { render, screen } from "@testing-library/react";

function TestComponent() {
  return (
    <form>
      <label htmlFor="user-name">User name:</label>
      <input type="text" id="user-name" placeholder="Enter your username" />
      <input
        placeholder="Enter your email"
        defaultValue={"test@mail.com"}
      ></input>
      <button type="submit">Log in</button>
    </form>
  );
}

test("Should render with labels", () => {
  render(<TestComponent />);
  const element = screen.getAllByLabelText("User name:"); // returns an Array

  expect(element[0]).toBeInTheDocument();
  //expect(element)
});

it("should render with it's placeholder", () => {
  render(<TestComponent />);
  const element = screen.getByPlaceholderText("Enter your username"); // returns an element

  expect(element).toBeInTheDocument();
});

it("should render with it's text content", () => {
  render(<TestComponent />);
  const element = screen.getByText("Log in");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Log in");
});

it('should render with its displayed value', () => {
    render(<TestComponent />);
    const element = screen.getByDisplayValue("test@mail.com");
    expect(element).toBeInTheDocument();
})
