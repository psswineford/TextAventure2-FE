import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../Data/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public username: string = ''
  public userID: number = 0

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  //update state

  public setLoginPage(): void {
    this.router.navigate(["/"])
  }

  public setRegisterPage(): void {
    this.router.navigate(["/register"])
  }

  public loginSuccess(user: User): void {
    this.router.navigate(["/character"])
    this.username = user.username
    this.userID = user.id
  }

  public setAddCharacterPage(): void {
    this.router.navigate(["/add-character"])
  }

  public setShowCharacterPage(): void {
    this.router.navigate(["/character"])
  }

  public setCurrentRoomPage(): void {
    this.router.navigate(["/current-room"])
  }


  public showError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 2000
    })
  }

}
