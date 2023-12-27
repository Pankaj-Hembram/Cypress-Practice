describe("Handle Popup",()=>{

    // Alert Popup
    it("Handle alert popup",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsAlert()']").click()     // cypress automatically handles alert popup by clickin ok

        cy.on("window:alert",(a)=>{     // on is used to trigger alert event  //window:alert is used for alert event
            expect(a).to.contain("I am a JS Alert")
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })


// Confirmation Popup
    it("Handling Confirmation popup using ok",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click() 

        cy.on("window:confirm",(a)=>{     // on is used to trigger alert event //window:confirm is used for alert event
            expect(a).to.contain("I am a JS Confirm")
        })
        cy.get("#result").should("have.text","You clicked: Ok")
    })

    it("Handling Confirmation popup using cancle",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("[onclick='jsConfirm()']").click() 

        cy.on("window:confirm",(a)=>{     // on is used to trigger alert event //window:confirm is used for alert event
            expect(a).to.contain("I am a JS Confirm")
        })

        cy.on("window:confirm",()=>false)  // Close Confirmation popup using Cancle button
        cy.get("#result").should("have.text","You clicked: Cancel")
    })

    //  Prompt popup

    it("Handling prompt popup by entering value",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Have a good day.")
        })
        cy.get("[onClick='jsPrompt()']").click() 
        cy.get("#result").should("have.text","You entered: Have a good day.")
      
    })

    it("Handling prompt popup by cancel",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Have a good day.")
        })
       
        cy.get("[onClick='jsPrompt()']").click() 
        cy.on("window:prompt",()=>false)
        cy.get("#result").should("have.text","YYou entered: null")
      
    })

// Authentication popup  Method-1
it("Handling Authentication Popup",()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}}) 
    cy.get("div.example>p").should("have.contain","Congratulations!")   
})

// Method-2
it("Handling Authentication Popup",()=>{
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") 
    cy.get("div.example>p").should("have.contain","Congratulations!")   
})

})