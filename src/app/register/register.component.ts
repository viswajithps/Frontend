import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,private userService: UserService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      let user = new User(Math.floor(Math.random()*200),this.registerForm.value.email,this.registerForm.value.password,this.registerForm.value.fullName,this.registerForm.value.mobileNumber);
      this.userService.createUser(user).subscribe((a)=>console.log(a))
      // Here you would typically handle form submission, e.g., send data to a server
    }
  }
}
