'use strict';



let bookingForm = document.getElementById( 'bookingForm' );
let parentElement = document.getElementById( 'table-body' );



function Booking ( userName,email,phone,location,hotel,adult,children,checkin,checkout ) {
  this.userName = userName;
  this.email = email;
  this.phone = phone;
  this.location = location;
  this.hotel = hotel;
  this.adult = adult;
  this.children = children;
  this.checkin = checkin;
  this.checkout = checkout;
  Booking.all.push( this );

  localStorage.setItem( 'booking', JSON.stringify( Booking.all ) );
}

Booking.all = [];


Booking.prototype.render = function ( ) {
  const tr = document.createElement( 'tr' );
  parentElement.appendChild( tr );

  const td1 = document.createElement( 'td' );
  td1.textContent = this.userName;
  tr.appendChild( td1 );

  const td2 = document.createElement( 'td' );
  td2.textContent = this.email;
  tr.appendChild( td2 );

  const td3 = document.createElement( 'td' );
  td3.textContent = this.phone;
  tr.appendChild( td3 );


  const td4 = document.createElement( 'td' );
  td4.textContent = this.location;
  tr.appendChild( td4 );


  const td5 = document.createElement( 'td' );
  td5.textContent = this.hotel;
  tr.appendChild( td5 );


  const td6 = document.createElement( 'td' );
  td6.textContent = this.adult;
  tr.appendChild( td6 );


  const td7 = document.createElement( 'td' );
  td7.textContent = this.children;
  tr.appendChild( td7 );


  const td8 = document.createElement( 'td' );
  td8.textContent = this.checkin;
  tr.appendChild( td8 );


  const td9 = document.createElement( 'td' );
  td9.textContent = this.checkout;
  tr.appendChild( td9 );
};


let myFunction = function ( evt ) {
  evt.preventDefault();

  console.log( evt.target );
  let username = evt.target.name.value;
  let email = evt.target.email.value;
  let phone = evt.target.phone.value;
  let location = evt.target.location.value;
  let hotel = evt.target.hotel.value;
  let adult = evt.target.adult.value;
  let children = evt.target.children.value;
  let checkIn = evt.target.checkIn.value;
  let checkOut = evt.target.checkOut.value;


  let newObj = new Booking( username, email, phone, location, hotel, adult, children,checkIn, checkOut );
  newObj.render();
};

bookingForm.addEventListener( 'submit', myFunction );

function getData() {
  let data = JSON.parse( localStorage.getItem( 'booking' ) );
  if( data ) {
    for( let i = 0; i < data.length; i++ ) {
      let obj = new Booking( data[i].userName,data[i].email,data[i].phone,data[i].location,data[i].hotel,data[i].adult,data[i].children,data[i].checkin,data[i].checkout );
      obj.render();
    }
  }
}

getData();
// clearTableData();


// function clearTableData() {
//   const tableEL = document.getElementById( 'table-body' );
//   tableEL.innerHTML = '';
//   localStorage.removeItem( 'booking' );
// }


