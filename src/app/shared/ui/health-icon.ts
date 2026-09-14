import { Component, input } from '@angular/core';

@Component({
  selector: 'app-health-icon',
  template: `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    @switch (name()) {
      @case ('air') { <path d="M4 11h17c6 0 6-8 1-8-3 0-4 2-4 3M4 16h22M4 21h14c7 0 7 8 2 8-3 0-4-2-4-3"/> }
      @case ('moon') { <path d="M25 21A12 12 0 0 1 11 5a12 12 0 1 0 14 16Z"/><path d="M24 4v6m-3-3h6"/> }
      @case ('voice') { <path d="M7 13v6m6-13v20m6-17v14m6-10v6"/> }
      @default { <rect x="5" y="5" width="22" height="22" rx="8"/><path d="M16 10v12m-6-6h12"/> }
    }
  </svg>`,
  styles: ':host { display: block; width: 32px; height: 32px; } svg { width: 100%; height: 100%; }',
})
export class HealthIcon { readonly name = input('plus'); }
