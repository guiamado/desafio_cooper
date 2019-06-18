<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialogEditar" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Editar Pedido</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs6>
                                <v-text-field label="Solicitante" v-model="pedido.solicitante" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Despachante" v-model="pedido.despachante" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-select
                                        :items="buscarNomeProdutos(produtos)"
                                        label="Produtos"
                                        v-model="pedido.nome"
                                ></v-select>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Quantidade do Pedido" v-model="pedido.quantidade_pedido" type="number" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Valor Unitario" v-model="pedido.valor_unitario" type="number" readonly prefix="$" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-select
                                        :items="items"
                                        label="Situacao do Pedido"
                                        v-model="pedido.situacao_pedido"
                                ></v-select>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="CEP" mask="##.###-###" v-model="pedido.cep" required></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                                <v-text-field label="UF" mask="AA" v-model="pedido.uf" required></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                                <v-text-field label="Municipio" v-model="pedido.municipio" required></v-text-field>
                            </v-flex>
                            <v-flex xs4>
                                <v-text-field label="Bairro" v-model="pedido.bairro" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Rua" v-model="pedido.rua" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Numero" v-model="pedido.numero" required type="number"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="closeModal">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="alterarPedido">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'EditarPedido',
  props: ['dialogEditar', 'dados'],
  data() {
    return {
      pedido: {
        pedido_id: this.dados.pedido_id,
        solicitante: this.dados.solicitante,
        despachante: this.dados.despachante,
        quantidade_pedido: this.dados.quantidade_pedido,
        valor_unitario: this.dados.valor_unitario,
        situacao_pedido: this.dados.situacao_pedido,
        cep: this.dados.cep,
        uf: this.dados.uf,
        municipio: this.dados.municipio,
        bairro: this.dados.bairro,
        rua: this.dados.rua,
        numero: this.dados.numero,
        nome: this.dados.nome,
      },
      items: ['Pendente de Envio', 'Enviado', 'Entregue'],
      produtos: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/produto')
      .then(res => this.produtos = res.data)
      .catch(error => console.log(error.response.data));
  },
  methods: {
      ...mapActions({
          atualizarPedido: 'componentes/atualizarPedido',
      }),
    closeModal() {
      this.$emit('update:dialogEditar', false);
    },
    alterarPedido() {
        this.atualizarPedido(this.pedido);
        this.$emit('update:dialogEditar', false);
    },
    buscarNomeProdutos(value) {
      return _.map(value, 'nome');
    },
  },
};
</script>

<style scoped>

</style>
