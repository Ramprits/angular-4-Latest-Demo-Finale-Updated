import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    UserComponent,
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule {

}