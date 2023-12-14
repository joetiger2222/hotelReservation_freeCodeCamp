import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/customValidator';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService
  ) {}
  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl('', Validators.required),
      guiestEmail: new FormControl('', [Validators.required, Validators.email,CustomValidator.validateName]),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmound: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      address: this.fb.group({
        guestAddress: new FormControl(''),
        guestCity: new FormControl(''),
        guestState: new FormControl(''),
        guestCountry: new FormControl(''),
        guestZipCode: new FormControl(''),
        guestCount: new FormControl(''),
      }),

      guests: this.fb.array([
        this.fb.group({ guestName: [''], age: new FormControl('') }),
      ]),
    });
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }

  deleteGuest(index: number) {
    this.guests.removeAt(index);
  }

  addBooking() {
    console.log(this.bookingForm);
    this.bookingService
      .bookRoom(this.bookingForm.getRawValue())
      .subscribe((data) => {
        console.log(data)
      });
    // this.bookingForm.reset({
    //   roomId:'' ,
    //   guiestEmail:'' ,
    //   checkinDate: '',
    //   checkoutDate: '',
    //   bookingStatus:'',
    //   bookingAmound: '',
    //   bookingDate: '',
    //   mobileNumber: '',
    //   guestName:'' ,
    //   address: this.fb.group({
    //     guestAddress: '',
    //     guestCity: '',
    //     guestState: '',
    //     guestCountry:'',
    //     guestZipCode:'' ,
    //     guestCount:'',
    //   }),

    //   guests: [],

    // })
  }
}
