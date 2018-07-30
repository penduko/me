import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(4)]]
  });
  messageSent = false;

  constructor(
    // allows us to create a form model from configuration
    // and shortned the amount of code to create the form
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  getEmailErrorMessage() {
    return this.contactForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.contactForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }

  getMessageErrorMessage() {
    return this.contactForm.get('message').hasError('required')
      ? 'You must enter a value'
      : this.contactForm.get('message').hasError('minlength')
        ? 'You must enter a message at least 4 characters'
        : '';
  }

  sendMessage() {
    this.messageSent = true;
  }
}
