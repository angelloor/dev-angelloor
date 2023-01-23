import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavegationPagesService } from 'src/app/services/navegation-pages.service';
import { ThemeServiceService } from 'src/app/services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private stop$ = new Subject<void>();
  public showMenu: boolean = false;
  public estadoTheme: string = 'inicial';
  public seleccionado: string = 'Inicio';

  public darkmode: boolean = false;

  installEvent: any = null;

  public itemsMenu = [
    {
      nombre: 'Inicio',
      icono: 'iconsminds-shop-4',
      ruta: 'inicio',
      installApp: false,
    },
    {
      nombre: 'Acerca',
      icono: 'iconsminds-administrator',
      ruta: 'app/portafolio/acerca',
      // installApp: false
    },
    // {
    //   nombre: 'Habilidades',
    //   icono: 'iconsminds-file-clipboard-file---text',
    //   ruta: 'app/portafolio/habilidades',
    // installApp: false
    // },
    // {
    //   nombre: 'Servicios',
    //   icono: 'iconsminds-handshake',
    //   ruta: 'app/portafolio/servicios',
    // installApp: false
    // },
    // {
    //   nombre: 'Experiencia',
    //   icono: 'iconsminds-suitcase',
    //   ruta: 'app/portafolio/cualificado',
    // installApp: false
    // },
    // {
    //   nombre: 'Contactame',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // installApp: false
    // },
    // {
    //   nombre: 'Portafolio',
    //   icono: 'iconsminds-management',
    //   ruta: 'app/portafolio/contactame',
    // installApp: false
    // },
    // {
    //   nombre: 'Proyecto',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // installApp: false
    // },
    // {
    //   nombre: 'Testimonio',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // installApp: false
    // },
    // {
    //   nombre: 'Contacto',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // },
    {
      nombre: 'Instalar App',
      icono: 'iconsminds-smartphone-4',
      ruta: 'app/portafolio/contactame',
      installApp: true,
    },
  ];

  constructor(
    private readonly _navegationPageService: NavegationPagesService,
    private readonly _themeService: ThemeServiceService,
    private readonly _themeServiceService: ThemeServiceService
  ) {}

  ngOnInit(): void {
    this.observarSeleccionadoDesdeOtroComponente();

    this.changeTheme();

    this._themeServiceService.darkmode$
      .pipe()
      .subscribe((_darkmode: boolean) => {
        this.darkmode = _darkmode;
      });
  }
  ngOnDestroy(): void {
    this.stop();
  }

  changeEstadoNav(pagina: string): void {
    this.showMenu = false;
    this.seleccionado = pagina;
    this._navegationPageService.navegationPages(pagina);
  }

  observarSeleccionadoDesdeOtroComponente(): void {
    this._navegationPageService.seleccionado$
      .pipe(takeUntil(this.stop$))
      .subscribe((seleccionado: string) => {
        this.seleccionado = seleccionado;
      });
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  changeTheme(): void {
    if (this.estadoTheme === 'inicial') {
      this.estadoTheme = 'dark';
      this._themeService.setDarkTheme();
    } else {
      this.estadoTheme = 'inicial';
      this._themeService.setDefaultTheme();
    }
  }

  stop(): void {
    this.stop$.next();
    this.stop$.complete();
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
  installByUser(installApp: boolean) {
    if (installApp) {
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
  }
  /**
   * PWA
   */
}
