import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contacts = [
    {
      'id': 1,
      'url': 'Mariamisiaka96@gmail.com',
      'message': 'Email',
      'icon': 'mail'
    },
    {
      'id': 2,
      'url': 'https://www.facebook.com/mariam.isiaka.7771',
      'message': 'Facebook',
      'icon': 'facebook'
    },
    {
      'id': 3,
      'url': 'https://www.linkedin.com/in/mariam-isiaka-',
      'message': 'Linkedin',
      'icon': 'linkedIn'
    },
    {
      'id': 4,
      'url': 'https://x.com/MariamISIAKA0?t=JiYeU5pxmbbnsn3jdlRy9A&s=09',
      'message': 'Twitter',
      'icon': 'twitter'
    },
    {
      'id': 5,
      'url': 'https://open.substack.com/pub/isiakamariam?utm_source=share&utm_medium=android&r=1ljl0n',
      'message': 'Blog',
      'icon': 'globe'
    },
    {
      'id': 6,
      'url': 'https://wa.me/+2349031628889?text=Hi, I would like to...',
      'message': 'Whatsapp',
      'icon': 'message-circle'
    }
  ]

  constructor() { }
  openBlessedTasela() {
    window.open('https://blessed-tasela.netlify.app/', '_blank');
  }

}
