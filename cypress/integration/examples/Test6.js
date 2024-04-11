  
import HomePage from '../pageObjects/HomePage'

describe('Framework Concepts Test Suite', function() 
{
    //using before Hooks to setup test data
    beforeEach(function() {
        cy.fixture('example').then(function(data){
            this.data = data
        })
      })

    it('Using fixture Data',function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get(".form-group input[name='name']").type(this.data.name)
        cy.get(".form-group input[name='email']").type(this.data.email)
        cy.get(".form-group input[type='password']").type(this.data.password)
        cy.get("h4 input[name='name']").should('have.value', this.data.name)
    })

    it('Using custom commands',function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("a[href*='shop']").click()

        cy.wrap(this.data.device).each((element) => {
            cy.clickNextSiblingElementByText(element,"h4.card-title",".card-footer > button")
        })

        cy.get("a[class='nav-link btn btn-primary']").click()
        cy.wrap(this.data.device).each((element) => {
            cy.get("table[class='table table-hover']").should('contain.text',element)
        })
    })

    it('Using page object Design',function() {
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.GetInputName().type(this.data.name)
        homePage.GetInputEmail().type(this.data.email)
        homePage.GetInputPassword().type(this.data.password)
        homePage.GetEditboxNameValidation().should('have.value', this.data.name)
    })
})