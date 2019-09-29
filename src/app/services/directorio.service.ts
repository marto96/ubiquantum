import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.post(`https://www.ubiquantum.com.co/ws/api.php`, {
      production: false,
      app_task: 'profiles_all',
      apiKey:'mZpU3r8EtYXTLNrPhFNw'
    });
  }
}
