import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formData: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      message: new FormControl('', [Validators.required])
    })
  }

  onSubmit(contactInfo: any) {
    if (this.formData.valid) {
      console.log('form submitted');
    }
  }
}
