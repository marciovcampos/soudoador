import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, public service: FirebaseService) {
    // Inicialize o formulário com os campos e as validações
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bloodType: ['', Validators.required],
      weight: ['', [Validators.pattern('^[0-9]*$')]],
      birthday: ['', Validators.required],
      lastDonation: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  createUser() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      this.service.createUser(user);
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.controls[key];
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('name');
  }

  get bloodType() {
    return this.registrationForm.get('bloodType');
  }

  get weight() {
    return this.registrationForm.get('weight');
  }

  get birthday() {
    return this.registrationForm.get('birthday');
  }

  get lastDonation() {
    return this.registrationForm.get('lastDonation');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
}
