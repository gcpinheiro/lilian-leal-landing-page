import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SITE } from '../../../../core/config/site.config';

@Component({
  selector: 'app-clinic-location',
  templateUrl: './clinic-location.html',
  styleUrl: './clinic-location.scss',
})
export class ClinicLocation {
  readonly clinic = SITE.clinic;
  // URL fixa da configuração local, sem entradas do visitante.
  readonly mapSource = inject(DomSanitizer).bypassSecurityTrustResourceUrl(SITE.clinic.mapsEmbedUrl);
}
