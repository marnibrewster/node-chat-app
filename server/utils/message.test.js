var expect = require('expect');

var {generateMessage} = require('./message');

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
