import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

import { LoginComponent } from './intro/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from './shared/shared.module';



import { SignComponent } from './intro/sign/sign.component';
import { AuthService } from './shared/services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';
import { BloggerModule } from './blogger/blogger.module';
import { TrendingComponent } from './blogger/dashboard/trending/trending.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { DataStorageService } from './shared/services/data-storage.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './shared/loading spinner/loading-spinner.component';
import { ToastrModule } from 'ngx-toastr';

import { DateAgoPipe } from './blogger/pipes/date-ago.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common'
import { MessagingService } from 'service/messaging.service';







@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
     LoginComponent,
     SignComponent,
     LoadingComponent,
   
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BloggerModule,
    NgxTagsInputModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TooltipModule,
    AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFireMessagingModule,
      AngularFireModule.initializeApp(environment.firebase)
    
    
    
    
    
    
    
    
  ],
  
  providers: [AuthService,AuthGuard,DataStorageService,MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
