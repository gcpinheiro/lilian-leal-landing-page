import { Component, ElementRef, OnDestroy, afterNextRender, computed, signal, viewChild } from '@angular/core';
import { HEALTH_ARTICLES, HealthArticle } from '../../data/health-gallery';
import { SITE } from '../../../../core/config/site.config';

@Component({
  selector: 'app-health-gallery',
  templateUrl: './health-gallery.html',
  styleUrl: './health-gallery.scss',
})
export class HealthGallery implements OnDestroy {
  readonly site = SITE;
  readonly categories = ['Todos', 'Respiração', 'Garganta', 'Sono'] as const;
  readonly category = signal<string>('Todos');
  readonly ready = signal(false);
  readonly articles = computed(() => HEALTH_ARTICLES.filter(article => this.category() === 'Todos' || article.category === this.category()));
  readonly selected = signal<HealthArticle | null>(null);
  readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('reader');
  private trigger?: HTMLElement;
  private previousOverflow = '';

  constructor() { afterNextRender(() => this.ready.set(true)); }

  open(article: HealthArticle, event: Event) {
    this.trigger = event.currentTarget as HTMLElement;
    this.selected.set(article);
    const element = this.dialog().nativeElement;
    this.previousOverflow = element.ownerDocument.body.style.overflow;
    element.ownerDocument.body.style.overflow = 'hidden';
    element.showModal();
  }

  close() { this.dialog().nativeElement.close(); this.restore(); }

  restore() {
    if (!this.selected()) return;
    this.dialog().nativeElement.ownerDocument.body.style.overflow = this.previousOverflow;
    this.selected.set(null);
    this.trigger?.focus();
  }

  move(step: number) {
    const articles = this.articles();
    const index = articles.findIndex(article => article.id === this.selected()?.id);
    this.selected.set(articles[(index + step + articles.length) % articles.length]);
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const dialog = this.dialog().nativeElement;
      const controls = dialog.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]');
      const first = controls[0];
      const last = controls[controls.length - 1];
      const active = dialog.ownerDocument.activeElement;
      if (event.shiftKey && active === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && active === last) { event.preventDefault(); first?.focus(); }
      return;
    }
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    this.move(event.key === 'ArrowRight' ? 1 : -1);
  }

  onBackdrop(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) this.close();
  }

  ngOnDestroy() {
    if (this.selected()) { this.dialog().nativeElement.close(); this.restore(); }
  }
}
