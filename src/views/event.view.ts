import Event from '../models/Event';

export default {
  render(event: Event) {
    return {
      id: event.id,
      segmento: event.segmentos,
      nome_evento: event.nome_evento,
      orgao_autoridade: event.orgao_autoridade,
      turismo_categorias: event.nome_categoria_turismo,
      descricao_motivo: event.descricao_motivo,
    };
  },

  renderMany(events: Event[]) {
    return events.map((event) => this.render(event));
  },
};
