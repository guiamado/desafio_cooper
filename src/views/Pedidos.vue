<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="pedidos"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.pedido_id }}</td>
                <td class="text-xs-center">{{ props.item.nome }}</td>
                <td class="text-xs-center">{{ props.item.quantidade_pedido }}</td>
                <td class="text-xs-center">{{ props.item.valor_unitario }}</td>
                <td class="text-xs-center">{{ props.item.solicitante }}</td>
                <td class="text-xs-center">{{ props.item.despachante }}</td>
                <td class="text-xs-center">{{ props.item.situacao_pedido }}</td>
                <td class="text-xs-center">{{ props.item.cep }} + {{ props.item.bairro }} + {{ props.item.uf }} + {{ props.item.rua }} + {{ props.item.municipio }} + {{ props.item.numero }}</td>
                <td class="text-xs-center">
                    <v-btn icon @click="excluirProduto(props.item)">
                        <v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn icon @click="editarProduto(props.item)">
                        <v-icon>edit</v-icon>
                    </v-btn>
                </td>
            </template>
        </v-data-table>
        <v-card>
            <v-card-text style="height: 100px; position: relative">
                <v-btn
                    absolute
                    dark
                    fab
                    center
                    right
                    color="green"
                    @click="dialogCadastro = !dialogCadastro"
                >
                    <v-icon>add</v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
        <NovoPedido v-if="dialogCadastro === true" v-model="dialogCadastro" :dialogCadastro.sync="dialogCadastro"></NovoPedido>
        <EditarPedido v-if="dialogEditar === true" v-model="dialogEditar" :dialogEditar.sync="dialogEditar" :dados="pedidoUnico"></EditarPedido>
    </div>
</template>
<script>
    import axios from 'axios';
    import NovoPedido from '../components/NovoPedido.vue';
    import EditarPedido from '../components/EditarPedido.vue';
    export default {
        data () {
            return {
                pedidos: [],
                pedidoUnico: {},
                dialogCadastro: false,
                dialogEditar: false,
                headers: [
                    {
                        text: 'Peido Id',
                        align: 'center',
                        value: 'pedido_id',
                    },
                    {
                        text: 'Nome do Produto',
                        align: 'center',
                        value: 'nome',
                    },
                    {
                        text: 'Quantidade do Pedido',
                        align: 'center',
                        value: 'quantidade_pedido'
                    },
                    {
                        text: 'Valor Unitario',
                        align: 'center',
                        value: 'valor_unitario',
                    },
                    {
                        text: 'Solicitante',
                        align: 'center',
                        value: 'solicitante',
                    },
                    {
                        text: 'Despachante',
                        align: 'center',
                        value: 'despachante',
                    },
                    {
                        text: 'Situacao Pedido',
                        align: 'center',
                        value: 'situacao_pedido',
                    },
                    {
                        text: 'Endereço',
                        align: 'center',
                    },
                    {
                        text: 'Acoes',
                        align: 'center',
                    },
                ],
            }
        },
        components: {
            NovoPedido,
            EditarPedido,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/pedido')
                .then(res => this.pedidos = res.data)
                .catch(error => console.log(error.response.data));
        },
        methods: {
            editarProduto(item) {
                this.dialogEditar = !this.dialogEditar;
                this.pedidoUnico = item;
            },
            excluirProduto(item) {
                axios.delete(`http://127.0.0.1:8000/api/pedido/${item.pedido_id}`)
                    .then(() => this.pedidos.splice(index, 1))
                    .catch(error => this.errors = error.response.data.error)
            },
        },
    }
</script>
