import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  default as Swiper,
  default as SwiperCore,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination
} from 'swiper';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio__container', {
      cssMode: true,
      // mousewheel: true,
      // keyboard: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        // clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {}
}
