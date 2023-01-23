import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  default as Swiper,
  default as SwiperCore,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const swiper = new Swiper('.testimonial__container', {
      // cssMode: true,
      loop: true,
      grabCursor: true,
      spaceBetween: 48,
      // mousewheel: true,
      // keyboard: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        568: {
          slidesPerView: 2,
        },
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
  }
}
