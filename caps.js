'use strict';
//like brain

const events = require('./events');

const driver= require('./driver');
const vendor= require('./vendor');



events.on('pickup',pickUp);
events.on('in-transit',inTransit);
events.on('delivered',delivered);


function pickUp (payload){
  let o = {
    event : 'pickup',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, o);
}
  
function inTransit (payload){
  let o = {
    event : 'in-transit',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, o);
}
  
function delivered (payload){
  let o = {
    event : 'delivered',
    time : new Date(),
    payload : payload,
  };
  console.log (`EVENT `, o);
}
  
module.exports = {
  pickUp,
  inTransit,
  delivered,
};