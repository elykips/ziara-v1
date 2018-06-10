import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AgentsComponent } from './agents/agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { InsightsComponent } from './insights/insights.component';
import { MyAgentsComponent } from './my-agents/my-agents.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agent',
        component: AgentDetailsComponent,
        data: {
          title: 'Agent Details'
        }
      },
      {
        path: 'agents',
        component: AgentsComponent,
        data: {
          title: 'Agents'
        }
      },
      {
        path: 'my-agents',
        component: MyAgentsComponent,
        data: {
          title: 'My Agents'
        }
      },
      {
        path: 'insights',
        component: InsightsComponent,
        data: {
          title: 'Insights'
        }
      },
      {
        path: 'social-media',
        component: SocialMediaComponent,
        data: {
          title: 'Social Media'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MarketPlaceRoutingModule {}
