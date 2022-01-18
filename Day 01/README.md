# Day 01 - RxJS Intro in depth

## The internals of observables
* We saw how to create observers
* We saw how to create observable using the `interval` method
* We saw how to create custom observable using the `Observable` constructor
* We understood the difference between Hot and cold observable

## Subjects
* We learned that a Subject is at the same time an observer and an observable
* We saw that it can be used as a **Hot Observable** because it shares the events with all the observers equally
* We saw that it can therefore be used as a hub 
* We learned about the `BehaviorSubject` type, and understood that it caches the latest value it receives
* We learned that it is a **Warm** Observable because it is a hot observable with one "cold" exception - the event dedicated to each observer
* We saw the `ReplaySubject` and understood that it can cache values either by count or by time

## Fully async development
* We saw how to create reactive services - services that expose their state only as observable
* We saw how to hide implementation details by using the `asObservable` operator that creates a proxy to a subject, of type `Observable`
* We saw the memory leak caused by subscribing to a global observable withut unsubscribing, and we saw how to unsubscribe using the `OnDestroy` lifecycle hook
* We saw how to use the `async pipe` as an alternative to `unsubscribe`

## Caching
* We saw that the `HttpClient` observables are cold
  * They do not cause any network request before they are subscribed to
  * In fact - they perform a new request per subscription
* We saw that we can cache their value by using a subject as proxy
  * But - we also saw that late subscribers do not get the cached value because they "miss the show"
* We tried to use a `BehaviorSubject` instead but it also did not work
  * We saw that the reason it did not work is that the source observable is finite, and when it completes, the behavior subject caches the "complete" event instead of the latest "next"
* Finally we saw that `ReplaySubject(1)` solves the problem and caches properly
