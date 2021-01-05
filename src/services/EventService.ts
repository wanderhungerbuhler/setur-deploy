import Event from '../models/Event';

import { getRepository } from 'typeorm';

interface Request {
  id_usuario: string;
  segmentos: string;
  orgao_autoridade: string;
  nome_evento: string;
  nome_categoria_turismo: string;
  descricao_motivo: string;
}

class EventService {
  public async execute({ id_usuario, segmentos, orgao_autoridade, nome_evento, nome_categoria_turismo, descricao_motivo }: Request): Promise<Event> {
    const eventRepository = getRepository(Event);

    const event = await eventRepository.create({
      id_usuario,
      segmentos,
      orgao_autoridade,
      nome_evento,
      nome_categoria_turismo,
      descricao_motivo,
    });

    await eventRepository.save(event);

    return event;
  }
}

export default EventService;
