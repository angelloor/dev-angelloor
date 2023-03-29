import { DecimalPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataService } from './services/data.service';
import { NavegationPagesService } from './services/navegation-pages.service';
import { ThemeServiceService } from './services/theme-service.service';
/**
 * PWA
 */
/**
 * PWA
 */

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  private stop$ = new Subject<void>();
  botonColores: boolean = false;
  collapsed = false;
  init = false;

  isNotFound: boolean = false;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  reachedTheEnd2!: boolean;

  public reachedTheEnd!: boolean;

  /**
   * PWA
   */
  installEvent: any = null;

  firebaseConfig = {
    apiKey: 'AIzaSyDYBI2RfvxIHz2q5ZKIDvHB8t4zwSKeDaw',
    authDomain: 'angelloor-dev.firebaseapp.com',
    projectId: 'angelloor-dev',
    storageBucket: 'angelloor-dev.appspot.com',
    messagingSenderId: '577331582161',
    appId: '1:577331582161:web:41dabddde641f0417621f0',
    measurementId: 'G-CJ4LLZ7T6D',
  };

  /**
   * PWA
   */
  @ViewChild('inicio', { static: true }) home!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('skill') skill!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('qualification') qualification!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;
  @ViewChild('project') project!: ElementRef;
  @ViewChild('testimonial') testimonial!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  title = 'scroll-page';
  seleccionado = 'Inicio';

  public estadoTheme: string = 'inicial';

  constructor(
    private readonly themeService: ThemeServiceService,
    private decimalPipe: DecimalPipe,
    private readonly _navigationPages: NavegationPagesService,
    private _dataService: DataService,
    private _swUpdate: SwUpdate,
    private router: Router
  ) {}
  ngAfterViewInit(): void {}

  verificarIdElemtHtml(): void {
    const sections = [
      this.home,
      this.about,
      this.contact,
      this.services,
      this.project,
      this.portfolio,
      this.skill,
      this.qualification,
      this.contact,
    ];
    const scrollY = window.pageYOffset;

    sections.forEach((element: ElementRef) => {
      if (element) {
        const current = element.nativeElement;
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        var sectionID = current.id;
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          this._navigationPages.seleccionado(sectionID);
        } else {
        }
      }
    });
  }
  /**
   * PWA
   */
  @HostListener('window: beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    // console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }
  /**
   * installByUser
   */
  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((rta: any) => {
        if (rta.outcome === 'accepted') {
          // console.log('User accepted the A2HS prompt');
        } else {
          // console.log('User dismissed the A2HS prompt');
        }
      });
    }
  }
  /**
   * updatePWA
   */
  updatePWA(): void {
    this._swUpdate.versionUpdates.subscribe((value) => {
      // console.log('update:', value);
      window.location.reload();
    });
  }
  /**
   * PWA
   */
  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event.url === '/') {
        if (event.url != undefined) {
          this.isNotFound = false;
        }
      } else {
        if (event.url != undefined) {
          this.isNotFound = true;
        }
      }
      // console.log();
    });
    /**
     * PWA
     */
    this.updatePWA();
    /**
     * PWA
     */
    /**
     *  queryRead *
     */
    this._dataService
      .getCharacter()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((characters: any[]) => {
        // console.log(characters);
      });

    this.changeEstadoNav();
    this.defaultColor();
    this.defaultTheme();
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.all',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(
              this.decimalPipe.transform(options.progress, '1.2-2')
            );
            this.reachedTheEnd2 = value > 0.07;
            this.reachedTheEnd = value > 0.84;
            this.verificarIdElemtHtml();
          }
        },
      },
    });
    setTimeout(() => {}, 1000);
  }

  ngOnDestroy(): void {
    this.stop();
  }

  changeEstadoNav(): void {
    this._navigationPages.pagina$
      .pipe(takeUntil(this.stop$))
      .subscribe((pagina: string) => {
        switch (pagina) {
          case 'Inicio':
            this.elemetoHtmlSeleccionado(this.home);
            break;
          case 'Acerca':
            this.elemetoHtmlSeleccionado(this.about);
            break;
          case 'Habilidades':
            this.elemetoHtmlSeleccionado(this.skill);
            break;
          case 'Servicios':
            this.elemetoHtmlSeleccionado(this.services);
            break;
          case 'Experiencia':
            this.elemetoHtmlSeleccionado(this.qualification);
            break;
          case 'Portafolio':
            this.elemetoHtmlSeleccionado(this.portfolio);
            break;
          case 'Proyecto':
            this.elemetoHtmlSeleccionado(this.project);
            break;
          case 'Testimonio':
            this.elemetoHtmlSeleccionado(this.testimonial);
            break;
          case 'Contacto':
            this.elemetoHtmlSeleccionado(this.contact);
            break;

          default:
            break;
        }
      });
  }

  defaultTheme() {
    this.themeService.setDefaultTheme();
    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }

  defaultColor(): void {
    this.themeService.setBlue();
  }

  elemetoHtmlSeleccionado(elem: ElementRef) {
    const elementoNat = elem.nativeElement;
    elementoNat.scrollIntoView({ behavior: 'smooth' });
  }

  onClick(elem: HTMLElement) {
    this._navigationPages.seleccionado('Inicio');
    elem.scrollIntoView({ behavior: 'smooth' });
  }

  public toggle(menu: HTMLElement) {
    const list = Array.prototype.slice.call(menu.children) as HTMLElement[];
    this.init = true;
    this.collapsed = !this.collapsed;

    gsap.to(menu, {
      translateY: 0,
      duration: 0.6,
    });
    this.animateElements(this.collapsed, list, menu);
  }

  private async animateElements(
    collapse: boolean,
    list: HTMLElement[],
    menu: any
  ) {
    this.botonColores = true;
    if (collapse) {
      for (let i = 0; i < list.length; i++) {
        const sliced = list.slice(i, list.length);
        gsap.to(sliced, {
          translateY: 55 * i,
          delay: 0.3 * i,
          duration: 0.6,
        });
      }
      setTimeout(() => {
        this.botonColores = false;
      }, 1000);
    } else {
      gsap
        .to(list, {
          y: 0,
          duration: 0.3,
        })
        .then(() => {
          gsap.to(menu, {
            translateY: -80,
            duration: 0.3,
          });
          this.botonColores = false;
        });
    }
  }

  colorYellow(): void {
    this.themeService.setYellow();
  }

  colorBlue(): void {
    this.themeService.setBlue();
  }

  colorGreen(): void {
    this.themeService.setGreen();
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
