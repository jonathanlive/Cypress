describe('My First Test Suite', function(){
    beforeEach(function(){
        this.url = Cypress.env("SeleniumPracticeUrl")
    })

    it('First Test Case that does not do much', function(){
        cy.visit(this.url)
        cy.get("input[type='search']").type('ca')
        cy.get("div[class='product']").as('productElement');
        cy.get('@productElement').should('have.length',4)
        cy.get("div[class='products']").find("div[class='product']").should('have.length',4)
        cy.get("div[class='products']").find("div[class='product']").eq(2).contains('ADD TO CART').click()
        cy.get("div[class='products']").find("div[class='product']").each(($el, index,$list) => {
           const productName = $el.find("h4[class='product-name']").text()
           
           if(productName.includes('Cashews'))
           {
                cy.wrap($el).find('button').click()
           }
           
           cy.get("div[class='brand greenLogo']").then(function(logo){
                cy.log(logo.text())
           })
        })
    })
})