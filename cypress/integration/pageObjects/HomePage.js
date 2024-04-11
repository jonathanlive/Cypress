class HomePage
{
    GetInputName(){
        return cy.get("div[class='form-group'] > input[name='name']")
    }

    GetInputEmail(){
        return cy.get("div[class='form-group'] > input[name='email']")
    }

    GetInputPassword(){
        return cy.get("div[class='form-group'] > input[type='password']")
    }

    GetEditboxNameValidation(){
        return cy.get("h4 > input")
    }
}

export default HomePage;