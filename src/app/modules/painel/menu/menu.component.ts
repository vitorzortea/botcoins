import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/backend/serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
  public nome: string;
  public email: string;

  constructor(
    private router: Router,
    private backend: ServeService,
  ) { }

  ngOnInit() {
    this.nome = this.backend.userSelect.name;
    this.email = this.backend.userSelect.email;
    // tslint:disable-next-line: max-line-length
    if (this.backend.userSelect.token !== 'eyJhbGciOiJIUzI4MDczN2U5ZTdkMjkxNDZkNGQiLCJpYXQiOjE1ODIzMDE2MDAsImV4cCI6MTU4MjMwNTIwMH0.C7gw_JGADpsoBY4TeZMa3ecxbvyNwLTh1KATcKJp84Q') {
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.backend.userSelect._id = '';
    this.backend.userSelect.name = '';
    this.backend.userSelect.email = '';
    this.backend.userSelect.user = '';
    this.backend.userSelect.password = '';
    this.backend.userSelect.token = '';
    this.router.navigate(['/']);
  }

}
