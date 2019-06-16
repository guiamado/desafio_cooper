<?php


namespace App\Services;
use App\Models\Produto as ModeloProduto;
use Illuminate\Support\Facades\Validator;
class Produto implements IService
{
    public function criar(array $dados = [])
    {
        $validator = Validator::make($dados, [
            "nome" => 'required|string',
            "quantidade_estoque" => 'required|int',
            "situacao_produto" => 'required|boolean',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        $produto = ModeloProduto::create($dados);

        return $produto;
    }

    public function alterar($id, array $dados = [])
    {
        $validator = Validator::make($dados, [
            "nome" => 'required|string',
            "quantidade_estoque" => 'required|int',
            "situacao_produto" => 'required|string',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        $produto = ModeloProduto::where('produto_id', $id)->update($dados);

        return $produto;

    }
}
