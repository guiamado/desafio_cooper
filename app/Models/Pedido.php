<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $primaryKey = 'pedido_id';

    protected $fillable = [
        'quantidade_pedido',
        'valor_unitario',
        'solicitante',
        'cep',
        'uf',
        'municipio',
        'bairro',
        'rua',
        'numero',
        'despachante',
        'situacao_pedido',
        'produto_id'
    ];

//    public function produto()
//    {
//        return $this->hasMany(Produto::class);
//    }
}
