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
        cy.clickNextSiblingElementByText(this.data.device,"h4.card-title",".card-footer > button")
        cy.get("a[class='nav-link btn btn-primary']").click()
        cy.get("tbody > tr:has(.btn-danger)").should('contain.text',this.data.device)
    })
})