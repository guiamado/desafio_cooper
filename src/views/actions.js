import * as types from './types';
import axios from 'axios';

export const obterProdutos = ({ commit }) => {
    axios.get('http://localhost:8000/api/produto')
        .then((response) => {
            const { data } = response;
            commit(types.DEFINIR_PRODUTOS, data);
        })
        .catch(error => console.log(error.response.data));
};

export const removerProduto = ({ commit }, produto_id) => {
    axios.delete(`http://127.0.0.1:8000/api/produto/${produto_id}`)
        .then(() => {
            commit(types.REMOVER_PRODUTO, produto_id);
        }).catch(error => console.log(error.response.data));
};

export const cadastrarProduto = ({ commit }, produto) => {
    axios.post(`http://localhost:8000/api/produto`, produto)
        .then((response) => {
            const { data } = response;
            commit(types.ACRESCENTAR_PRODUTO, data);
        }).catch(error => console.log(error.response.data));
};

export const atualizarProduto = ({ commit }, produto) => {
    axios.patch(`http://localhost:8000/api/produto/${produto.produto_id}`, produto)
    .then(() => {
        commit(types.ATUALIZAR_PRODUTO, produto);
    })
    .catch(error => console.log(error.response.data));
};

export const obterPedidos = ({ commit }) => {
    axios.get('http://localhost:8000/api/pedido')
        .then((response) => {
            const { data } = response;
            commit(types.DEFINIR_PEDIDOS, data);
        })
        .catch(error => console.log(error.response.data));
};

export const removerPedido = ({ commit }, pedido_id) => {
    axios.delete(`http://localhost:8000/api/pedido/${pedido_id}`)
        .then(() => {
            commit(types.REMOVER_PEDIDO, pedido_id);
        }).catch(error => console.log(error.response.data));
};

export const cadastrarPedido = ({ commit }, pedido) => {
    axios.post(`http://localhost:8000/api/pedido`, pedido)
        .then((response) => {
            let { data } = response;
            let valor_unitario = 0;
            axios.get(`http://localhost:8000/api/produto/${data.produto_id}`)
                .then((res) => {
                    return valor_unitario  = res.data.valor_unitario;
                });
            console.log(valor_unitario)
            data.nome = pedido.nome;
            data.valor_unitario = valor_unitario;
            commit(types.ACRESCENTAR_PEDIDO, data);
        }).catch(error => console.log(error.response.data));
};

export const atualizarPedido = ({ commit }, pedido) => {
    axios.patch(`http://localhost:8000/api/pedido/${pedido.pedido_id}`, pedido)
        .then(() => {
            commit(types.ATUALIZAR_PEDIDO, pedido);
        })
        .catch(error => console.log(error.response.data));
};
