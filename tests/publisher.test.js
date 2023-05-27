const Publisher = require('../src/publisher.js');

it('adds subscribers to subscriber list', () => {
  const testPub = Publisher(() => {});
  const testFnc = () => {};
  testPub.subscribe('testFnc', testFnc);

  expect(testPub.subscribers).toHaveProperty('testFnc', testFnc);
});

it('removes subscribers to subscriber list', () => {
  const testPub = Publisher(() => {});
  const testFnc = () => {};
  testPub.subscribe('testFnc', testFnc);
  testPub.unsubscribe('testFnc');

  expect(testPub).not.toHaveProperty('testFnc');
});

it('removes all subscribers', () => {
  const testPub = Publisher(() => {});
  const testFnc0 = () => {};
  const testFnc1 = () => {};
  testPub.subscribe('testFnc0', testFnc0);
  testPub.subscribe('testFnc1', testFnc1);
  testPub.unsubscribeAll();

  expect(Object.keys(testPub.subscribers).length).toBe(0);
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