import { render, screen } from "@testing-library/react";
import App from "./App";

describe("All Test covarege", () => {
  // common tests for all scopes
  it("test1", () => {});

  it("test2", () => {});

  // The tests for the variant=primary stiuations
  describe("variant=primary scope tests", () => {
    it("test1", () => {});

    it("test2", () => {});
  });


  // The tests for the variant=secondary stiuations
  describe("variant=secondary scope tests", () => {
    it("test1", () => {});

    it("test2", () => {});
  });
});
