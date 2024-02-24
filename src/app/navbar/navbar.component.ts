import { Component, ElementRef } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { LandingComponent } from "../landing/landing.component";
import { PackagesComponent } from "../packages/packages.component";
import { ContactComponent } from "../contact/contact.component";
import { ServicesComponent } from "../services/services.component";
import { FooterComponent } from "../footer/footer.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { WorksComponent } from "../works/works.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    animations: [
        trigger('fadeInOut', [
            state('void', style({
                opacity: 0
            })),
            transition('void => *', [
                style({ opacity: 0 }),
                animate(400, style({ opacity: 1 }))
            ]),
            transition('* => void', [
                style({ opacity: 1 }),
                animate(400, style({ opacity: 0 }))
            ])
        ])
    ],
    imports: [
        IconsModule,
        CommonModule,
        RouterModule,
        NavbarComponent,
        LandingComponent,
        PackagesComponent,
        ContactComponent,
        ServicesComponent,
        FooterComponent,
        TestimonialsComponent,
        WorksComponent
    ]
})

export class NavbarComponent {
  menuOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  scrollToComponent(componentId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  sendEmail(): void {
    const emailAddress = 'Mariamisiaka96@gmail.com';
    const subject = 'Book a call';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  }
}
