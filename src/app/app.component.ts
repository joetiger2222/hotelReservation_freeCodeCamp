import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import {localStorageToken} from './localstorage.token'
import { InitService } from './init.service';
import { CofigureServiceService } from './services/cofigure-service.service';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'HotelInventoryApp';
  @ViewChild('name',{static:true})name!:ElementRef

  constructor(
    @Optional() private loggerService:LoggerService,
    @Inject(localStorageToken)private localStorage:any,
    private initService:InitService,
    private configureService:CofigureServiceService
  ){
    console.log(initService.config)
  }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()')
    this.name.nativeElement.innerText="Hilton Hotel"
    this.localStorage.setItem('name','Hilton Hotel')
  }


  // role='User'
  // @ViewChild('user',{read:ViewContainerRef})vcr!:ViewContainerRef
 

  // ngAfterViewInit() {
  //   this.role='Admin'
  //   const componentRef=this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms='50'
  // }




}
