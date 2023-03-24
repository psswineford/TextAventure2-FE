import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Data/Character';
import { CharacterService } from 'src/app/services/character.service';
import { RoomService } from 'src/app/services/room.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public name: string = ''
  public description : string = ''
  public roomNumber: number = 1
  public option1Text: string = ''
  public option2Text: string = ''
  public option3Text: string = ''
  public option1Num: number = 0
  public option2Num: number = 0 
  public option3Num: number = 0

  public id: number = 0
  public type: string = ''
  public charName : string = ''
  public armorClass: number = 10
  public hitPoints: number = 20
  public hasJewel: boolean = false
  public hasRing: boolean = false
  public hasSword: boolean = false
  public currentRoom: number= 0

  currentCharacter: Character[] =  []

  constructor(public uiservice: UiService, public roomService: RoomService, public characterService: CharacterService)
  {
  }

  ngOnInit(): void {
    this.currentCharacter = this.characterService.returnSelectedCharacter()
    this.updateCharacterValues()

  }



  updateCharacterValues(): void {
    for(var item of this.currentCharacter)
    {
      this.id = item.id
      this.type = item.type
      this.charName = item.name
      this.armorClass = item.armorClass
      this.hitPoints = item.hitPoints
      this.hasJewel = item.hasJewel
      this.hasRing = item.hasRing
      this.hasSword = item.hasSword
      this.currentRoom = item.currentRoom
    }
  }

  checkSelectedOption(optionNumber: number): void {
      
       if(optionNumber == 5 )
       {
        this.uiservice.showError('you got the Ring!')
        this.hasRing = true
        this.characterService.updateCharacter(this.id, this.type, this.charName, this.armorClass, this.hitPoints, this.hasJewel, true, this.hasSword)
       }

       if(optionNumber == 9 )
       {
        console.log(this.id)
        this.uiservice.showError('you got the Jewel!')
        this.hasJewel = true
        this.characterService.updateCharacter(this.id, this.type, this.charName, this.armorClass, this.hitPoints, true, this.hasRing, this.hasSword)
       }
       if(optionNumber == 12 )
       {
        this.uiservice.showError('you got the Sword!')
        this.hasSword = true
        this.characterService.updateCharacter(this.id, this.type, this.charName, this.armorClass, this.hitPoints, this.hasJewel, this.hasRing, true)
       }
       
       
       this.roomService.updateCurrentRoom(optionNumber);

  }
}
