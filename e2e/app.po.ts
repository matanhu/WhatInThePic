import { browser, by, element } from 'protractor';

export class WhatInThePicturesAngular4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mh-root h1')).getText();
  }
}
