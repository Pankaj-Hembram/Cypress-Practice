describe("Hooks and Tags in Cypress",()=>{

before("This is before hook",()=>{
    cy.log("*** Launch App ***")
})

after("This is after hook",()=>{
    cy.log("*** Close App ***")
})

beforeEach("This is beforeEach hook",()=>{
    cy.log("*** Login ***")
})

afterEach("This is afterEach hook",()=>{
    cy.log("*** Logout ***")
})

it("it-block-1",()=>{
    cy.log("Test case 1")
})

it("it-block-2",()=>{
    cy.log("Test case 2")
})

it("it-block-3",()=>{
    cy.log("Test case 3")
})

/*
// only tag will execute only the paticular block in which only tag is used 
it.only("it-block-4",()=>{
    cy.log("Test case 4")
})

// skip tag will skip the it block on which it is mentioned
it.skip("it-block-3",()=>{
    cy.log("Test case 3")
})
*/


})