import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { WorkComponent } from './Components/work/work.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'work',
        component: WorkComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
