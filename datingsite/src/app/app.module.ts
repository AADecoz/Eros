import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchesComponent } from './matches/matches.component';
import { DateAgePipe } from './date-age.pipe';
import { GendernamePipe } from './gendername.pipe';
import { PreferencesComponent } from './preferences/preferences.component';
import { UploadComponent } from './upload/upload.component';
import { ChatComponent } from './chat/chat.component';
import { VerifyComponent } from './verify/verify.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomescreenComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MatchesComponent,
    DateAgePipe,
    GendernamePipe,
    PreferencesComponent,
    UploadComponent,
    ChatComponent,
    VerifyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
