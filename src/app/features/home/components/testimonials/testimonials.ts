import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly examples = [
    { topic: 'Escuta e acolhimento', text: 'Ter espaço para contar minhas dúvidas e conversar com calma fez diferença na experiência da consulta.' },
    { topic: 'Explicações claras', text: 'Gostei de entender o que seria avaliado e de poder perguntar sobre cada etapa, sem sair com dúvidas.' },
    { topic: 'Atenção ao dia a dia', text: 'A conversa sobre minha rotina e meu sono me ajudou a organizar o que eu queria levar para a avaliação.' },
  ] as const;
}
