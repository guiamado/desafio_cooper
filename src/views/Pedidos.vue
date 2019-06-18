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
                <td class="text-xs-center">R$ {{ props.item.valor_unitario }}</td>
                <td class="text-xs-center">
                    R$ {{ props.item.valor_unitario * props.item.quantidade_pedido  }}
                </td>
                <td class="text-xs-center">{{ props.item.solicitante }}</td>
                <td class="text-xs-center">{{ props.item.despachante }}</td>
                <td class="text-xs-center">{{ props.item.situacao_pedido }}</td>
                <td class="text-xs-center" style="width: 190px">
                    CEP: {{ props.item.cep }}
                    UF: {{ props.item.uf }}
                    Municipio: {{ props.item.municipio }}
                    Bairro: {{ props.item.bairro }}
                    Rua: {{ props.item.rua }}
                    Numero: {{ props.item.numero }}
                </td>
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
        <NovoPedido
                v-if="dialogCadastro === true"
                v-model="dialogCadastro"
                :dialogCadastro.sync="dialogCadastro">
        </NovoPedido>
        <EditarPedido
                v-if="dialogEditar === true"
                v-model="dialogEditar"
                :dialogEditar.sync="dialogEditar"
                :dados="pedidoUnico">
        </EditarPedido>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import NovoPedido from '../components/NovoPedido.vue';
import EditarPedido from '../components/EditarPedido.vue';

export default {
  data() {
    return {
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
          value: 'quantidade_pedido',
        },
        {
          text: 'Valor Unitario',
          align: 'center',
          value: 'valor_unitario',
        },
        {
          text: 'Valor Total',
          align: 'center',
          value: 'total',
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
    };
  },
  components: {
    NovoPedido,
    EditarPedido,
  },
  created() {
    this.obterPedidos();
  },
  computed: {
    ...mapGetters({
      pedidos: 'componentes/dados',
    }),
  },
  methods: {
    ...mapActions({
      obterPedidos: 'componentes/obterPedidos',
      removerPedido: 'componentes/removerPedido',
    }),
    editarProduto(item) {
      this.dialogEditar = !this.dialogEditar;
      this.pedidoUnico = item;
    },
    excluirProduto(item) {
      this.removerPedido(item.pedido_id);
    },
  },
};
</script>
