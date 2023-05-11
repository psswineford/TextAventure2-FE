import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../Data/Room';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private currentRoom: Room = {
    id: 0,
    name: '',
    description : '',
    roomNumber: 0,
    option1Text: '',
    option2Text: '',
    option3Text: '',
    option1Num: 0,
    option2Num: 0,
     option3Num: 0
  }
  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService) { }

  public returnCurrentRoom(): Room {
    return this.currentRoom
  }

  public updateCurrentRoom(roomId: number) {
    this.http.get<Room>(this.BASEURL + `/Room?roomNumber=${roomId}`)
    .subscribe({
      next: data => {
        this.currentRoom = data
        //this.returnCurrentRoom()
        this.service.setCurrentRoomPage()
        //return this.currentRoom
      },
      error: err => {
        this.service.showError(err + 'unable to set the current room')
      }
    })
  }
}

