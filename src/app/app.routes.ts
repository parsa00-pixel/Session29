import { Routes } from '@angular/router';
import { Login } from './+components/+public/login/login';
import { PrivetNavigationTemplateComponent } from './+components/+privet/+templates/privet-navigation-template/privet-navigation-template.component';
import { MembersPage } from './+components/+privet/+components/members-page/members-page';
import { AgenciesPage } from './+components/+privet/+components/agencies-page/agencies-page';
import { ProductsPage } from './+components/+privet/+components/products-page/products-page';
import { SellsListPage } from './+components/+privet/+components/sells-list-page/sells-list-page';

export const routes: Routes = [
    {path:'login', component:Login},
    {path:'admin', component:PrivetNavigationTemplateComponent, children:[
        {path:'members',component:MembersPage},
        {path:'agencies',component:AgenciesPage},
        {path:'products',component:ProductsPage},
        {path:'sells',component:SellsListPage}
    ]},
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'**', redirectTo:'login'},

];
