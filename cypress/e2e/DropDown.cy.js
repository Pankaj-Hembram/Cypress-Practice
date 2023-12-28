describe("Handling Drop Down",()=>{

    it.skip("Dropdown menu",()=>{
        cy.visit("https://seleniumpractise.blogspot.com/2019/01/dropdown-demo-for-selenium.html")
        cy.get("#tools").select("Docker").should("have.value","Docker")

       })

       it.skip("Dynamic Auto Suggestion",()=>{
        cy.visit("https://www.google.com/")
        cy.get("[name='q']").type("Automation Testing")
        cy.wait(3000)
        cy.get("div.wM6W7d>span").each(($el,index,$list) => {
            if($el.text() == "automation testing tutorial"){
                cy.wrap($el).click()
            }
        })       
    })

    it("Combo Box",()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("[name='search']").type("India")
        cy.get("h3.suggestion-title").contains("India").click()
    })


        
})