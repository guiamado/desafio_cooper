import axios from 'axios';
import * as types from './types';

export const obterProdutos = ({ commit }) => {
  axios.get('http://localhost:8000/api/produto')
    .then((response) => {
      const { data } = response;
      commit(types.DEFINIR_PRODUTOS, data);
    })
    // eslint-disable-next-line
    .catch(error => console.log(error.response.data));
};

// eslint-disable-next-line
export const removerProduto = ({ commit }, produto_id) => {
  // eslint-disable-next-line
  axios.delete(`http://127.0.0.1:8000/api/produto/${produto_id}`)
    .then(() => {
      commit(types.REMOVER_PRODUTO, produto_id);
    })
    // eslint-disable-next-line
    .catch(error => console.log(error.response.data));
};

export const cadastrarProduto = ({ commit }, produto) => {
  axios.post('http://localhost:8000/api/produto', produto)
    .then((response) => {
      const { data } = response;
      commit(types.ACRESCENTAR_PRODUTO, data);
    })
    // eslint-disable-next-line
      .catch(error => console.log(error.response.data));
};

export const atualizarProduto = ({ commit }, produto) => {
  // eslint-disable-next-line
  axios.patch(`http://localhost:8000/api/produto/${produto.produto_id}`, produto)
    .then(() => {
      commit(types.ATUALIZAR_PRODUTO, produto);
    })
    // eslint-disable-next-line
    .catch(error => console.log(error.response.data));
};

export const obterPedidos = ({ commit }) => {
  axios.get('http://localhost:8000/api/pedido')
    .then((response) => {
      const { data } = response;
      commit(types.DEFINIR_PEDIDOS, data);
    })
    // eslint-disable-next-line
    .catch(error => console.log(error.response.data));
};

// eslint-disable-next-line
export const removerPedido = ({ commit }, pedido_id) => {
  // eslint-disable-next-line
  axios.delete(`http://localhost:8000/api/pedido/${pedido_id}`)
    .then(() => {
      commit(types.REMOVER_PEDIDO, pedido_id);
    })
    // eslint-disable-next-line
      .catch(error => console.log(error.response.data));
};

export const cadastrarPedido = ({ commit }, pedido) => {
  axios.post('http://localhost:8000/api/pedido', pedido)
    .then((response) => {
      const { data } = response;
      // eslint-disable-next-line
      let valor_unitario = 0;
      // eslint-disable-next-line
      axios.get(`http://localhost:8000/api/produto/${data.produto_id}`)
      // eslint-disable-next-line
        .then(res => valor_unitario = res.data.valor_unitario);
      data.nome = pedido.nome;
      // eslint-disable-next-line
      data.valor_unitario = valor_unitario;
      commit(types.ACRESCENTAR_PEDIDO, data);
    })
    // eslint-disable-next-line
      .catch(error => console.log(error.response.data));
};

export const atualizarPedido = ({ commit }, pedido) => {
  // eslint-disable-next-line
  axios.patch(`http://localhost:8000/api/pedido/${pedido.pedido_id}`, pedido)
    .then(() => {
      commit(types.ATUALIZAR_PEDIDO, pedido);
    })
    // eslint-disable-next-line
    .catch(error => console.log(error.response.data));
};
