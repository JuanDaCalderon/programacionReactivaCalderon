import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccessService } from 'src/app/services/access.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit, OnDestroy {
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  loginForm: FormGroup;
  isLoading: boolean = false;
  loginSub: Subscription

  constructor(private router: Router, private loginService: AccessService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'remeber': new FormControl(true)
    });
  }

  onSubmit() {
    this.isLoading = true;
    let user = { email: this.loginForm?.value.email, password: this.loginForm?.value.password };
    this.loginSub = this.loginService.login(user)
      .subscribe({
        next: (response) => {
          if (typeof response === 'object') {
            this.toastr.success('Has iniciado sesión correctamente');
            setTimeout(() => {
              this.router.navigate(['/alumnos']);
            }, 1000);
          }
          else {
            this.toastr.error(response);
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.toastr.error(error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }
}
