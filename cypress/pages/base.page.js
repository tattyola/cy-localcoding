class BasePage {
    get path() {return cy.location('pathname')}
    get login() {return cy.get('#normal_login_email')}
    get getStarted() {return cy.get('[data-qa="register"]')}
    get language() {return cy.get('[data-icon="down"]')}
    get courses() {return cy.get('[data-qa="topmenu-Courses"]')}
    get challenges() {return cy.get('[data-qa="topmenu-Challenges"]')}
    get interviewQuestions() {return cy.get('[data-qa="topmenu-Interview Questions"]')}
    get diary() {return cy.get('[data-qa="topmenu-Diary"]')}

    open(path) {
        return cy.visit(path)
    }
}

export default BasePage
