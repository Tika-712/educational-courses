import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BookshopComponent } from './bookshop/bookshop.component';
import { BooksignupComponent } from './booksignup/booksignup.component';
import { EnglishlgComponent } from './englishlg/englishlg.component';
import { ServiceComponent } from './service/service.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent  },
    { path: 'signup', component: SignUpComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'about' , component: AboutComponent},
    { path: '', component: HomeComponent},
    { path: 'bookshop', component:BookshopComponent},
    { path: 'booksignup', component:BooksignupComponent},
    {path: 'englishlg', component:EnglishlgComponent},
    {path: 'service/:id', component:ServiceComponent}

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}

