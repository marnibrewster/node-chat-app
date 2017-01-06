const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  //should reject non-string values (number)
  it('should reject non-string values', () => {
    var nonString = 43434322;
    var response = isRealString(nonString);
    expect(response).toBe(false);
  });
  //should reject string with only space
  it('should verify that an empty string is invalid', () => {
    var emptyString = '     ';
    var response = isRealString(emptyString);
    expect(response).toBe(false);
  });

  //should allow string with non-space characters
  it('should allow string with non-space characters', () => {
    var validString = 'room 34';
    var response = isRealString(validString);
    expect(response).toBe(true);
  })
})
