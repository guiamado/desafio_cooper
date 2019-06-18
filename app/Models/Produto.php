<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
//    public $incrementing = true;
    protected $primaryKey = 'produto_id';
//    public function pedido()
//    {
//        return $this->belongsTo(Pedido::class);
//    }
    protected $fillable = [
        'nome',
        'valor_unitario',
        'quantidade_estoque',
        'situacao_produto',
    ];
}
