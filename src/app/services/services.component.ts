import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    IconsModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  emailLink: string;

  constructor() {
    const email = 'Mariamisiaka96@gmail.com';
    const subject = encodeURIComponent("Personal Virtual Assistant");
    const body = encodeURIComponent("Hello Mariam, I would like to...");
    this.emailLink = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  openWhatsapp() {

  }
}
