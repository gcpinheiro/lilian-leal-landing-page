import { Component, ElementRef, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { NAVIGATION, SITE } from '../../core/config/site.config';
@Component({ selector: 'app-site-header', templateUrl: './site-header.html', styleUrl: './site-header.scss' })
export class SiteHeader {
  readonly site = SITE;
  readonly navigation = NAVIGATION;
  readonly menuOpen = signal(false);
  readonly interactive = signal(false);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  constructor() { afterNextRender(() => this.interactive.set(true)); }
  closeMenu(target?: string) {
    this.menuOpen.set(false);
    if (target) this.element.nativeElement.ownerDocument.getElementById(target)?.focus();
  }
  @HostListener('document:keydown.escape') onEscape() {
    if (!this.menuOpen()) return;
    this.closeMenu();
    this.element.nativeElement.querySelector<HTMLButtonElement>('button')?.focus();
  }
}

