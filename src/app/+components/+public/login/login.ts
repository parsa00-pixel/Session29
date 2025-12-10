import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  userName='';
  password='';
  router=inject(Router);
  check() {
    if (this.userName=='admin'&& this.password=='admin') {
      this.router.navigateByUrl('/admin');
    }
  }

}