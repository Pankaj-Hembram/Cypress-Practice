import "cypress-iframe"

describe("iFrame",()=>{

    it.skip("Handling iFrame",()=>{
    cy.visit("https://the-internet.herokuapp.com/iframe")  
   // const iframe = cy.getIframe("#mce_0_ifr")  // using custome command
    const iframe = cy.get("#mce_0_ifr")
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap) 
    iframe.clear().type("This is a iframe {cmd+a}")
    cy.get("[title='Bold']").click()  
    })

    it("Handle iframe using iframe plugin",()=>{
       cy.visit("https://the-internet.herokuapp.com/iframe") 
       cy.frameLoaded("#mce_0_ifr")
       cy.iframe("#mce_0_ifr").clear().type("Thank for using iframe plugin {cmd+a}")
       cy.get("[title='Italic']").click()

    })
})