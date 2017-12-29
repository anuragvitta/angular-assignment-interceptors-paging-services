import { SampleInterceptor } from './sample.interceptor';
import { AlbumService } from './album.service';
import { DetailsComponent } from './dashboardmodule/details/details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardmoduleModule } from './dashboardmodule/dashboardmodule.module';
import { MyhighlighterDirective } from './dashboardmodule/myhighlighter.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './dashboardmodule/welcome/welcome.component';
import { DashboardcomponentComponent } from './dashboardmodule/dashboardcomponent/dashboardcomponent.component';
import { RoutGuard } from './dashboardmodule/rout.guard';
import { AlbumComponent } from './album/album.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    DashboardmoduleModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'students', component: DashboardcomponentComponent},
      {path: 'details/:id', canActivate: [RoutGuard], component: DetailsComponent},
      {path: 'album', component: AlbumComponent},
      {path: 'person', component: PersonComponent},
      {path: '', component: WelcomeComponent},
      {path : '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [ AlbumService, {
    provide: HTTP_INTERCEPTORS,
    useClass: SampleInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
