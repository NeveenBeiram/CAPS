'use strict';

require('dotenv').config();

const faker= require('faker');

const events=require('./events');

const store=process.env.STORE;



function Order(store){
  this.store=store;
  this.orderId=faker.datatype.uuid();
  this.customer=faker.name.findName();
  this.address=faker.address.cityName();
}



setInterval(()=>{
  let fake= new Order(store);
  events.emit('pickup',fake);
},5000);


events.on('delivered',(payload)=>{
  console.log(`VENDOR: thank you delver ${payload.orderId} `);
});



module.exports={Order};