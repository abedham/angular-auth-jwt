import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGardService } from "./services/auth-gard.service";
import { HomeComponent } from "./home/home.component";
import { LoggedInGuard } from "./logged-in.guard";


const routes: Routes = [
    {
        path: 'login', component: LoginComponent, canActivate: [LoggedInGuard]
    },
    {
        path: 'register', component: RegisterComponent, canActivate: [LoggedInGuard]
    },
    {
        path: 'home', component: HomeComponent, canActivate: [AuthGardService]
    },
    { path: '**', redirectTo: 'home' }
]


export default RouterModule.forRoot(routes);