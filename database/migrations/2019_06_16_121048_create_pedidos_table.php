<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->increments('pedido_id');
            $table->integer('quantidade_pedido');
            $table->float('valor_unitario');
            $table->string('solicitante');
            $table->string('cep');
            $table->string('uf');
            $table->string('municipio');
            $table->string('bairro');
            $table->string('rua');
            $table->string('numero');
            $table->string('despachante');
            $table->string('situacao_pedido');
            $table->integer('produto_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}
