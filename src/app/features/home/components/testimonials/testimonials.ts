import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  readonly gabriel = {
    name: 'Gabriel Castro',
    excerpt: 'Em janeiro de 2026, iniciei com a Dra. Lilian o processo para a cirurgia de desvio de septo. Em todas as consultas, fui muito bem atendido. Recebi explicações claras sobre o procedimento e pude esclarecer minhas dúvidas.',
    continuation: 'Ao longo do processo, a Dra. Lilian me ajudou dentro do que estava ao seu alcance para que a cirurgia fosse realizada. Ela se mostrou disponível, e a comunicação foi fácil durante todo esse período. Foi ela quem realizou minha cirurgia.',
  } as const;
}
