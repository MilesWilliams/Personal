import { PersonalPage } from './app.po';

describe('personal App', () => {
  let page: PersonalPage;

  beforeEach(() => {
    page = new PersonalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
