describe("Intract with Radio Btn and Check Box",()=>{
    it("Handling Radio Btn",()=>{
        cy.visit("https://formstone.it/components/checkbox/")
        // cy.get("[id='radio-1']").should("be.visible")   // Assertion for visibility of Check box
        // cy.get("[id='radio-2']").should("be.visible")

        // Assertion for Checking the radio btn
        cy.get("[id='radio-2']").check().should("not.be.checked")
        cy.get("[id='radio-1']").should("not.be.checked")   
    })
})