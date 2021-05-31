'use strict';
const events =require('../events.js');

describe('test', ()=> {


  let consoleSpy;
  let o = {
    store :'neveen',
    orderID : 'e4ca52f4-05b3-44b6-9814-1d441a23a2b2',
    customer : 'Mrs. Curtis Lang',
    address : 'Apex',
  };
  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
      
  afterEach(()=> {
    consoleSpy.mockRestore();
  });



  it('pickUp', async ()=> {
    events.emit('pickup',o);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('inTransit', async ()=> {
    events.emit('in-transit',o);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('delivered', async ()=> {
    events.emit('delivered',o);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
    
});
