import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    IconsModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      'id': 1,
      'name': 'Joy Alofokhai',
      'imgLink': '../../assets/files/joy.jpeg',
      'testimonial': 'As a client, working with Mariam has been an absolute pleasure. Her professionalism, ' +
        'expertise, and dedication to her craft are truly remarkable. Mariam consistently provides the best and ' +
        'most efficient service, going above and beyond to ensure that my needs are not just met, but exceeded. ' +
        'Her attention to detail and ability to understand and anticipate my requirements have made every ' +
        'interaction with her a positive and productive experience. Mariam\'s commitment to delivering exceptional ' +
        'results is evident in her work ethic and the quality of her output. I can confidently say that Mariam is ' +
        'not only good at what she does - she\'s exceptional. I highly recommend Mariam for her outstanding skills, ' +
        'reliability, and unwavering commitment to excellence.',
      'rating': 5
    },
    {
      'id': 2,
      'name': 'Jennifer Ochada',
      'imgLink': '../../assets/files/jeniffer.jpeg',
      'testimonial': 'I\'ve had the pleasure of working with Mariam, and I must say, she\'s excellent. ' +
        'Not only is she a great community manager, but she\'s also a wonderful team leader. Working with ' +
        'Mariam has been a smooth and professional experience, and I would gladly collaborate with her ' +
        'again in the future',
      'rating': 4.5
    },
    {
      'id': 3,
      'name': 'Williams Soduke',
      'imgLink': '../../assets/files/williams.jpeg',
      'testimonial': 'Working with Mariam has been an absolute pleasure. Her dedication, professionalism, ' +
        'and expertise are truly commendable. Mariam not only excels at what she does but also goes above and ' +
        'beyond to ensure the success of every project. Her attention to detail and ability to understand client ' +
        'needs make her a valuable asset to any team. I assure you, collaborating with her is nothing short of' +
        'amazing. I highly recommend Mariam for her exceptional skills and unwavering commitment to excellence.',
      'rating': 4.9
    },
  ]
  constructor() { }
}
