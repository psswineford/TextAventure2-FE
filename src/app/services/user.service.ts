import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../Data/User';
import { UiService } from './ui.service';
import { Subject } from 'rxjs';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService) { }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  public tryLogin(username: string, password: string) {
    this.http.get<User>(this.BASEURL + `/User/login?username=${username}&password=${password}`)
    .subscribe({
      next: user => {
        this.service.loginSuccess(user)
        this.isAuthenticated = true
        this.authStatusListener.next(true);
      },
      error: err => {
        this.service.showError('Server unresponsive')
      }
    })
  }

  public registerUser(username: string, password: string): void {
    this.http.post<User>( this.BASEURL + `/User`, {
      username,
      password
    }).subscribe({
        next: user => {
          this.service.showError('Succesfully Added, Please Login')
          this.service.setLoginPage()
        },
        error: err => {
          this.service.showError(err + 'Unable to register user')
        }
      })
  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.service.setLoginPage();
  }
}
