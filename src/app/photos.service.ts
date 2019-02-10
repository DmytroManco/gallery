import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiID = '5705da6e436f2be7674577a8e7b9e7387e416b3bdb18eb536d1f22bdb96826f2';
  apiUrl = 'https://api.unsplash.com/';

  constructor(private http: HttpClient) { }

  public getPhotos(page = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}photos?page=${page}&per_page=10&client_id=${this.apiID}`);
  }
}
