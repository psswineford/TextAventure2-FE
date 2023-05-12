import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../Data/Room';
import { UiService } from './ui.service';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private currentRoom: Room [] = []
  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService) { }

  public returnCurrentRoom(): Room[] {
    return this.currentRoom
  }

  public updateCurrentRoom(roomId: number) {
    this.http.get<Room[]>(this.BASEURL + `/Room?roomNumber=${roomId}`)
    .pipe(take(1))
    .subscribe({
      next: data => {
        this.currentRoom = data
        this.service.setCurrentRoomPage()
      },
      error: err => {
        this.service.showError(err + 'unable to set the current room')
      }
    })
  }
}

