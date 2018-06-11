
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

// import { ChangeLogComponent } from './changelog/changelog.component';
// import { FullLayoutPageComponent } from './pages/full-layout-page/full-layout-page.component';
// import { ContentLayoutPageComponent } from './pages/content-layout-page/content-layout-page.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';

import * as $ from 'jquery';
import { AuthService } from './auth/auth/auth.service';
import { TourOperatorsService } from './services/tour-operators.service';

import { FormsModule } from '@angular/forms';
// import { CreateProfileWizardComponent } from './tour-operators/create-profile-wizard/create-profile-wizard.component';
// import { HomeComponent } from './home/home/home.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { MyBookingsComponent } from './bookings/my-bookings/my-bookings.component';
// import { BookingDetailsComponent } from './bookings/booking-details/booking-details.component';
// import { TourFormComponent } from './inventory/tour-form/tour-form.component';
// import { MyToursComponent } from './inventory/my-tours/my-tours.component';
// import { MyTourDetailsComponent } from './inventory/my-tour-details/my-tour-details.component';
// import { AgentsComponent } from './market-place/agents/agents.component';
// import { SocialMediaComponent } from './market-place/social-media/social-media.component';
// import { AgentDetailsComponent } from './market-place/agent-details/agent-details.component';
// import { NgForm } from '@angular/forms';


// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { ExperiencesComponent } from './guest/experiences/experiences.component';
// import { HowItWorksComponent } from './guest/how-it-works/how-it-works.component';
// import { ProvidersComponent } from './guest/providers/providers.component';
// import { SeekersComponent } from './guest/seekers/seekers.component';
// import { BusinessProfileComponent } from './tour-operators/business-profile/business-profile.component';




@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        // CreateProfileWizardComponent,
        // HomeComponent,
        // DashboardComponent,
        // MyBookingsComponent,
        // BookingDetailsComponent,
        // TourFormComponent,
        // MyToursComponent,
        // MyTourDetailsComponent,
        // AgentsComponent,
        // SocialMediaComponent,
        // AgentDetailsComponent,
    
        // ExperiencesComponent,
        // HowItWorksComponent,
        // ProvidersComponent,
        // SeekersComponent,
        // SignupComponent,
        // SigninComponent,
        // BusinessProfileComponent
        // ChangeLogComponent,
        // FullLayoutPageComponent,
        // ContentLayoutPageComponent
    ],
    imports: [
BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        SharedModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        NgbModule.forRoot()
    ],
    providers: [
        AngularFireAuth,
        AuthService,
        TourOperatorsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }