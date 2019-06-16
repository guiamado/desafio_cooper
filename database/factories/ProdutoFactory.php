<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Produto;
use Faker\Generator as Faker;

$factory->define(Produto::class, function (Faker $faker) {
    $quantidade_estoque = $faker->numberBetween(0, 20);
    $situacao_produto = false;

    if ($quantidade_estoque != 0) {
        $situacao_produto = true;
    }
    return [
        'nome' => $faker->userName,
        'valor_unitario' => $faker->randomFloat(0, 2000),
        'quantidade_estoque' => $quantidade_estoque,
        'situacao_produto' => $situacao_produto == 1 ? 'Disponivel' : 'Indisponivel'
    ];
});
