<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="produtos"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.produto_id }}</td>
                <td class="text-xs-center">{{ props.item.nome }}</td>
                <td class="text-xs-center">{{ props.item.valor_unitario }}</td>
                <td class="text-xs-center">{{ props.item.quantidade_estoque }}</td>
                <td class="text-xs-center">{{ props.item.situacao_produto }}</td>
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
        <NovoProduto
                v-if="dialogCadastro === true"
                v-model="dialogCadastro"
                :dialogCadastro.sync="dialogCadastro">
        </NovoProduto>
        <EditarProduto
                v-if="dialogEditar === true"
                v-model="dialogEditar"
                :dialogEditar.sync="dialogEditar"
                :dados="produtoUnico">
        </EditarProduto>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import NovoProduto from '../components/NovoProduto.vue';
import EditarProduto from '../components/EditarProduto.vue';

export default {
  data() {
    return {
      dialogCadastro: false,
      dialogEditar: false,
      headers: [
        {
          text: 'Produto Id',
          align: 'center',
          value: 'produto_id',
        },
        {
          text: 'Nome',
          align: 'center',
          value: 'nome',
        },
        {
          text: 'Valor Unitario',
          align: 'center',
          value: 'valor_unitario',
        },
        {
          text: 'Quantidade Estoque',
          align: 'center',
          value: 'quantidade_estoque',
        },
        {
          text: 'Situaçao Produto',
          align: 'center',
          value: 'situacao_produto',
        },
        {
          text: 'Acoes',
          align: 'center',
          value: 'icons',
        },
      ],
    };
  },
  components: {
    NovoProduto,
    EditarProduto,
  },
  created() {
    this.obterProdutos();
  },
  computed: {
    ...mapGetters({
      produtos: 'componentes/dados',
    }),
  },
  methods: {
    ...mapActions({
        obterProdutos: 'componentes/obterProdutos',
        removerProduto: 'componentes/removerProduto',
    }),
    editarProduto(item) {
      this.dialogEditar = !this.dialogEditar;
      this.produtoUnico = item;
    },
    excluirProduto(item) {
        this.removerProduto(item.produto_id);
    },
  },
};
</script>
