import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-private',
  templateUrl: './header-private.component.html',
  styleUrls: ['./header-private.component.css']
})
export class HeaderPrivateComponent {
  constructor(private router: Router) {}

  logOut() {
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('userId')
    window.location.reload()
  }
}
