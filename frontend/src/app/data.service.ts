import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  baseUrl:string = "http://localhost:3000";
  
  constructor(private httpClient : HttpClient) { 
    
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  get_tweets(queryText,count){
    let body = {
      queryText,
      count
    }
    return this.httpClient.post(this.baseUrl+"/search",body);
  }
}