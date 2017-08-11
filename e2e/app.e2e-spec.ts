import { ClientManagerPage } from './app.po';

describe('client-manager App', () => {
  let page: ClientManagerPage;

  beforeEach(() => {
    page = new ClientManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
