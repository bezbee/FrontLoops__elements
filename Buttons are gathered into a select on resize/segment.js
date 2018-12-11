'use strict';

(function() {

  var buttons = document.querySelectorAll('button');
  var select = document.querySelector('select');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (){
      buttons.forEach(function (item) {
        item.style.backgroundColor = 'white';
      });
      this.style.backgroundColor = 'pink';
      select.selectedIndex = this.value - 1;
    });
  }
})();
