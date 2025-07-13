function button({ children }, variant = "primary") {
  return <button variant={variant}>{children}</button>;
}

export { button };
