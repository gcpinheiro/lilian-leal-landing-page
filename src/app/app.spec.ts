import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SiteHeader } from './layout/header/site-header';
describe('Navegação móvel', () => {
  it('fecha por Escape e restaura o foco ao botão', async () => {
    await TestBed.configureTestingModule({ imports: [SiteHeader], providers: [provideZonelessChangeDetection()] }).compileComponents();
    const fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    const focus = spyOn(button, 'focus');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(focus).toHaveBeenCalled();
  });
});
