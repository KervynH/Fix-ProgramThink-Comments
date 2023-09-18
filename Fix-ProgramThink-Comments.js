// ==UserScript==
// @name Fix ProgramThink Comments
// @match https://program-think.blogspot.com/*
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
