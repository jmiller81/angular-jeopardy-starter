import { JeopardyLitePage } from './app.po';

describe('jeopardy-lite App', () => {
  let page: JeopardyLitePage;

  beforeEach(() => {
    page = new JeopardyLitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Jeopardy!!');
  });
});
