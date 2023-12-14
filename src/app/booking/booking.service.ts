import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  bookRoom(booking:any){
   return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',booking) 
  }

}
