import BasePage from "./base.page";

class ProfilePage extends BasePage {
    get profile() {return cy.xpath('//h1[data-icon="down"]')}
    get avatar() { return cy.get('.ant-avatar-square') }

}
export default new ProfilePage()
