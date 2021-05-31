'use strict';

const events=require('./events');

events.on('pickup',pickup);

function pickup(payload){
  setInterval(()=>{
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit',payload);
  },1000);
  setInterval(()=>{
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    events.emit('delivered',payload);  
  });
}




module.exports={
  pickup,
};