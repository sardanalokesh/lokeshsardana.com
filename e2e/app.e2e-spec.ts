import { LokeshsardanaPage } from './app.po';

describe('lokeshsardana App', function() {
  let page: LokeshsardanaPage;

  beforeEach(() => {
    page = new LokeshsardanaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
