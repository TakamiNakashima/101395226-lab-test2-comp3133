import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
  private Url = "https://api.spacexdata.com/v3/launches";

  constructor(private http: HttpClient) { }

  public allLaunch(): Observable<any> {
    return this.http.get(this.Url);
  }

  public Launch(number: number): Observable<any> {
    return this.http.get(`${this.Url}/${number}`);
  }
}