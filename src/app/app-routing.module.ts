import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './services/auth/auth.guard';
import { HeaderPrivateComponent } from './components/header-private/header-private.component';
import { CardTaskComponent } from './components/card-task/card-task.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderPrivateComponent,
    canActivate: [authGuard],
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: CardTaskComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
