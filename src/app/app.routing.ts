import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommunityComponent } from './community/community.component';
import { PersonalsComponent } from './personals/personals.component';
import { HousingComponent } from './housing/housing.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';

const appRoutes: Routes = [
  {
  path: '',
  component: MainComponent
  },
  {
  path: 'community',
  component: CommunityComponent
  },
  {
  path: 'personals',
  component: PersonalsComponent
  },
  {
  path: 'housing',
  component: HousingComponent
  },
  {
  path: 'for-sale',
  component: ForSaleComponent
  },
  {
  path: 'services',
  component: ServicesComponent
  },
  {
  path: 'jobs',
  component: JobsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
