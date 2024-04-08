describe('My Third Test Suite', function(){
    it('Handling CheckBox', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //working with check box
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3']).should('be.checked')
    })

    it('Handling static dropdown', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //static dropdown
        cy.get("#dropdown-class-example").select('option2').should('have.value','option2')
    })

    it('Handling dynamic dropdown', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //dynamic dropdown
        cy.get("#autocomplete").type('Br')
        cy.get(".ui-menu-item > div").each(($el, index, $list) =>{
            if($el.text().includes('Brazil')){
                cy.wrap($el).click().should('have.text','Brazil')
            }
        })
    })

    it('Handling visibility of elements', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //visibility of elements
        cy.get("#displayed-text").should('be.visible','active')
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible','active')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible','active')
    })

    it('Handling radio buttons', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //radio buttons
        cy.get("input[value='radio1']").check().should('be.checked').and('have.value','radio1')
        cy.get("input[value*='radio']").check(['radio3']).should('be.checked')
        cy.get("input[value='radio1']").should('not.be.checked')
    })

    it('Handling window alert', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        //cypress has capability on handling browser events
        //window alert are automaticaly handled by cypress
        cy.get("#alertbtn").click()

        //validade alert text with mocha assertions
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get("#confirmbtn").click()

        //validade alert text with mocha assertions
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

    it('Handling switch tab', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //As cypress can not handle a new tab, 
        //we remove the attribute responsible for opening a new tab before click
        cy.get("a[id='opentab']").invoke('removeAttr','target').click()

        //When changing the original domain we must declare a new domain to work
        cy.origin('https://www.qaclickacademy.com/', () =>{
            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.contains('Welcome to QAClick Academy')
        })
    })
       
})