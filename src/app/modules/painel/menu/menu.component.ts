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
    this.nome = this.backend.user.name;
    this.email = this.backend.user.email;
    if (localStorage.getItem('token') !== `"${this.backend.user.token}"`) {
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
