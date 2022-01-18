import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ConnectableObservable, interval, Observable, ReplaySubject, Subject } from 'rxjs';
import { ColorModel } from './models/color.model';
import { DataService } from './service/data.service';
import { multicast, publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  duplicates = ['X', 'X'];

  colors$: Observable<number> | null = null;

  add() {
    this.duplicates.push('X');
  }

  remove() {
    this.duplicates.splice(0, 1);
  }


  constructor(private dataService: DataService){}
  ngOnInit(): void {
  }

  go() {

    if (this.colors$ !== null) return;

    console.log('Fetching all colors');
    // const cold$ = this.dataService.getAllColors();
    const cold$ = interval(500);

    // const hot$ = new ReplaySubject<ColorModel[]>(1);
    // this.colors$ = hot$;
    // cold$.subscribe(hot$);

    // const hot$ = cold$.pipe(multicast(new ReplaySubject<ColorModel[]>(1))) as ConnectableObservable<ColorModel[]>;
    
    const hot$ = cold$.pipe(publishReplay(1), refCount());
    this.colors$ = hot$;
    // hot$.connect();

  }

}
