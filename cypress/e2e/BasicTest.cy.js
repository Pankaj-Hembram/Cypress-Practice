describe("Login", ()=>{

    it("Login With Incorrect Password",()=>{
        cy.visit("https://admin-stage.comcate.com/agencies")
        cy.url().should("contain","/login")   // Assertion for verifying url 
        cy.get("[name='email']").type("support@comcate.com")  //type method is used to Enter text in TextBox
        cy.get("[name='password']").type("C0de#4321!")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.get("div.notification-message").should('be.visible').and("contain","Password did not match.") // Assetion for validation message
    })

    it("Login With Incorrect UserName",()=>{
        cy.visit("https://admin-stage.comcate.com/agencies")
        cy.url().should("contain","/login")   
        cy.get("[name='email']").type("support@comcate.co.in")
        cy.get("[name='password']").type("C0de#4321")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.get("div.notification-message").should('be.visible').and("contain","Could not find the account")  // Assetion for validation message
    })

    it("Successfull Login",()=>{
        cy.visit("https://admin-stage.comcate.com/agencies")
        cy.url().should("contain","/login")  
        cy.get("[name='email']").type("support@comcate.com")
        cy.get("[name='password']").type("C0de#432!")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.url().should("contain","admin-stage.comcate.com/agencies")  // Assertion for verifying url after login
    })

    it("Verify Search Feature", ()=>{
        cy.visit("https://admin-stage.comcate.com/agencies")
        cy.url().should("contain","/login")
        cy.get("[name='email']").type("support@comcate.com") 
        cy.get("[name='password']").type("C0de#432!")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.get("[placeholder='Search by keyword']").type("195")
        cy.get("div.rt-tr.-odd").should("have.length","1") // assertion for count of the Search result
    })

    it("Logout Btn test",()=>{
        cy.visit("https://admin-stage.comcate.com/agencies")
        cy.url().should("contain","/login")
        cy.get("[name='email']").type("support@comcate.com") 
        cy.get("[name='password']").type("C0de#432!")
        cy.get("button.square-btn.btn.btn-primary").click()
        cy.get("div.app-header__user-name").click()
        cy.get("div.app-header__user-actions label").click()
        cy.url().should("not.contain","/agencies")
    })
   

})

