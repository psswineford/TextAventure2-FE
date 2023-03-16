import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
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
    this.http.get<Character[]>( this.BASEURL + `/CharacterContoller/id?id=${id}`)
      .pipe(take(1))
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
}
