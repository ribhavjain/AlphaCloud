import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './loginform/loginform.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgmCoreModule } from '@agm/core';
import { TaskFilter } from './main-dashboard/task-filter.pipe';
import { UserService } from './user.service';
import { LogService } from './log.service';
import { PlanService } from './plan.service';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanTypeService } from './plan-type.service';
import { AdminFilterPipe } from './admin/admin-filter.pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { VolunteerViewComponent } from './volunteer-view/volunteer-view.component';
import { RefugeeViewComponent } from './refugee-view/refugee-view.component';
import { SingletaskComponent } from './singletask/singletask.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PostConfirmationComponent } from './post-confirmation/post-confirmation.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  { path: 'main',
    component: MainDashboardComponent, 
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'posttask',
    component: RefugeeViewComponent
  },
  {
    path: 'task/:task_id',
    component: SingletaskComponent
  },
  {
    path: 'postconfirmation',
    component: PostConfirmationComponent
  },
  {
    path: 'volunteer-view',
    component: VolunteerViewComponent
  },
  {
    path: 'admin/analytics',
    component: AnalyticsComponent
  },
]

@NgModule({
  declarations: [
    LoginFormComponent,
    AppComponent,
    AdminComponent,
    AdminFilterPipe,
    VolunteerViewComponent,
    RefugeeViewComponent,
    SingletaskComponent,
    MainDashboardComponent,
    PostConfirmationComponent,
    TaskFilter,
    AnalyticsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    MomentModule,
    ClipboardModule,
    NgIdleKeepaliveModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  entryComponents : [
  ],
  providers: [
    LogService,
    UserService,
    PlanService,
    PlanTypeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
