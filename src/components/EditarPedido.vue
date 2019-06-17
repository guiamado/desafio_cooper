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
                            <v-flex xs12>
                                <v-text-field label="Nome do Produto" v-model="produto.nome" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Valor Unitario" prefix="$" placeholder="9.99" v-model="produto.valor_unitario" required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field label="Quantidade em Estoque" v-model="produto.quantidade_estoque" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="closeModal">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="alterarProduto">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "NovoProduto",
        props: ['dialogEditar', 'dados'],
        data() {
            return {
                pedido: this.dados,
            }
        },
        methods: {
            closeModal() {
                this.$emit('update:dialogEditar', false);
            },
            alterarProduto() {
                axios.patch(`http://localhost:8000/api/pedido/${this.pedido.pedido_id}`, this.pedido)
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
