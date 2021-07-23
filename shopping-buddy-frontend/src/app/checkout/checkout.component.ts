import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Extra } from 'app/Extra';
import { Register} from 'app/Register';
// import https = require('https');
// const axios = require('axios');
// import { FormBuilder, NgForm } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // checkoutForm = this.formBuilder.group({
  //   name: '',
  //   email: ''
  // });

  register: Register;
  extra: Extra;

  querySub: any;

  constructor() { }

  ngOnInit() {
    this.register = {
      isActive: false,
      _id: "",
      name: "",
      email: "",
      password: "",
      date: new Date(),
      shops: [],
      __v: 0,
    }

    this.extra = {
      conpass: ""
    }
  }

  onSubmit(f: NgForm){
    querySub = this.data.
  }

  
// if(password==rpassword){
//   https.get('https://shopping-buddy-api.herokuapp.com/api/users', (resp) => {
//   let data = '';

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });
// axios
//   .post('/users', {
//     name: name,
//     email: email,
//     password:password
//   })
//   .then((res) => {
//     console.log(`${res.statusCode}`)
//     console.log(res)
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// }else{
// //
// }

// formValidation(f: NgForm)
//   {
//     // var name = name;
//     // var email = email;
//     // var password = password;
//     // var rpassword = rpassword;
//     // console.log(name);
//     // console.log(email);
//     // console.log(password);
//     // console.log(rpassword);
//     console.log('Your order has been submitted', this.checkoutForm.value);
//     this.checkoutForm.reset(); 
//   }

}
