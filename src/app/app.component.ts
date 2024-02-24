import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PackagesComponent } from './packages/packages.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './app.routes';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingComponent,
    NavbarComponent,
    PackagesComponent,
    ServicesComponent,
    ContactComponent,
    TestimonialsComponent,
    WorksComponent,
    FooterComponent,
    ScrollToTopComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'mariam';

  constructor(private router: Router) {
  }
}
