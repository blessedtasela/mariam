import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { PackagesComponent } from './packages/packages.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: WorksComponent },
];
