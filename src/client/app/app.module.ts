import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { LoginModule } from './login/login.module';
import { WorkplaceModule } from './workplace/workplace.module';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AdminRole } from './roles/admin-role';
import { UserRole } from './roles/user-role';


@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, LoginModule, WorkplaceModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    CookieService,
    UserService,
    AuthService,
    AdminRole,
    UserRole
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
