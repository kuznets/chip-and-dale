import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from "../../core/local-storage.service";
import { FormValidationService } from "../../shared/services/form-validation.service";
import { CartService } from "../cart.service";
import { OrderService } from "./order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public userData: FormGroup;
  public spinnerShow: boolean = false;
  public orderStatus: boolean = false;
  private user: any;

  constructor(
    private lc: LocalStorageService,
    private cart: CartService,
    private orderService: OrderService,
    private fb: FormBuilder
  ) {
    this.userData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, FormValidationService.emailValidator]],
      city: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
    this.user = this.lc.getItem('user');
    this.cart.cartCount$.subscribe(count => {
      if(count == 0) {
        this.spinnerShow = !this.spinnerShow;
        this.orderStatus = !this.orderStatus;
      }
      return true;
    });
    if (this.user) {
      this.userData.setValue({
        name: this.user.username,
        email: this.user.email,
      })
    }
  }

  order(){
    this.spinnerShow = !this.spinnerShow;

    let cartData = this.cart.cartData,
        formData = this.userData.value,
        requestObject = {
          uid: (this.user && this.user._id ? this.user._id : cartData.uid),
          user_name: formData.name,
          user_city: formData.city,
          user_email: formData.email,
          products: [],
          price_sum: 0
        };

    cartData.products.forEach(item => {
      requestObject.products.push(`${item._id}:${item.amount_order}`);
      requestObject.price_sum += item.price * item.amount_order;
    });

    this.orderService.createOrder(requestObject).subscribe(
      res => {
        this.cart.clearCart();
      }
    );

  }
}
