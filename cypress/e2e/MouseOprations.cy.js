import "cypress-iframe"
require("@4tw/cypress-drag-drop")
describe("Handling mouse oprations",()=>{

    it.skip("Mouse Hover",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get("#narbar-menu>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)>a").should("not.be.visible")
        cy.get("#narbar-menu>ul>li:nth-child(1)").trigger('mouseover').click()
        cy.get("#narbar-menu>ul>li:nth-child(1)>div>div>ul>li:nth-child(2)>a").should("be.visible")
    })

    it.skip("Right Click",()=>{

        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
      //  cy.get("span.context-menu-one.btn.btn-neutral").trigger("contextmenu")
        
        cy.get("span.context-menu-one.btn.btn-neutral").rightclick()

    })

    it.skip("Double Click",()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")
        // cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").dblclick()            //Using dblclick() 
        cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").trigger("dblclick")      //using trigger("bdlclick")
        
        cy.iframe("#iframeResult").find("#field2").should("have.value","Hello World!")
    })

    // it("Drag and drop",()=>{
    //     cy.visit("https://www.globalsqa.com/demo-site/draganddrop/")
    //     cy.wait(3000)
    //     cy.frameLoaded("iframe.demo-frame.lazyloaded")
    //     cy.iframe("iframe.demo-frame.lazyloaded").find("[alt=''The peaks of High Tatras']").drag("#trash",{force:true})
    // })
})