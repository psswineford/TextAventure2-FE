import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  public id: number = 0
  public type: string = ''
  public name : string = ''
  public armorClass: number = 0
  public hitPoints: number = 0

  constructor(public uiservice: UiService, public characterService: CharacterService){
    characterService.getCharacters(uiservice.userID)
  }

}
