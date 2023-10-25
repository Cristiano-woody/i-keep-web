import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  classInput = 'input-form';
  InvalidEmailSpanError = false;
  requiredInputsError = false;
  InvalidPasswordSpanError = false;

  userRegisterForm!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userRegisterForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  async submit() {
    this.classInput = 'input-form';
    this.InvalidEmailSpanError = false;
    this.requiredInputsError = false;
    this.InvalidPasswordSpanError = false;
    if (
      this.userRegisterForm.value.name === '' ||
      this.userRegisterForm.value.email === '' ||
      this.userRegisterForm.value.password === ''
    ) {
      this.classInput = 'input-form-error';
      this.requiredInputsError = true;
      return;
    }
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(this.userRegisterForm.value.email);
    if(!result) {
      this.InvalidEmailSpanError = true;
      this.classInput = 'input-form-error';
      return
    }
    if(this.userRegisterForm.value.password.length < 6) {
      this.InvalidPasswordSpanError = true
      return
    }
    
    this.registerService.execute(this.userRegisterForm.value).subscribe(
      () => {
        window.alert(
          'Registrado com Sucesso. Faça login para entrar no I Keep.'
        );
        this.router.navigate(['/login']);
        this.userRegisterForm = new FormGroup({
          name: new FormControl(''),
          email: new FormControl(''),
          password: new FormControl(''),
        });
      },
      (error: any) => {
        this.classInput = 'input-form-error';
        this.userRegisterForm = new FormGroup({
          name: new FormControl(''),
          email: new FormControl(''),
          password: new FormControl(''),
        });
      }
    );
  }
}
