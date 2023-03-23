import AuthPage from "../pages/auth.page";
import ProfilePage from "../pages/profile.page";
import user from '../fixtures/user.json'
import invalid from '../fixtures/invalid.json'

describe('Login', function () {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        AuthPage.open('/user/login')
    })

    it('login - positive scenario', function () {

        cy.title().should('eq', 'Local Coding');
        AuthPage.login.click()
        AuthPage.path.should('eq', '/user/login')
        AuthPage.logIn(user.username, user.password)
        ProfilePage.path.should('eq', '/profile/6042ea34bf6f15003a81883a')
        ProfilePage.avatar.should('be.visible')
        cy.location('pathname').should('include', 'profile')

    });

    it('login - negative scenario', () => {

        cy.title().should('eq', 'Local Coding');
        AuthPage.login.click()
        AuthPage.path.should('eq', '/user/login')
        AuthPage.logIn(invalid.username, invalid.password)
        AuthPage.containerError.should('be.visible')
        AuthPage.errorMessage.should('have.text', 'Auth failed')
    })

    it('should validate credentials', () => {

        cy.title().should('eq', 'Local Coding');
        AuthPage.login.click()
        AuthPage.path.should('eq', '/user/login')
        AuthPage.inputUsername.type('test');
        AuthPage.errorEmail.should('have.text', '\'email\' is not a valid email')
        AuthPage.inputUsername.clear()
        AuthPage.errorEmail.should('have.text', 'Required')
        AuthPage.inputPassword.type('test').clear()
        AuthPage.errorPassword.should('have.text', 'Required')

    });

});
