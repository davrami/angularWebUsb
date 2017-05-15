import { Ang2WebUsbPage } from './app.po';

describe('ang2-web-usb App', () => {
  let page: Ang2WebUsbPage;

  beforeEach(() => {
    page = new Ang2WebUsbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
