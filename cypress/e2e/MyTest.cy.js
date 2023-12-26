describe('Test Suite', () => {
  it('Verify Page Title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM")  // Assertion for title
  })

  it('Verify Page Title Negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should("eq","OrangeHRM123") // Assertion for title Negative
  })
})