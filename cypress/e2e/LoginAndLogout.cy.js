/// <reference types="cypress" />

describe("Login and logout", () => {
  let username;
  let password;

  before(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
    cy.fixture("credentials").then((credentials) => {
      username = credentials.username;
      password = credentials.password;
    });
  });
  it("should login", () => {
    cy.visit("http://localhost:3001");
    cy.get('input[type="text"]').type(username);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
    expect(sessionStorage.getItem("token")).not.to.be.undefined;
    cy.get("tr").should("contain", "Name");
    cy.get("tr").should("contain", "Distance");
  });

  it("should logout", () => {
    cy.get(".popover__title").click();
    cy.get(".popover__content").get("button").click();
    cy.get("h1").should("contain", "You've been logged out");
    cy.get("button")
      .should("contain", "Go to login")
      .then(() => [expect(sessionStorage.getItem("token")).to.be.null]);
  });
});
