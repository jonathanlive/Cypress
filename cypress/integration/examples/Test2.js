describe('My Second Test Suite', function(){
    it('First Test Case that does not do much', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input[type='search']").type('ca')
        
        cy.get("div[class='products']").find("div[class='product']").each(($el, index,$list) => {
           const productName = $el.find("h4[class='product-name']").text()
           
           if(productName.includes('Cashews'))
           {
                cy.wrap($el).find('button').click()
           }
        })

        cy.get("a[class='cart-icon']").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
        cy.get("div.products-wrapper button:not(button[class='promoBtn']):visible").click()
    })
})