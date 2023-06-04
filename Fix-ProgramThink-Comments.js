// ==UserScript==
// @name Fix ProgramThink Comments
// @version 0.1
// @match *://program-think.blogspot.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=blogspot.com
// @run-at document-body
// @license The Unlicense
// ==/UserScript==

(function () {
  'use strict';
  $(document).ready(function () {
    let str = $('a#comment-editor-src').attr('href');
    if (str) {
      let postID = str.match(/po=(\d+)/)[1];
      $('a#comment-editor-src').attr('href', `${str}&postID=${postID}`);
    }
  });
})();
