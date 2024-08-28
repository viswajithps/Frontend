import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService){}
  model: any = {};

  onSubmit() {
    // Handle form submission
    this.userService.getUserByEmail(this.model.username).subscribe((msg)=>{
      console.log(msg);
    })
  }



}
