describe("Handling table element",()=>{

    beforeEach("Login", ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("[type='submit']").click()
        cy.get("button.btn-close").click()
        cy.get("#menu-customer>a.parent.collapsed").click()
        cy.get("#collapse-5>li:nth-child(1)").click()
    })

    it("Count of rows and column",()=>{
        cy.get("table.table-bordered.table-hover>tbody>tr").should("have.length",10)
        cy.get("table.table-bordered.table-hover>tbody>tr:first-child>td").should("have.length",7)
    })

    it("Read data from a specific row and column",()=>{
        cy.get("table.table-bordered.table-hover>tbody>tr:nth-child(4)>td:nth-child(3)").should("have.text","gorankrezic90@gmail.com")
    })

    it("Read each and every data of table",()=>{
        cy.get("table.table-bordered.table-hover>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text())
                })
            })
        })
    })

    it("Pagination",()=>{
        
        let totalPage
        cy.get("div.col-sm-6.text-end").then((t)=>{
            let page = t.text()
            totalPage = page.substring(page.indexOf("(")+1,page.indexOf("Page")-1)
            cy.log(totalPage)
        })
        
        for(let p=1;p<=5;p++){
            cy.log("On page "+p)
            cy.get("ul.pagination>li:nth-child("+p+")").click()
        }
    })
})