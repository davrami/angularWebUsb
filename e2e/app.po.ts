import { browser, by, element } from 'protractor';

export class Ang2WebUsbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
