import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShireComponent } from './shire/shire.component';
import { GondorComponent } from './gondor/gondor.component';
import { MordorComponent } from './mordor/mordor.component';
import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [
  { path: 'shire', component: ShireComponent },
  { path: 'gondor', component: GondorComponent },
  { path: 'mordor', component: MordorComponent },
  { path: 'offline', component: OfflineComponent },
  { path: '', redirectTo: '/shire', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
