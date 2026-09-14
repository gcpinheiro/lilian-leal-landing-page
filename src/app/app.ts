import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './layout/header/site-header';
import { SiteFooter } from './layout/footer/site-footer';
import { WhatsappContact } from './shared/ui/whatsapp-contact';
@Component({ selector: 'app-root', imports: [RouterOutlet, SiteHeader, SiteFooter, WhatsappContact], templateUrl: './app.html', styleUrl: './app.scss' })
export class App {}
