// https://on.cypress.io/writing-first-test

describe("goto the page", () => {
  it("has hello world", () => {
    cy.visit("http://127.0.0.1:8787");
    cy.contains("hello world 2");
  });
});
