import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.productForm.get('quantity');

    // this.productForm.get('deliveryAddress')
    // this.productForm.addControl('timeUsed', new FormControl('', Validators.required));

    
  }

  productForm : FormGroup = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]],
    quantity: [null, [Validators.required,Validators.pattern('[0-9 ]{1,3}') ]],
    price: [null, [Validators.required,Validators.pattern('[0-9 ]{1,6}') ]],
    usage: [null,Validators.required],
    passwordGroup : this.formBuilder.group({
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword: [null,Validators.required],
    },{validators:passwordMatchValidator}),
    deliveryAddress: this.formBuilder.array([
      this.addressFormGroup()
    ])
  });


  public addressFormGroup() : FormGroup{
    return this.formBuilder.group({
      city: [null, [Validators.required,Validators.pattern('[A-Za-z ]{1,10}') ]],
      state: [null, [Validators.required,Validators.pattern('[A-Za-z ]{1,10}')]],
      pincode: [null, [Validators.required, Validators.pattern("[0-9]{6}")]]
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  addAddress() {
    const add = this.productForm.get('deliveryAddress') as FormArray;
    add.push(this.addressFormGroup());

    this.productForm.get('quantity'); 
    
  }

  deleteAddress(index: number) {
    const add = this.productForm.get('deliveryAddress') as FormArray;
    add.removeAt(index);
  }

  

   newControl(event){
     console.log(event);
     
     this.productForm.get('productForm');
      if(event === 'Refurbished'){
      this.productForm.addControl('timeUsed', new FormControl(null, Validators.required));
     }
     else{
       this.productForm.get('usage').disable();
       this.productForm.removeControl('timeUsed');
     }
   }

}

export const  passwordMatchValidator : ValidatorFn = (control : AbstractControl )  : ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? { passwordMatch : true } : null ;
  
}
