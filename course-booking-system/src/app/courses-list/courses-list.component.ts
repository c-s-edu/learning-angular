import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCardComponent],
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

  wishlist: any[] = []; //init wishlist array

  ngOnInit(): void {
    console.log('CoursesList initialised');
  }

  onCourseBooked(course: any): void {
    //console.log('Parent heard about booking: ', course.title);
    alert(`Course booked: ${course.title}.`);
    //more?
  }

  onWishlistAdded(course: any): void {
    //console.log('Parent heard about wishlist - ', course.title);
    alert(`Course wishlisted: ${course.title}.`);
    if (!this.wishlist.includes(course)) {
      this.wishlist.push(course);
    }
    //pass into wishlist to update, or create wishlisted property?
  }
}
