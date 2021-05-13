import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { ngdoc } from '../ng-api-doc';
import { AppComponent } from './app.component';
import { DocumentationComponent } from 'ngx-bootstrap-doc/docs';
import { LandingComponent } from 'ngx-bootstrap-doc/docs';
import { TopMenuComponent } from 'ngx-bootstrap-doc/docs';
import { DiscoverComponent } from 'ngx-bootstrap-doc/docs';
import { DocsModule } from 'ngx-bootstrap-doc/docs';
import { NgApiDoc } from 'ngx-bootstrap-doc/docs';
import { StyleManager } from './theme/style-manager';
import { ThemeStorage } from './theme/theme-storage';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { routes } from './app.routing';

@NgModule({
  declarations: [AppComponent, DocumentationComponent, TopMenuComponent, LandingComponent, DiscoverComponent],
  imports: [
    BrowserAnimationsModule,
    DocsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: environment.useHash }),
    NgxPageScrollCoreModule.forRoot({ duration: 11, scrollOffset: 70 }),
    NgxPageScrollModule,
    BsDropdownModule.forRoot(),
    ScullyLibModule
  ],
  providers: [ThemeStorage, StyleManager, { provide: NgApiDoc, useValue: ngdoc }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
