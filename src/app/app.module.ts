import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppDataService } from './common/app-data.service';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';


import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NewEventPageComponent } from './pages/new-event-page/new-event-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';
import { EventDetailPageOrganizationComponent } from './pages/event-detail-page-organization/event-detail-page-organization.component';
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { UsersService } from './services/users.service';
import { EventService } from './services/event.service';
import { AuthService } from './common/auth.service';

import { AgmCoreModule } from '@agm/core';



const ROUTES = [
     { path: '', component: SignInPageComponent },
     { path: 'home', component: HomePageComponent,canActivate: [AuthService] },
     { path: 'newEvent', component: NewEventPageComponent,canActivate: [AuthService] },
     { path: 'eventDetail', component: EventDetailPageComponent,canActivate: [AuthService] },
     { path: 'eventDetailOrg', component: EventDetailPageOrganizationComponent,canActivate: [AuthService] },
     { path: 'eventList', component: EventListPageComponent,canActivate: [AuthService] },
     { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    PageNotFoundComponent,
    EventDetailPageComponent,
    EventListPageComponent,
    NewEventPageComponent,
    EventDetailPageOrganizationComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApphD15aEUPK6CUlQkduKgc3o3L8U0hY4'
    })
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: { apiURL: 'http://localhost:8080'}
    },
    AuthService,
    AppDataService,
    UsersService,
    EventService,
    AppConfiguration
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
