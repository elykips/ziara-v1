import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencesComponent } from './experiences/experiences.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ProvidersComponent } from './providers/providers.component';
import { SeekersComponent } from './seekers/seekers.component';
import { HomeComponent } from './home/home.component';


// const routes: Routes = [
//   {
//     path: '',
//      component: ExperiencesComponent,
//     data: {
//       title: 'experiences'
//     },    
//   },
//   {
//     path: '',
//      component: HowItWorksComponent,
//     data: {
//       title: 'How It Works'
//     },    
//   },
//   {
//     path: '',
//      component: ProvidersComponent,
//     data: {
//       title: 'Providers'
//     },    
//   },
//   {
//     path: '',
//      component: SeekersComponent,
//     data: {
//       title: 'Providers'
//     },    
//   },
// ];

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'experiences',
        component: ExperiencesComponent,
        data: {
          title: 'Experiences'
        }
      },
      {
        path: 'how-it-works',
        component: HowItWorksComponent,
        data: {
          title: 'How It Works'
        }
      },
      {
        path: 'providers',
        component: ProvidersComponent,
        data: {
          title: 'Providers'
        }
      },
      {
        path: 'seekers',
        component: SeekersComponent,
        data: {
          title: 'Seekers'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})

export class GuestRoutingModule { }
