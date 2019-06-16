<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Pedido;
use Faker\Generator as Faker;

$factory->define(Pedido::class, function (Faker $faker) {
    return [
        'valor_unitario' => $faker->randomFloat(0, 2000),
        'quantidade_pedido' => $faker->numberBetween(0, 20),
        'solicitante' => $faker->userName,
        'despachante' => $faker->userName,
        'situacao_pedido' => $faker->colorName,
        'cep' => $faker->postcode,
        'uf' => $faker->citySuffix,
        'municipio' => $faker->city,
        'rua' => $faker->country,
        'numero' => $faker->numberBetween(0, 200),
        'bairro' => $faker->firstNameMale,
        'produto_id' => function () {
            return \App\Models\Produto::all()->random();
        },
    ];
});
