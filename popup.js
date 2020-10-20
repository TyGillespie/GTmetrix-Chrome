/*
 * popup.js
 * A part of GTmetrix-Chrome.
 * 
 * Copyright (C) 2020, Ty Gillespie <tygillespie6@gmail.com>.
 * All rights reserved.
 * 
 * License: MIT.
*/

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function () {
    chrome.tabs.getSelected(null, function (tab) {
      // Setup the form to be sent to the website.
      d = document;
      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);
