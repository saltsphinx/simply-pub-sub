function Event() {
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

  function event(...args) {
    for (const subName in subscribers) {
      subscribers[subName](...args)
    }
  }

  event.subscribers = subscribers;
  event.subscribe = subscribe;
  event.unsubscribe = unsubscribe;
  event.unsubscribeAll = unsubscribeAll;
  return event;
}

module.exports = Event;