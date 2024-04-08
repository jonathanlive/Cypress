 describe('My Forth Test Suite', function() 
{
    it('Handling tables',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
         const text=$e1.text()
        if(text.includes("Python"))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
                const priceText=   price.text()
                expect(priceText).to.equal('25')
            })
        }}) 
    })

    it('Handling mouse Hover',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cypress does not handle mouse hover, 
        //instead we invoke jquery to show the hidden elements of a menu
        cy.get("div[class='mouse-hover-content']").invoke('show')
        cy.contains('Top').click()

        //Mocha method to validate substring on a URL
        cy.url().should('include', 'top')

    })

    it('Force click on hidden element',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //we can use a parameter to force click on hidden elements
        cy.contains('Top').click({force : true})

        //Mocha method to validate substring on a URL
        cy.url().should('include', 'top')

    })
})