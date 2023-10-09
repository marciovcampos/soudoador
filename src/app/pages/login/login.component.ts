import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { SnackbarService } from 'src/app/shared/snackbar.service';
import { markFormGroupTouched } from 'src/app/shared/form-functions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public service: FirebaseService,
    private snackbarService: SnackbarService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        await this.service.signIn(email, password);
        this.snackbarService.show('Usuário logado com sucesso!');
      } catch (error) {
        console.error('Usuário ou senha invalidos: ', error);
        this.snackbarService.show('Usuário ou senha inválidos!');
      }
    } else {
      markFormGroupTouched(this.loginForm);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }
}
