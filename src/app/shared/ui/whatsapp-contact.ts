import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';

@Component({
  selector: 'app-whatsapp-contact',
  template: `
    @if (site.whatsapp) {
      <a class="whatsapp-floating" [href]="site.whatsapp" target="_blank"
        rel="noopener noreferrer" aria-label="Solicitar informações de consulta pelo WhatsApp (abre em nova aba)">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M27 15.5a11.5 11.5 0 0 1-17 10.1L4 27l1.5-5.8A11.5 11.5 0 1 1 27 15.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          <path d="m11 9 2 4-1.5 1.5a12 12 0 0 0 6 6L19 19l4 2c-.5 2-2 3-4 2-5-1.5-9-5.5-10-10-.5-2 .5-3 2-4Z" fill="currentColor" transform="translate(0 -2) scale(.95)"/>
        </svg>
        <span>Fale pelo WhatsApp</span>
      </a>
      <div class="contact-clearance" aria-hidden="true"></div>
    }
  `,
  styles: `
    .whatsapp-floating {
      position: fixed;
      right: max(24px, env(safe-area-inset-right));
      bottom: max(24px, env(safe-area-inset-bottom));
      z-index: 30;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-height: 56px;
      padding: 12px 20px;
      border: 2px solid white;
      border-radius: 32px;
      background: #286343;
      color: white;
      box-shadow: 0 4px 18px #203c3026;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
    }
    .whatsapp-floating:hover { background: #1e5035; }
    .whatsapp-floating:focus-visible { outline: 3px solid var(--earth); outline-offset: 4px; }
    svg { width: 28px; height: 28px; flex: none; }
    .contact-clearance { height: 86px; }
    @media (max-width: 760px) {
      .whatsapp-floating { right: 16px; bottom: max(16px, env(safe-area-inset-bottom)); width: 58px; height: 58px; padding: 12px; justify-content: center; }
      .whatsapp-floating span { display: none; }
    }
  `,
})
export class WhatsappContact {
  readonly site = SITE;
}
