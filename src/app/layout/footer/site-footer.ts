import { Component } from '@angular/core';
import { SITE } from '../../core/config/site.config';
@Component({
  selector: 'app-site-footer',
  template: `<footer class="container">
    <div class="footer-main"><a href="#inicio" class="footer-name">{{ site.name }}</a>
    <span>Médica · {{ site.field }}</span><a href="#inicio">Voltar ao início ↑</a></div>
    <div class="footer-meta"><p>{{ site.registration.supplied }}</p>
    <p>© {{ year }} {{ site.name }}</p></div>
  </footer>`,
  styles: `footer {padding-block: 40px;} .footer-main, .footer-meta {display:flex; justify-content:space-between; gap:24px; align-items:center;} .footer-name {font: 26px var(--serif); text-decoration:none;} .footer-main span, .footer-main>a:last-child {font-size:14px;} .footer-meta {border-top:1px solid var(--line); margin-top:30px; padding-top:16px; font-size:12px; line-height:1.8; color:var(--muted);} @media(max-width:760px) {.footer-main,.footer-meta {align-items:flex-start;flex-direction:column;gap:16px;} .footer-meta p {margin:0;}}`,
})
export class SiteFooter { readonly site = SITE; readonly year = new Date().getFullYear(); }

