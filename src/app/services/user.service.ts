import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../Data/User';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService) { }

  public tryLogin(username: string, password: string) {
    this.http.get<User>(this.BASEURL + `/User/login?username=${username}&password=${password}`)
    .subscribe({
      next: user => {
        this.service.loginSuccess(user)
      },
      error: err => {
        this.service.showError('Server unresponsive')
      }
    })
  }
}
