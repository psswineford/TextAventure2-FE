import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Data/Character';
import { Room } from 'src/app/Data/Room';
import { CharacterService } from 'src/app/services/character.service';
import { RoomService } from 'src/app/services/room.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  currentRoom: Room = {
    id: 0,
    name: '',
    description: '',
    roomNumber: 1,
    option1Text: '',
    option2Text: '',
    option3Text: '',
    option1Num: 0,
    option2Num: 0,
    option3Num: 0,
  }

  currentCharacter: Character = {
    id: 0,
    type: '',
    name: '',
    armorClass: 10,
    hitPoints: 20,
    currentRoom: 0,
    hasRing: false,
    hasJewel: false,
    hasSword: false,
  }

  constructor(public uiservice: UiService, public roomService: RoomService, public characterService: CharacterService) {

  }

  ngOnInit(): void {
    this.currentRoom = this.roomService.returnCurrentRoom()
    this.currentCharacter = this.characterService.returnSelectedCharacter()

  }


  checkSelectedOption(optionNumber: number): void {

    if (optionNumber == 5) {
      this.uiservice.showError('you got the Ring!')
      this.currentCharacter.hasRing = true
      this.characterService.updateCharacter(this.currentCharacter.id, this.currentCharacter.type, this.currentCharacter.name, this.currentCharacter.armorClass, this.currentCharacter.hitPoints, this.currentCharacter.hasJewel, true, this.currentCharacter.hasSword)
    }

    if (optionNumber == 9) {
      console.log(this.currentCharacter.id)
      this.uiservice.showError('you got the Jewel!')
      this.currentCharacter.hasJewel = true
      this.characterService.updateCharacter(this.currentCharacter.id, this.currentCharacter.type, this.currentCharacter.name, this.currentCharacter.armorClass, this.currentCharacter.hitPoints, true, this.currentCharacter.hasRing, this.currentCharacter.hasSword)
    }
    if (optionNumber == 12) {
      this.uiservice.showError('you got the Sword!')
      this.currentCharacter.hasSword = true
      this.characterService.updateCharacter(this.currentCharacter.id, this.currentCharacter.type, this.currentCharacter.name, this.currentCharacter.armorClass, this.currentCharacter.hitPoints, this.currentCharacter.hasJewel, this.currentCharacter.hasRing, true)
    }
     this.roomService.updateCurrentRoom(optionNumber);
     this.currentRoom = this.roomService.returnCurrentRoom();
  }
}
