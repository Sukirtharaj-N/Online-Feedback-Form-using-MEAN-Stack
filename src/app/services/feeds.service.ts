import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedData } from '../models/feed-data.model';

const baseurl = 'http://localhost:3100/api/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private http: HttpClient) { }


  create(data:FeedData): Observable<FeedData> {
    return this.http.post(baseurl,data);

  }

  getAll(): Observable<FeedData[]> {
    return this.http.get<FeedData[]>(baseurl);
  }
 
  getid(id:string): Observable<FeedData[]> {
    return this.http.get<FeedData[]>(baseurl+"/"+id);
  }
}


