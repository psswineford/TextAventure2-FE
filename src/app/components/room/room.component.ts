import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  public name: string = ''
  public description : string = ''
  public roomNumber: number = 1
  public option1Text: string = ''
  public option2Text: string = ''
  public option3Text: string = ''
  public option1Num: number = 0
  public option2Num: number = 0 
  public option3Num: number = 0

  constructor(public uiservice: UiService, public roomService: RoomService)
  {}

}
