import BasePage from "./base.page";
class AuthPage extends BasePage {
    get inputUsername() {return cy.get('[id="normal_login_email"]')}
    get inputPassword() {return cy.get('[id="normal_login_password"]')}
    get buttonLogIn() {return cy.get('[type="submit"]')}
    get containerError() {return cy.get('[class="ant-notification-notice-with-icon"]')}
    get errorMessage() {return cy.get('.ant-notification-notice-message') }
    get errorEmail() {return cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_email"]]//div[@class="ant-form-item-explain-error"]') }
    get errorPassword() {return cy.xpath('//div[contains(@class, "ant-form-item-has-error")][.//input[@id="normal_login_password"]]//div[@class="ant-form-item-explain-error"]') }

    open() {
        return super.open('/user/login')
    }
    logIn(username, password) {
        this.inputUsername.type(username)
        this.inputPassword.type(password)
        this.buttonLogIn.click()
    }
}
export default new AuthPage()
