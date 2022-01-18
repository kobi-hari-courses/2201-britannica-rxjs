import { Component } from '@angular/core';
import { from, generate, interval, Observer, of, timer } from 'rxjs';
import { bufferCount, filter, map, windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  createConsoleObserver(id: string):Observer<any> {
    return {
      next: val => console.log(`observer ${id} next: ${val}`),
      complete: () => console.log(`observer ${id} completed`),
      error: err => console.log(`observer ${id} error: ${err}`)
    }
  }

  go() {
    const obs1$ = interval(500).pipe(
        map(_ => Math.ceil(Math.random() * 10)), 
        windowCount(3, 2)
    );
    // 6 ways to create observables
    // ----------------------------
    // 1. new Observable
    // 2. interval
    // 3. timer
    // 4. of
    // 5. from
    // 6. generate

    // ways to go from "flat" observable to "second order" observable
    // 1. map with a projection method that converts each item to observable. for example: map(i => of(i))
    // 2. groupBy 
    // 3. bufferCount (Observable<Array>) or windowCount (Observable<Observable>)   


    // ways to go from "higher order observables" to "flat observables"
    // 1. mergeAll
    // 2. switchAll
    // 3. exhaustAll


    // Example:
    // A. Generate an observable of stock market
    // B. using operators, create an observable of stocks that change dramatically: stocks that either gain or lose at least 5 points


    // {appl: 3, msft: 5, amzn: 10} .... {appl: 4, msft: 6, amzn: 10} ... {appl: 6, msft: 1, amzn: 10}

    // .......................................................................msft: 6 -> 1





    



    obs1$.subscribe(this.createConsoleObserver('1'));
  }
}
