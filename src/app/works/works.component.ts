import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {
  works = [
    {
      'id': 1,
      'url': 'https://docs.google.com/presentation/d/1hqIpDpxG6Zmh6yhBiYQ9Y5nIhIiFVVkKbNBRq_bioig/edit?usp=drivesdk',
      'imgLink': '../../assets/files/joy.jpeg',
      'description': 'Booking and travelling itenery',
      'rating': 5
    },
    {
      'id': 2,
      'url': 'https://docs.google.com/presentation/d/1hqIpDpxG6Zmh6yhBiYQ9Y5nIhIiFVVkKbNBRq_bioig/edit?usp=drivesdk',
      'imgLink': '../../assets/files/jeniffer.jpeg',
      'description': 'Research planning',
      'rating': 4.5
    },
  ]
  constructor() { }
}
