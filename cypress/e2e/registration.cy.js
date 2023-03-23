
describe('Registration', function () {

    it('should test registration', function () {

        cy.viewport(1920, 1080)
        cy.visit('https://localcoding.us/')
        cy.title().should('eq', 'Local Coding');
        cy.xpath('//a[text()="Курсы"]').should('be.visible')
        cy.xpath('//a[text()="Задачи"]').should('be.visible')
        cy.xpath('//a[text()="Интервью"]').should('be.visible')
        cy.xpath('//a[text()="Дневник"]').should('be.visible')
        cy.get('[data-qa="login"]').should('be.visible')
        cy.get('[data-qa="register"]').should('be.visible')
        cy.get('.ant-dropdown-trigger span').should('be.visible')
        cy.get('[data-qa="footerTerms"]').should('be.visible')
        cy.get('[data-qa="footerPrivacy"]').should('be.visible')
        cy.get('#user_register_step_1').should('be.visible')

        // cy.get('#user_register_step_1_firstName').type('Tatty')
        // cy.get('#user_register_step_1_lastName').type('Bond')
        // cy.get('[title="United States"]').should('have.text', 'United States')

    });

});
