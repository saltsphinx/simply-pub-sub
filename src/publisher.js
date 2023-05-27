function Publisher(mainFnc) {
  if (typeof mainFnc != 'function') throw new Error(`Parameter passed to publisher isn\' a function! ${mainFnc}`);
  const subscribers = {};

  function subscribe(subName, fnc) {
    if (typeof subName != 'string') throw new Error('First parameter of subscribe method must be a string!')
    if (typeof fnc != 'function') throw new Error('Second parameter of subscribe method must be a function!')

    subscribers[subName] = fnc;
  }

  function unsubscribe(subName) {
    if (!subscribers[subName]) return console.log(`${subName} subscriber doesn't exist`);
    delete subscribers[subName];
  }

  function unsubscribeAll() {
    Object.keys(subscribers).forEach((subName) => unsubscribe(subName));
  }

  function publish(...args) {
    const result = mainFnc(...args);

    for (const subName in subscribers) {
      subscribers[subName](result)
    }
  }

  publish.subscribers = subscribers;
  publish.subscribe = subscribe;
  publish.unsubscribe = unsubscribe;
  publish.unsubscribeAll = unsubscribeAll;
  publish.mainFunction = mainFnc
  return publish;
}

module.exports = Publisher;