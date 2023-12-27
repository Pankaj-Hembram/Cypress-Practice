describe("Handling Tab and Window",()=>{

    it("Child Window",()=>{
        cy.visit("https://admin-stage.comcate.com/login")
        cy.get("[name='email']").type("support@comcate.com")
        cy.get("[name='password']").type("C0de#432!")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.get("[placeholder='Search by keyword']").type("195")
        cy.wait(5000)
// Example using a class selector
cy.get("div.agencies-listing__agency-actions > button:nth-child(2)")
  .should('be.visible')
  .invoke("removeAttr", "target")
  .click();


    })
})