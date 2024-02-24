import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  packages = [
    {
      'id': 1,
      'package': 'One month 5 hours per week',
      'imgLink': '../../assets/files/icon-4.jfif',
      'description': 'The package for hiring a Virtual Assistant ' +
        'in terms of how many hours she work per day and the monthly ' +
        'payment at the end of the day. But in a case where there will be ' +
        'a specific task to be given , you can send an email for further discussion',
      'price': 50
    },
    {
      'id': 2,
      'package': 'One month 10 hours per week',
      'imgLink': '../../assets/files/icon-2.jfif',
      'description': 'The package for hiring a Virtual Assistant ' +
        'in terms of how many hours she work per day and the monthly ' +
        'payment at the end of the day. But in a case where there will be ' +
        'a specific task to be given , you can send an email for further discussion',
      'price': 70
    },
    {
      'id': 3,
      'package': 'Three months 5 hours per week',
      'imgLink': '../../assets/files/icon-1.webp',
      'description': 'The package for hiring a Virtual Assistant ' +
        'in terms of how many hours she work per day and the monthly ' +
        'payment at the end of the day. But in a case where there will be ' +
        'a specific task to be given , you can send an email for further discussion',
      'price': 150
    },
    {
      'id': 4,
      'package': 'Three months 10 hours per week',
      'imgLink': '../../assets/files/icon-3.jfif',
      'description': 'The package for hiring a Virtual Assistant ' +
        'in terms of how many hours she work per day and the monthly ' +
        'payment at the end of the day. But in a case where there will be ' +
        'a specific task to be given , you can send an email for further discussion',
      'price': 250
    }
  ]
  constructor() { }
}
