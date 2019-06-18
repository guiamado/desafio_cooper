import * as types from './types';

export const mutations = {
  [types.DEFINIR_PRODUTOS](state, produtos) {
    state.dados = produtos;
  },
  [types.ACRESCENTAR_PRODUTO](state, produto) {
    state.dados.push(produto);
  },
  [types.REMOVER_PRODUTO](state, produto_id) {
    const index = state.dados.findIndex(produto => produto.produto_id === produto_id);
    state.dados.splice(index, 1);
  },
  [types.ATUALIZAR_PRODUTO](state, produtoEditado) {
    const index = state.dados.findIndex(produto => produto.produto_id === produtoEditado.produto_id);
    Object.assign(state.dados[index], produtoEditado);
  },
  [types.DEFINIR_PEDIDOS](state, pedidos) {
    state.dados = pedidos;
  },
  [types.ACRESCENTAR_PEDIDO](state, pedido) {
    state.dados.push(pedido);
  },
  [types.REMOVER_PEDIDO](state, pedido_id) {
    const index = state.dados.findIndex(pedido => pedido.pedido_id === pedido_id);
    state.dados.splice(index, 1);
  },
  [types.ATUALIZAR_PEDIDO](state, pedidoEditado) {
    const index = state.dados.findIndex(pedido => pedido.pedido_id === pedidoEditado.pedido_id);
    Object.assign(state.dados[index], pedidoEditado);
  },
};
