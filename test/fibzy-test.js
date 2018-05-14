const assert        = require('assert');
const fibzy         = require('../helpers/fibzy');

describe('Fibzy Testing', () => {
   it('should return an object', async() => {
       let data = await fibzy(45);
       assert(typeof data === 'object');
   });
    it('should return integers', async() => {
        let data = await fibzy(25);
        assert(data[0] === 0);
    });
   it('should reject strings', () => {
       return fibzy('blah').then(function fulfilled() {
           throw new Error('Test failed, Promise was fulfilled')
       }, function rejected(err){
           assert(err)
       });
   });
    it('should reject negative numbers', () => {
        return fibzy(-1).then(function fulfilled() {
            throw new Error('Test failed, Promise was fulfilled')
        }, function rejected(err){
            assert(err)
        });
    });
    it('should reject numbers greater than 1477', () => {
        return fibzy(1478).then(function fulfilled() {
            throw new Error('Test failed, Promise was fulfilled')
        }, function rejected(err){
            assert(err)
        });
    });
});