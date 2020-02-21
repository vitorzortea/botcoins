import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServeService } from 'src/app/backend/serve.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.styl']
})
export class AutenticacaoComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private backEnd: ServeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setForm();
  }

  setForm(){
    this.formLogin = this.fb.group({
      login: new FormControl(''),
      senha: new FormControl('')
    });
  }

  login() {
    if (this.formLogin.value.login === this.backEnd.user.user && this.formLogin.value.senha === this.backEnd.user.password) {
      this.backEnd.userSelect = this.backEnd.user;
      this.router.navigate(['/painel']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'username or password is incorrect',
      });
    }
  }

}
