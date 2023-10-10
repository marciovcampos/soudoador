import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import {
  formatDateToDDMMYYYY,
  markFormGroupTouched,
  resetForm,
} from 'src/app/shared/form-functions';
import { User } from 'src/app/model/user';

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
      const {
        name,
        email,
        bloodType,
        weight,
        birthday,
        lastDonation,
        password,
      } = this.registrationForm.value;

      const formattedBirthday = birthday
        ? formatDateToDDMMYYYY(new Date(birthday))
        : '';
      const formattedLastDonation = lastDonation
        ? formatDateToDDMMYYYY(new Date(lastDonation))
        : '';

      const user = {
        name,
        email,
        bloodType,
        weight,
        birthday: formattedBirthday,
        lastDonation: formattedLastDonation,
        password,
      };

      try {
        await this.service.signUp(user);
        this.snackbarService.show('Usuário criado com sucesso!');
        resetForm(this.registrationForm);
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
