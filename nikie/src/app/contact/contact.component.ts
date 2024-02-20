import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  housingService = new HousingService();

  contactForm = new FormGroup({
     name : new FormControl(),
     email:new FormControl(),
     phone: new FormControl(),
     message: new FormControl()
  })
 
  onSubmit(){
     try{
         let custNameCtr = this.contactForm.get("name");
         let emailCtr = this.contactForm.get("email");
         let phoneCtr = this.contactForm.get("phone");
         let messageCtr = this.contactForm.get("message");
            console.log(custNameCtr!.value);

          this.housingService.submitApplication(custNameCtr!.value,phoneCtr!.value,emailCtr!.value);

           
     }
     catch(error){
       console.log("Error: " + error);
     }
  }
}
