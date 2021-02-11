import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  productForm = this.formBuilder.group({
    name: [null, [Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]],
    quantity: [null, [Validators.required,Validators.pattern('[0-9 ]{1,3}') ]],
    price: [null, [Validators.required,Validators.pattern('[0-9 ]{1,6}') ]],
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
  }

  deleteAddress(index: number) {
    const add = this.productForm.get('deliveryAddress') as FormArray;
    add.removeAt(index);
  }

}
