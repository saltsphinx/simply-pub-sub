const Event = require('../src/event.js');
let testEvent;

beforeEach(() => {
  testEvent = Event();
})

it('adds subscribers to subscriber list', () => {
  const testFnc = () => {};
  testEvent.subscribe('testFnc', testFnc);

  expect(testEvent.subscribers).toHaveProperty('testFnc', testFnc);
});

it('removes subscribers from subscriber list', () => {
  const testFnc = () => {};
  testEvent.subscribe('testFnc', testFnc);
  testEvent.unsubscribe('testFnc');

  expect(testEvent).not.toHaveProperty('testFnc');
});

it('removes all subscribers', () => {
  const testFnc0 = () => {};
  const testFnc1 = () => {};
  testEvent.subscribe('testFnc0', testFnc0);
  testEvent.subscribe('testFnc1', testFnc1);
  testEvent.unsubscribeAll();

  expect(Object.keys(testEvent.subscribers).length).toBe(0);
});

it('calls subscriber', () => {
  let data;
  const testSub = (arg) => { data = arg };

  testEvent.subscribe('testSub', testSub);
  testEvent('lama');

  expect(data).toBe('lama');
});