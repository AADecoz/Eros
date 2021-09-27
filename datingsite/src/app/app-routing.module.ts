import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from "./homescreen/homescreen.component";
import { LoginComponent} from "./login/login.component";
import { MatchesComponent } from './matches/matches.component';
import { RegisterComponent} from "./register/register.component";
import { UserGuard } from './user.guard';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: "", component: HomescreenComponent,canActivate:[UserGuard] },
  {path: "Login", component: LoginComponent},
  {path:"Register", component: RegisterComponent},
  {path:"Matches",component: MatchesComponent, canActivate:[UserGuard]},
  {path:"profile",component: ProfileComponent, canActivate:[UserGuard]},
  {path:"preferences",component: PreferencesComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
