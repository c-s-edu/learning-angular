import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent implements OnInit {
  title: string = 'Available courses';
  courses = [
    {
      id: 1,
      title: 'Intro to Angular',
      description: 'Learn the basics',
      price: 69.69,
      date: '2025-06-06',
      soldout: true,
      onsale: true,
      img: 'Picture1.jpg',
    },
    {
      id: 2,
      title: 'Angular Intermediate',
      description: 'Getting going',
      price: 125,
      date: '2025-07-06',
      soldout: false,
      onsale: false,
      img: 'Picture1.jpg',
    },
    {
      id: 3,
      title: 'Advanced Angular',
      description: 'Advanced Angular practices',
      price: 225,
      date: '2025-06-06',
      soldout: false,
      onsale: true,
      img: 'Picture1.jpg',
    },
  ];

  ngOnInit(): void {
    console.log('CoursesList initialised');
  }
  viewDetails(title: string): void {
    alert(`Viewing details for ${title}.`);
  }
}
