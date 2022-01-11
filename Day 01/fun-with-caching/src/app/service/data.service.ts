import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModel } from '../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllColors(): Observable<ColorModel[]> {
    const url = 'http://localhost:3000/colors';

    return this.http.get<ColorModel[]>(url);
  }
}
