'use strict';

window.onscroll = function() {headerFunction();};

let header = document.getElementById( 'myHeader' );
let sticky = header.offsetTop + 100;

function headerFunction() {
  if ( window.pageYOffset > sticky ) {
    header.classList.add( 'sticky' );
  } else {
    header.classList.remove( 'sticky' );
  }
}


