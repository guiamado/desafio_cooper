<?php


namespace App\Services;
use App\Models\Pedido as ModeloPedido;
use Illuminate\Support\Facades\Validator;

class Pedido implements IService
{
    public function criar(array $dados = [])
    {
        $validator = Validator::make($dados, [
            "solicitante" => 'required|string',
            "despachante" => 'required|string',
            "quantidade_pedido" => 'required|int',
            "situacao_pedido" => 'required|string',
            "produto_id" => 'required|int',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        $pedido = ModeloPedido::create($dados);

        return $pedido;
    }

    public function alterar($id, array $dados = [])
    {
        $validator = Validator::make($dados, [
            "solicitante" => 'required|string',
            "despachante" => 'required|string',
            "situacao_pedido" => 'required|string',
            "produto_id" => 'required|int',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        $pedido = ModeloPedido::where('pedido_id', $id)->update($dados);

        return $pedido;

    }
}
