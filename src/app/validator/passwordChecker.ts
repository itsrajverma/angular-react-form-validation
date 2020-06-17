import { FormGroup } from '@angular/forms';


export function passwordChecker(
  password : string,
  confirmPassword : string
) {
  return (formGroup : FormGroup) => {
    const pass = formGroup.controls[password];
    const cPass = formGroup.controls[confirmPassword];

    if(pass.value !== cPass.value){
        cPass.setErrors({ mustmatch : true })
    }else{
      cPass.setErrors(null);
    }


  }
}
