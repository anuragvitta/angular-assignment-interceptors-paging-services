import { Ipersons } from './ipersons';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ialbums } from './ialbums';

@Injectable()
export class AlbumService {
  albums: any;
  persons: any;
  constructor(private http: HttpClient) {
   }
   getImages(start, limit)
   {
     const url = 'https://jsonplaceholder.typicode.com/photos?_start='+start+'&_limit='+limit;
      return this.http.get<Ialbums[]>(url);
   }
   getPersons(id)
   {
     const url= 'https://jsonplaceholder.typicode.com/users/'+id;
     return this.http.get<Ipersons[]>(url);
   }
}
