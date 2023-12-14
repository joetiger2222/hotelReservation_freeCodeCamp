import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../Rooms.model';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
 @Input() rooms:RoomList[] | null=[]
 @Input() title:string=''
 @Output() roomSelected=new EventEmitter<RoomList>()


  ngOnInit(){}

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    if(changes['title']){
      this.title=changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnDestroy(): void {
    console.log('on destroy is called');
}

selectRoom(room:RoomList){
  this.roomSelected.emit(room);
}

}
