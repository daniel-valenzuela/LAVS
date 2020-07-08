import { NgModule } from '@angular/core';

import { NofoundComponent } from './nofound/nofound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';

@NgModule({
  declarations: [
    NofoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  exports: [
    NofoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ]
})

export class SharedModule { }
