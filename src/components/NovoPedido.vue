<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialogCadastro" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastrar Pedido</span>
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
                            <v-flex xs6>
                                <v-text-field label="Quantidade do Pedido" v-model="pedido.quantidade_pedido" type="number" required></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <v-text-field label="Valor Unitario" v-model="pedido.valor_unitario" required></v-text-field>
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
                            <v-flex xs12>
                                <v-select
                                        :items="buscarNomeProdutos(produtos)"
                                        label="Produtos"
                                        v-model="pedido.produto"
                                ></v-select>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="closeModal">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="criarPedido">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import axios from 'axios';
    import _ from 'lodash';
    export default {
        name: "NovoProduto",
        props: ['dialogCadastro'],
        data() {
            return {
                pedido: {
                    solicitante: '',
                    despachante: '',
                    quantidade_pedido: 0,
                    valor_unitario: 0,
                    situacao_pedido: '',
                    cep: '',
                    uf: '',
                    municipio: '',
                    bairro: '',
                    rua: '',
                    numero: '',
                    produto: '',
                },
                items: ['Pendente de Envio', 'Enviado', 'Entregue'],
                produtos: [],
            }
        },
        mounted() {
            axios.get('http://127.0.0.1:8000/api/produto')
                .then(res => this.produtos = res.data)
                .catch(error => console.log(error.response.data));
        },
        methods: {
            closeModal() {
                this.$emit('update:dialogCadastro', false);
            },
            criarPedido() {
                axios.post(`http://localhost:8000/api/pedido`, this.pedido)
                    .then(() => {
                        this.$emit('update:dialogEditar', false);
                    })
                    .catch(error => console.log(error.response.data));

                this.$emit('update:dialogCadastro', false);
            },
            buscarNomeProdutos(value) {

                return _.map(value, 'nome');
            }
        },
    }
</script>

<style scoped>

</style>
