import * as types from './types';
import axios from 'axios';

export const obterProdutos = ({ commit }) => {
    axios.get('http://127.0.0.1:8000/api/produto')
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
