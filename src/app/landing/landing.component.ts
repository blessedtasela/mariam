import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    IconsModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent {
  whatsappLink: string;

  constructor() {
    const phoneNumber = '+2349031628889';
    const message = encodeURIComponent("Hi, I would like to...");
    this.whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  }

  openWhatsapp() {

  }
}
