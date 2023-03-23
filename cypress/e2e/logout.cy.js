import AuthPage from "../pages/auth.page";
import ProfilePage from "../pages/profile.page";
import user from '../fixtures/user.json'

describe('Logout', function () {
    const name = 'Tatsiana Astrouskaya'

    beforeEach(() => {
        cy.viewport(1920, 1080)
        AuthPage.open('/user/login')
    })

    it('logout', function () {

        cy.title().should('eq', 'Local Coding');
        AuthPage.login.click()
        AuthPage.path.should('eq', '/user/login')
        AuthPage.logIn(user.username, user.password)
        ProfilePage.path.should('eq', '/profile/6042ea34bf6f15003a81883a')
        cy.xpath('//span[@class="ms-2 me-2"]').then(function ($el) {
            const userName = $el.text()
            expect(userName).to.equal(name)
        })
        cy.xpath('//span[@class="ms-2 me-2"]').click()
        // cy.get('[data-menu-id="rc-menu-uuid-14160-1-logout"]').click()

    });

});
