import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../Data/User';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showLoginPage: boolean = true
  private showCharacterPage: boolean = false
  private showAddCharacterPage: boolean = false
  private showRegisterPage: boolean = false
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

  public getShowAddCharacterPageStatus(): boolean {
    return this.showAddCharacterPage
  }

  public getShowRegisterPageStatus(): boolean {
    return this.showRegisterPage
  }
  //update state

  public setLoginPage(): void {
    this.showLoginPage = true
    this.showRegisterPage = false
    this.showCharacterPage = false
    this.showAddCharacterPage = false
  }

  public setRegisterPage(): void {
    this.showLoginPage = false
    this.showRegisterPage = true
    this.showCharacterPage = false
    this.showAddCharacterPage = false
  }

  public loginSuccess(user: User): void {
    this.showLoginPage = false
    this.showCharacterPage = true
    this.showRegisterPage = false
    this.username = user.username
    this.userID = user.id
  }

  public setAddCharacterPage(): void {
    this.showLoginPage = false
    this.showRegisterPage = false
    this.showCharacterPage = false
    this.showAddCharacterPage = true
  }

  public setShowCharacterPage(): void {
    this.showLoginPage = false
    this.showRegisterPage = false
    this.showCharacterPage = true
    this.showAddCharacterPage = false
  }


  public showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }

}