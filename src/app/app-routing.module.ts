import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CharacterComponent } from './components/character/character.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'add-character', component: AddCharacterComponent },
  { path: 'current-room', component: RoomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


