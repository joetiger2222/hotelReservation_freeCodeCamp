import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent {
  id: string | null = '';
  // id$=this.activatedRoute.params.pipe(map(params=>params['id']))
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id')
    })
    // this.id = this.activatedRoute.snapshot.params['id'];
    // this.activatedRoute.params.subscribe(params=>{
    //   this.id=params['id']
    // })
  }
}
