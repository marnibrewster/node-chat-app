var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    //call generateMessage w two values
    var from = 'Mike';
    var text = 'Meet me at lunch';
    var response = generateMessage(from, text);
    expect(response).toInclude({from, text});
    expect(response.createdAt).toBeA('number');
  });
});
describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Mike';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';
    var response = generateLocationMessage(from, latitude, longitude);
    expect(response).toInclude({from, url});
    expect(response.createdAt).toBeA('number');
    expect(response.url).toBe(`https://www.google.com/maps?q=1,1`);
  });
});
