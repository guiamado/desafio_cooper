<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialogCadastro" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Cadastrar Produto</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field label="Nome do Produto" v-model="produto.nome" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Valor Unitario" prefix="$" placeholder="9.99" v-model="produto.valor_unitario" type="number" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Quantidade em Estoque" v-model="produto.quantidade_estoque" type="number" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="closeModal">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="criarProduto">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "NovoProduto",
        props: ['dialogCadastro'],
        data() {
            return {
                produto: {
                    nome: '',
                    valor_unitario: 0,
                    quantidade_estoque: 0,
                },
            }
        },
        methods: {
            closeModal() {
                this.$emit('update:dialogCadastro', false);
            },
            criarProduto() {
                axios.post(`http://localhost:8000/api/produto`, this.produto)
                    .then(() => {
                        this.$emit('update:dialogEditar', false);
                    })
                    .catch(error => console.log(error.response.data));
                this.$emit('update:dialogCadastro', false);
            },
        },
    }
</script>

<style scoped>

</style>
