import { Routes, RouterModule } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'content-layout',
        loadChildren: './pages/content-layout-page/content-pages.module#ContentPagesModule'
      },
    {
        path: 'auth',
        loadChildren: './auth/auth/auth.module#AuthModule'
    },
    {
        path: 'signup',
        loadChildren: './auth/signup/signup.module#SignupModule'
    },
    {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginModule'
    },
    {
        path: 'experiences',
        loadChildren: './guests/experiences/experiences.module#ExperiencesModule'
    },
    {
        path: 'how-it-works',
        loadChildren: './guests/how-it-works/how-it-works.module#HowItWorksModule'
    },
    {
        path: 'providers',
        loadChildren: './guests/providers/providers.module#ProvidersModule'
    },
    {
        path: 'seekers',
        loadChildren: './guests/seekers/seekers.module#SeekersModule'
    },
 
 
];