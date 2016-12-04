import { IsoPage } from './app.po';

describe('iso App', function() {
  let page: IsoPage;

  beforeEach(() => {
    page = new IsoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
