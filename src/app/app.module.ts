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
import { EventListPageComponent } from './pages/event-list-page/event-list-page.component';
import { OrganitationDetailPageComponent } from './pages/organitation-detail-page/organitation-detail-page.component';
import { VolunteerDetailPageComponent } from './pages/volunteer-detail-page/volunteer-detail-page.component';
import { UsersService } from './services/users.service';
import { EventService } from './services/event.service';
import { AuthService } from './common/auth.service';
import { VolunteerProfConf } from './pages/volunteer-prof-conf/volunteer-prof-conf.component';



const ROUTES = [
     { path: '', component: SignInPageComponent },
     { path: 'home', component: HomePageComponent,canActivate: [AuthService],data: { expectedRole: 'organitation,Volunteer'}},
     { path: 'newEvent', component: NewEventPageComponent,canActivate: [AuthService],data: { expectedRole: 'organitation'}},
     { path: 'volunteerProfConf', component: VolunteerProfConf,canActivate: [AuthService] ,data: { expectedRole: 'Volunteer'}},
     { path: 'eventDetail', component: EventDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organitation,Volunteer'}},
     { path: 'organitationDetails', component: OrganitationDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organitation,Volunteer'}},
     { path: 'volunteerDetails', component: VolunteerDetailPageComponent,canActivate: [AuthService],data: { expectedRole: 'organitation,Volunteer'}},
     { path: 'eventList', component: EventListPageComponent,canActivate: [AuthService], data: { expectedRole: 'organitation,Volunteer'}},
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
    VolunteerProfConf,
    NewEventPageComponent,
    OrganitationDetailPageComponent,
    VolunteerDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
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
