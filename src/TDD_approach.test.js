import { render, screen } from "@testing-library/react";
import App from './App';

it('should render \'Modern Testing\' component', async () => {
    render(<App />);
    const element = screen.getByText('Modern Testing');
    await expect(element).toBeInTheDocument();
})

it('should render button component', async () => {
    render(<App />);
    const element = screen.getByText('Submit');
    await expect(element).toBeInTheDocument();
})

it('should render button component',  () => {
    render(<App />);
    const element = screen.getByText('Submit');
    expect(element).toBeEnabled();
})