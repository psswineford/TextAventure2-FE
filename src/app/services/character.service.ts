import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../Data/Character';
import { RoomService } from './room.service';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters: Character[]  = []
  private selectedCharacter: Character = {
    id: 0,
    type: '',
    name: '',
    armorClass: 10,
    hitPoints: 20,
    currentRoom: 0,
    hasRing: true,
    hasJewel: true,
    hasSword: true,
  }
  private BASEURL: string = 'https://localhost:7263/api'
  constructor(private http: HttpClient, private service: UiService, private roomService: RoomService) { }


  public returnCharacters(): Character[] {
    return this.characters
  }

  public returnSelectedCharacter(): Character {
    return this.selectedCharacter
  }

  public getCharacters(userId: number) {
    this.http.get<Character[]>( this.BASEURL + `/Character/userId?userId=${userId}`)

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

  public getSelectedCharacter(id: number) {
    this.http.get<Character>(this.BASEURL + `/Character/id?id=${id}`)
    .subscribe({
      next: data => {
        this.selectedCharacter = data
        this.returnSelectedCharacter()
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

  public updateCharacter(id: number, type:string, name: string, armorClass: number, hitPoints: number, hasJewel: boolean, hasRing: boolean, hasSword: boolean){
    this.http.put(this.BASEURL + `/Character`, {
      id,
      type,
      name,
      armorClass,
      hitPoints,
      hasJewel,
      hasRing,
      hasSword,
      userId: this.service.userID
    })
    .subscribe({
      next: c => {
        this.getCharacters(this.service.userID)
      },
      error: err => {
        this.service.showError(err + "unable to update the character")
      }
    })
  }

}


