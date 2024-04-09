 import 'cypress-iframe'
 
 describe('My Fifth Test Suite', function() 
{
    it('Handling frames',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //we must install and import cypress-iframe to work with frames using cypress
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })
})