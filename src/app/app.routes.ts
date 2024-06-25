import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./components/views/home/home.component'),
        // children:[
        //     {
                
        //     }
        // ]
    }
];
