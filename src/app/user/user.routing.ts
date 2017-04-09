import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";

export const UserRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

