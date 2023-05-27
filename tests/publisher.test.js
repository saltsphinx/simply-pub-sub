const Publisher = require('../src/publisher.js');
// let testPub;

// beforeEach(() => {
//   testPub = Publisher();
// });

it('adds subscribers to subscriber list', () => {
  const testPub = Publisher();
  const testFnc = () => {};
  testPub.subscribe('testFnc', testFnc);

  expect(testPub).toHaveProperty('testFnc', testFnc);
});

it('calls main function', () => {
  let data;
  const mainFnc = () => { data = 'lama' };
  const testPub = Publisher(mainFnc);
  testPub();

  expect(data).toBe('lama');
});

it('calls subscriber', () => {
  let data;
  const mainFnc = () => 'lama';
  const testSub = (arg) => { data = arg };
  const testPub = Publisher(mainFnc);
  
  testPub.subscribe('testSub', testSub);
  testPub();

  expect(data).toBe('lama');
});