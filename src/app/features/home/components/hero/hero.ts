import { Component } from '@angular/core';
import { SITE } from '../../../../core/config/site.config';
@Component({ selector: 'app-hero', templateUrl: './hero.html', styleUrl: './hero.scss' })
export class Hero { readonly site = SITE; }

