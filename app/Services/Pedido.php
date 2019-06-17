<?php


namespace App\Services;
use App\Models\Pedido as ModeloPedido;
use App\Models\Produto as ModeloProduto;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB as DB;

class Pedido implements IService
{
    public function criar(array $dados = [])
    {
        $validator = Validator::make($dados, [
            "solicitante" => 'required|string',
            "despachante" => 'required|string',
            "quantidade_pedido" => 'required|int',
            "situacao_pedido" => 'required|string',
            "produto" => 'required|string',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        $produto_id = DB::table('public.produtos')
            ->select([
                'public.produtos.produto_id'
            ])
            ->where('public.produtos.nome', '=', $dados['produto'])
            ->get()->toArray();

        unset($dados['produto']);

        $dados = array_merge($dados, [
            'produto_id' => (int) $produto_id[0]->produto_id
        ]);

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

    public function consultar() {
        return DB::table('public.pedidos')
            ->select([
                '*'
            ])
            ->join(
                'public.produtos',
                'public.produtos.produto_id',
                '=',
                'public.pedidos.produto_id'
            )->get()->toArray();


    }
}
