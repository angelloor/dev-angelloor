import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './public/not-found/not-found.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ServiceComponent } from './service/service.component';
import { SkillComponent } from './skill/skill.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InicioComponent,
    AboutComponent,
    SkillComponent,

    ServiceComponent,
    QualificationComponent,
    PortfolioComponent,
    ProjectComponent,
    TestimonialComponent,
    ContactComponent,
    NotfoundComponent,
  ],
})
export class PagesModule {}
