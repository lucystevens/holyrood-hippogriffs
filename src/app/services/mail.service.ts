import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email, ServerResponse } from '../domain/data-definitions';
import { name } from '../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailerUrl = "https://mailer.lukestevens.co.uk";

  constructor(private http: HttpClient) { }

  getSiteKey() : Observable<ServerResponse<string>>{
    return this.http.get<ServerResponse<string>>(this.mailerUrl + "/sitekey/" + name);
  }

  getApplication() : string {
    return name;
  }

  getAction() : string {
    return name.replace(/\W/g, "");
  }

  sendContactForm(email : Email) : Observable<ServerResponse<string>> {
    email.application = name;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<ServerResponse<string>>(this.mailerUrl + "/mail", JSON.stringify(email));  
  }
}
