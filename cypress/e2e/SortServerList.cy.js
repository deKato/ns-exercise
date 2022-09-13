/// <reference types="cypress" />

describe("Sort server list", () => {
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
  });
  it("should check data is rendered in the table", () => {
    cy.get("tr").should("have.length.above", 2);
  }),
    it("should sort by name", () => {
      cy.get('[data-testid="name-header"]').as("nameHeader");
      cy.get("@nameHeader")
        .click()
        .then(($div) => {
          cy.get($div).should("contain", "Name");
          cy.get($div).find("div").find("svg").should("exist");
          cy.get("tr").should("have.length.above", 2);
        });
      cy.get("@nameHeader")
        .click()
        .then(($div) => {
          cy.get($div).should("contain", "Name");
          cy.get($div)
            .find("div")
            .should(
              "have.css",
              "transform",
              "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)"
            );
          cy.get($div).find("div").find("svg").should("exist");
          cy.get("tr").should("have.length.above", 2);
        });
      cy.get("@nameHeader")
        .click()
        .then(($div) => {
          cy.get($div).should("contain", "Name");
          cy.get($div).find("div").find("svg").should("not.be.visible");
        });
      cy.get("tr").should("have.length.above", 2);
    });
  it("should sort by distance", () => {
    cy.get('[data-testid="distance-header"]').as("distanceHeader");
    cy.get("@distanceHeader")
      .click()
      .then(($div) => {
        cy.get($div).should("contain", "Distance");
        cy.get($div).find("div").find("svg").should("exist");
        cy.get("tr").should("have.length.above", 2);
      });
    cy.get("@distanceHeader")
      .click()
      .then(($div) => {
        cy.get($div).should("contain", "Distance");
        cy.get($div)
          .find("div")
          .should(
            "have.css",
            "transform",
            "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)"
          );
        cy.get($div).find("div").find("svg").should("exist");
        cy.get("tr").should("have.length.above", 2);
      });
    cy.get("@distanceHeader")
      .click()
      .then(($div) => {
        cy.get($div).should("contain", "Distance");
        cy.get($div).find("div").find("svg").should("not.be.visible");
      });
    cy.get("tr").should("have.length.above", 2);
  });
});
