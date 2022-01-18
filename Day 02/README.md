# Day 2 - Reactive operators

## Temperature changing operators
* We have seen how to cache a cold observable and broadcast the same events to all observers using `Subject` as a hub. 
* We saw that we can use `BehaviorSubject` to cache the latest value, but when the source observable completes, so does the behavior subject, and new observers do not get the cached value
* We saw that `ReplaySubject(1)` best serves as caching tool because 
  * It does not require initial value and can wait until a value actually arrive
  * It repeats the last value before complete when it replays the buffered history
* We saw that we can use the `multicast` operator to place a subject in front of a cold observable, effectivly "heating" the observable
* We saw that `multicast` returns a `ConnectableObservable` which we can connect to the source observable using the `connect` method
* We saw that the `connect` method returns a `Subscription` so we can also unsubscribe it from the source cold observable
* We saw that we can use `publish`, `publishBehavior` and `publishReplay` as a replacement for multicast where the operators create the subjects themselves.
* We saw that we can use `refCount` to connect and disconnect the subject to the source observable automatically depending on the number of subscriptions to the result observable
* We used `share` and `shareReplay` as a replacement for `publish` and `refCount`
* We saw that `shareReplay` allows us to define if the disconnect from the source observable when subscription counter goes down to 0.

## Factory operators
* We saw that we can capsule a value inside an observable using the `of` function
* We saw that we can provide it with more than one value
* We saw that we can use the `from` factory function to convert another higher order construct into an observable.
  * Promises
  * Arrays
  * Other observables
* We saw that `timer` is a factory that acts like `interval` but adds some features
  * You can create an initial delay before the first event
  * You can create a finite observable by supplying only the initial delay, and then the observable will complete after one event
* We saw the `generate` factory that acts as a **push based** `while` loop

## Higher order observables
* We defined the term **Higher order observable** as an observable of observables
* We also said that the following are considered higher order observables:
  * `Observable<Array<T>>`
  * `Observable<Promise<T>>`
* We saw that we can convert a "flat" observable to "second order" observable in many ways
  * By using `map` and mapping each atomic value into a new observable (using one of the factory methods)
  * By using `groupBy` to group all events with a common property into their own inner observable
  * By using `bufferCount` and `windowCount` to group sequential events into inner array or observable.
* We saw that we can flatten a higher order observable using the following operators
  * `mergeAll` to copy all the events of the inner observable / array / promise onto the flattened observable
  * `switchAll` to copy events from the latest inner observable / arrat / promise onto the flattened observable
  * `exhaustAll` to exaust all the events of one observable before subscribing to the next one, and ignoring intermidiate observables

## Final example
* We have created a "stock market" stream that informs us of the latest status of a collection of stocks
* We have used the operators mentioned above to convert it into an observable of "notifications" of single stocks that changed "dramatically".

## We did not have time for
* Combining operators (`combineLatest`, `withLAtestFrom`, `sample` and more)
* Aggregate operators (`reduce`, `scan`)
* Real life example: state machine using operators


