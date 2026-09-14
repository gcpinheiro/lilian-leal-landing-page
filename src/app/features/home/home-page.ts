import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';
import { FAQS, FORMATION } from './data/home-content';
import { Hero } from './components/hero/hero';
import { HealthIcon } from '../../shared/ui/health-icon';
import { Testimonials } from './components/testimonials/testimonials';
import { HealthGallery } from './components/health-gallery/health-gallery';
import { ClinicLocation } from './components/clinic-location/clinic-location';

@Component({
  selector: 'app-home-page',
  imports: [Hero, HealthIcon, Testimonials, HealthGallery, ClinicLocation],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  readonly site = SITE;
  readonly formation = FORMATION;
  readonly faqs = FAQS;
}
