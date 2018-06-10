import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketPlaceRoutingModule } from './market-place-routing.module';

import { AgentsComponent } from './agents/agents.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { InsightsComponent } from './insights/insights.component';
import { MyAgentsComponent } from './my-agents/my-agents.component';

@NgModule({
  imports: [
    CommonModule,
    MarketPlaceRoutingModule
  ],
  declarations: [
    AgentsComponent,
    AgentDetailsComponent,
    SocialMediaComponent,
    InsightsComponent,
    MyAgentsComponent
  ]
})
export class MarketPlaceModule { }
