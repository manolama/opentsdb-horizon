/**
 * This file is part of OpenTSDB.
 * Copyright (C) 2021  Yahoo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'd', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'snap', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'main', loadChildren: 'app/landing-page/landing-page.module#LandingPageModule' },
  { path: 'a', loadChildren: 'app/alerts/alerts.module#AlertsModule' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'namespace', loadChildren: 'app/namespace/namespace.module#NamespaceModule' },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
