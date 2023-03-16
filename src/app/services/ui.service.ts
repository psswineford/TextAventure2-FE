import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../Data/User';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showLoginPage: boolean = true
  private showCharacterPage: boolean = false
  public username: string = ''
  public userID: number = 0
  constructor(private snackBar: MatSnackBar) { }

  //return state info 
  public getShowLoginStatus(): boolean {
    return this.showLoginPage
  }

  public getShowCharacterPageStatus(): boolean {
    return this.showCharacterPage
  }

  //update state

  public loginSuccess(user: User): void {
    this.showLoginPage = false
    this.showCharacterPage = true
    this.username = user.username
    this.userID = user.id
  }


  public showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }

}