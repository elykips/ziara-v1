
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

// import { ChangeLogComponent } from './changelog/changelog.component';
// import { FullLayoutPageComponent } from './pages/full-layout-page/full-layout-page.component';
// import { ContentLayoutPageComponent } from './pages/content-layout-page/content-layout-page.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { SigninComponent } from './auth/signin/signin.component';

import * as $ from 'jquery';
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
        SharedModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }