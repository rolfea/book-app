test('it clicks the search button when the enter key is pressed', () => {
  // document setup
  document.body.innerHTML = 
    '<h2>Enter your search term: </h2>' +
    '  <input type="text">' +
    '<button>Search</button>';
    
  const enterSearch = require('./pageEvents');
  jest.mock('./pageEvents');

  enterSearch.mockImplementation(() => {
    document.querySelector('button').click();
  });

  const pushEnter = new KeyboardEvent('keydown', { keycode: 13 });
  document.querySelector('input').dispatchEvent(pushEnter);

  expect(enterSearch).toBeCalled();
});