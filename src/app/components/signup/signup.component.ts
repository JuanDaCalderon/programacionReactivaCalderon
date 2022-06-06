import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/services/access.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  signupForm: FormGroup;
  isLoading: boolean = false;
  constructor(private router: Router, private loginService: AccessService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'password2': new FormControl(null, Validators.required),
      'admin': new FormControl(true)
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.signupForm?.value.password !== this.signupForm?.value.password2) {
      this.toastr.error('Las contraseñas no coinciden');
      this.isLoading = false;
    }
    else{
      let user = {
        username: this.signupForm?.value.username,
        email: this.signupForm?.value.email,
        password: this.signupForm?.value.password,
        admin: this.signupForm?.value.admin,
        phone: this.signupForm?.value.phone
      };
      this.loginService.signup(user)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.toastr.success('Usuario creado correctamente');
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          this.toastr.error(error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });;
    }
  }

}
