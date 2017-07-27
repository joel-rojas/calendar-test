import { CalendarTestPage } from './app.po';

describe('calendar-test App', () => {
  let page: CalendarTestPage;

  beforeEach(() => {
    page = new CalendarTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
