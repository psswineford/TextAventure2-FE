import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public type: string = 'Knight'
  public name : string = ''
  public armorClass: number = 10
  public hitPoints: number = 20

  constructor(public uiservice: UiService, public characterService: CharacterService)
  {}

}



