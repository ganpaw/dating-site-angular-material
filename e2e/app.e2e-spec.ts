import { DatingSiteAngularMaterialPage } from './app.po';

describe('dating-site-angular-material App', () => {
  let page: DatingSiteAngularMaterialPage;

  beforeEach(() => {
    page = new DatingSiteAngularMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
