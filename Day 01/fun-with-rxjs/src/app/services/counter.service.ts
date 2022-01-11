import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private value: number = 0;
  private value$ = new BehaviorSubject<number>(this.value);

  constructor() { }

  getValue(): Observable<number> {
    return this.value$.asObservable();
  }

  increment() {
    this.value++;
    this.value$.next(this.value);
  }

  decrement() {
    this.value--;
    this.value$.next(this.value);
  }
}
