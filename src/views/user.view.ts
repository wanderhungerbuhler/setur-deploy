import User from '../models/User';
import eventView from '../views/event.view';

export default {
  render(user: User) {
    return {
      id: user.id,
      cpf: user.cpf,
      nome: user.nome,
      sobrenome: user.sobrenome,
      email: user.email,
      telefone: user.telefone,
      whatsapp: user.whatsapp,
      empresa_instituicao: user.empresa_instituicao,
      cep: user.cep,
      endereco_completo: user.endereco_completo,
      estado_uf: user.estado_uf,
      municipio: user.municipio,
      status: user.status,
      eventos: eventView.renderMany(user.eventos),
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
