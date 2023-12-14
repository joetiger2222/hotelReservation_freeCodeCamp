import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './Rooms.model';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { CofigureServiceService } from '../services/cofigure-service.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName: string = 'Hilton Hotel';
  numberOfRooms = '10';
  hideRooms = true;
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomList: RoomList[] = [];

  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error')
  });

  @ViewChild(HeaderComponent) header!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChilrenCompnent!: QueryList<HeaderComponent>;
  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private configService:CofigureServiceService
    ) {

    }

  ngAfterViewChecked(): void {
    this.header.title = 'Rooms View';
  }

  ngAfterViewInit() {
    this.headerChilrenCompnent.last.title = 'Last Title';
  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  error:string=''
  totalBytes=0
  subsribtion!:Subscription

  error$=new Subject<string>

  getError$=this.error$.asObservable()

  rooms$=this.roomsService.getRooms$.pipe(
    catchError(err=>{
      // console.log(err)
      this.error$.next(err)
      return of ([])
    })
  )


    roomsCount$=this.roomsService.getRooms$.pipe(
      map(rooms=>rooms.length)
    )






  ngOnInit() {


this.roomsService.getPhotos().subscribe(event=>{
  // console.log(data)
  switch(event.type){
    case HttpEventType.Sent:{
      console.log('request has been made')
      break;
    }
    case HttpEventType.ResponseHeader:{
      console.log('request success')
      break
    }
    case HttpEventType.DownloadProgress:{
      this.totalBytes+=event.loaded
      break;
    }
    case HttpEventType.Response:{
      console.log(event.body)
      break
    }
  }
})






    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: () => console.log('error'),
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });
    // console.log(this.header)
    // this.roomList=this.roomsService.getRooms()
  //  this.subsribtion= this.roomsService.getRooms$.subscribe((rooms) => {
  //     console.log(rooms);
  //     this.roomList = rooms;
  //   });

  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionar, Free Wi-Fi',
      price: 1000,
      photos:
        'data:image/jpeg;base64,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',
      checkinTime: new Date('14-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
      rating: 3.476576,
    };
    // this.roomList.push(room)
    // this.roomList=[...this.roomList,room]
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionar, Free Wi-Fi',
      price: 1000,
      photos:
        'data:image/jpeg;base64,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',
      checkinTime: new Date('14-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
      rating: 3.476576,
    };

    this.roomsService.editRoom(room).subscribe(data=>{
    this.roomList=data
    })

  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe(data=>{
      this.roomList=data
    })
  }


ngOnDestroy(){
  if(this.subsribtion){
    this.subsribtion.unsubscribe()
  }
}



}
