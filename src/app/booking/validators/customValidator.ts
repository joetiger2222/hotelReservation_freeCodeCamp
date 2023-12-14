import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;
    if(value.includes('test')){
        return {
            invalidName:true
        }
    }
    return null
  }

//   static validateDate(control:FormGroup){
//     const checkinDate:any= new Date(control.get('checkinDate')?.value)
//     const checkoutDate:any= new Date(control.get('checkoutDate')?.value) 
//     const diffTime=(checkoutDate-checkinDate)
//     console.log(`validateDate ~ diffTime:`, diffTime)
//     const diffDays=Math.ceil(diffTime/(1000*60*60*24))
//     console.log(`validateDate ~ diffDays:`, diffDays)
//     if(diffDays<=0){
//         return {
//             invalidDate:true
//         }
//     }
//     return null
//   }


}
