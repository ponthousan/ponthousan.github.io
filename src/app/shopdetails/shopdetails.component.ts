import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopdetails',
  templateUrl: './shopdetails.component.html',
  styleUrls: ['./shopdetails.component.scss']
})
export class ShopdetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  shopDetailsForm: FormGroup;

  ngOnInit() {
    this.shopDetailsForm = this.fb.group({
      gstno: ['', Validators.required],
      shopname: ['', Validators.required]
    });
  }

  get f() {
    return this.shopDetailsForm.controls;
  }
  addShopDetails() {
    console.log(this.shopDetailsForm.value);
  }


}
