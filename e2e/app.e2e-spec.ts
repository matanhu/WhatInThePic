import { WhatInThePicturesAngular4Page } from './app.po';

describe('what-in-the-pictures-angular4 App', () => {
  let page: WhatInThePicturesAngular4Page;

  beforeEach(() => {
    page = new WhatInThePicturesAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mh works!');
  });
});
