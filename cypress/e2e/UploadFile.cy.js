require ('cypress-file-upload')

describe("Upload File",()=>{

    it("Upload Single File",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("colt m4.png")
        cy.get("#file-submit").click()
        cy.get("div.example>h3").should("have.text","File Uploaded!")
    })

    it("Upload Single File and rename",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({fileName:"MyFile.png",filePath:"colt m4.png"})   // this parameter is used to change the name of uploaded file
        cy.get("#file-submit").click()
        cy.get("div.example>h3").should("have.text","File Uploaded!")
    })

    it("Upload using drag and drop",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("colt m4.png",{subjectType:'drag-n-drop'})   // this parameter is used to change the name of uploaded file
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("colt m4.png")
       
    })

    it("Upload multiple files at a single time",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(["4e5180.png","colt m4.png"])
        cy.get("#fileList>li").should("have.length",2)
    })

    it.only("Upload file on Shadow Dom ",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get("input.smart-browse-input",{includeShadowDom:true}).attachFile("colt m4.png")
    
    })

})