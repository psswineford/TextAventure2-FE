import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../Data/Character';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: Character[]  = []
  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService) { }


  public returnCharacters(): Character[] {
    return this.characters
  }

  public getCharacters(id: number) {
    this.http.get<Character[]>( this.BASEURL + `/Character/id?id=${id}`)
   
      .subscribe({
        next: data => {
          this.characters = data
          this.returnCharacters()
        },
        error: err => {
          this.service.showError( err + 'Unable to retrieve characters')
        }
      })
  }

  public createCharacter(type: string, name: string, armorClass: number, hitPoints: number) {
    this.http.post(`http://localhost:5237/api/Character/add`, {
      type,
      name,
      armorClass,
      hitPoints,
      currentRoom: 0,
      userId: this.service.userID
    }).subscribe({
        next: c => {
          this.service.setShowCharacterPage()
        },
        error: err => {
          this.service.showError(err + 'unable to create your character')
        }
      })
  }
}


