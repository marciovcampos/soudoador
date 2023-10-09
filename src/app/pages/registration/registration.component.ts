import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { markFormGroupTouched } from 'src/app/shared/form-functions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public service: FirebaseService,
    private snackbarService: SnackbarService
  ) {
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

  async createUser() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      try {
        await this.service.signUp(user);
        this.snackbarService.show('Usuário criado com sucesso!');
      } catch (error) {
        console.error('Erro ao criar usuário: ', error);
        this.snackbarService.show('Erro ao criar usuário!');
      }
    } else {
      markFormGroupTouched(this.registrationForm);
    }
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
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
