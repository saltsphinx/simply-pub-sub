# simply-pub-sub
A simple pub/sub system. Pass the publisher factory your main function, and use the return function in its place. Use it's methods to subscribe and unsubscribe other functions, and it's as simple as that.

# API
## Publisher
Publisher(mainFnc) -> publish()
- A factory that returns a publish function, who has several methods and custom properties attached to it.
- Returns publish function, read below about functionality.
- Terminates program if no function is passed.

subscribe(subName, fnc)
- adds function to subscribers object with the key subName.
- Terminates program if none string function are passed as arguments.

unsubscribe(subName)
- removes a subscriber from the subscribers object.

unsubscribeAll()
- removes all subscribers from the subscribers object.
- it iterates the subcribers object, calling unsubscribe on all properties.

publish(...args)
- calls and stores result of the main function, passing it args. Calls all subscribers with the result.
- is returned from Publisher factory.
- has all of the above methods and the below properties as properties.

subscribers
- an object containing all the functions subscribed to publisher.

mainFunction
- the function passed to Publisher factory.