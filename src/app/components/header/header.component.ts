import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  characterIsSelected = false;
  private authListenerSubs: Subscription = new Subscription;
  private characterListenerSubs: Subscription = new Subscription;
  constructor(private userService: UserService, public uiService: UiService, private characterService: CharacterService){

  }


ngOnInit(): void {
  this.userIsAuthenticated = this.userService.getIsAuthenticated();
  this.authListenerSubs = this.userService.getAuthStatusListener()
  .subscribe(isAuthenticated => {
    this.userIsAuthenticated = isAuthenticated
  })

  this.characterListenerSubs = this.characterService.getCharacterSelectedListener()
  .subscribe(isSelected => {
    this.characterIsSelected = isSelected
  })

}
  onLogout() {
    this.userService.logout()
    this.characterService.updateCharacterSelectedListener();
    this.userIsAuthenticated = false;
    this.characterIsSelected = false;

  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
    this.characterListenerSubs.unsubscribe();
  }
}
