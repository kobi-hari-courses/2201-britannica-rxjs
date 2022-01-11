import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createObserver(id: number): Observer<number> {
    return {
      next: val => console.log(`Observer ${id} next: ${val}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: err => console.log(`Observer ${id} error: ${err}`)
    }
  }

  createInterval(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);

      setTimeout(()=> observer.next(60), 2000);
      setTimeout(()=> observer.next(80), 3000);
      setTimeout(()=> observer.next(100), 4000);
      setTimeout(()=> observer.next(150), 6000);
      setTimeout(()=> observer.complete(), 8000);

    });
  }

  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(42);

    setTimeout(()=> subject.next(60), 2000);
    setTimeout(()=> subject.next(80), 3000);
    setTimeout(()=> subject.next(100), 4000);
    setTimeout(()=> subject.next(150), 6000);
    setTimeout(()=> subject.complete(), 8000);


    return subject;
  }


  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(42);

    setTimeout(()=> subject.next(60), 2000);
    setTimeout(()=> subject.next(80), 3000);
    setTimeout(()=> subject.next(100), 4000);
    setTimeout(()=> subject.next(150), 6000);
    setTimeout(()=> subject.complete(), 8000);


    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>(2);

    subject.next(42);

    setTimeout(()=> subject.next(60), 2000);
    setTimeout(()=> subject.next(80), 3000);
    setTimeout(()=> subject.next(100), 4000);
    setTimeout(()=> subject.next(150), 6000);
    setTimeout(()=> subject.complete(), 8000);


    return subject;
  }



  go() {
    let observer1 = this.createObserver(1);
    let observer2 = this.createObserver(2);

    let observable = this.createCustomReplaySubject();

    observable.subscribe(observer1);

    setTimeout(() => observable.subscribe(observer2), 3500);

  }
}
