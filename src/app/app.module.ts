import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './emailValidator/email-validator.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';



function initFactory(initService:InitService){
  return ()=>initService.init();
}





@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HeaderModule
  ],
  providers: [
    {
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG,
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:RequestInterceptor,
    multi:true
  },
  {
    provide : APP_INITIALIZER,
    useFactory:initFactory,
    deps:[InitService],
    multi:true
  }
],

  bootstrap: [AppComponent]
})
export class AppModule { }
