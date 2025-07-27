import { render, screen } from "@testing-library/react";

function TestComponent() {
  return (
    <>
      <form>
        <label htmlFor="user-name">User name:</label>
        <input type="text" id="user-name" placeholder="Enter your username" />
        <input
          placeholder="Enter your email"
          defaultValue={"test@mail.com"}
        ></input>
        <button type="submit">Log in</button>
        <img src="#" alt="TestComponent iamge"></img>
      </form>
      <div data-testid="divElement">MODERN TESTING WITH JEST</div>
      <div>
        <button role="navigation">Home</button>
      </div>
    </>
  );
}

TestMultipleElementsComponent = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
};

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

it("should render with its displayed value", () => {
  render(<TestComponent />);
  const element = screen.getByDisplayValue("test@mail.com");
  expect(element).toBeInTheDocument();
});

it("should render with it's alt text for images", () => {
  render(<TestComponent />);
  const element = screen.getByAltText("TestComponent iamge");
  expect(element.src).toBe("http://localhost/#"); // despite the src value has been given as '#', it will processed as 'http://localhost/#'
});

it("should render with it's test id", () => {
  render(<TestComponent />);
  const element = screen.getByTestId("divElement");
  expect(element).toBeInTheDocument();
  expect(element.textContent).toBe("MODERN TESTING WITH JEST");
});

it("should render with it's role", () => {
  render(<TestComponent />);
  const element = screen.getByRole("navigation");
  expect(element.textContent).toBe("Home");
});


it("should render multiple elements correctly", () => {
  const products = ["Product-1", "Product-2", "Product-3"];
  render(<TestMultipleElementsComponent products={products} />);
  const elements = screen.getAllByRole("listitem");

  expect(elements.length).toBe(products.length);
  
  elements.forEach((element, index) => {
    expect(element.textContent).toBe(products[index]);
  })
})