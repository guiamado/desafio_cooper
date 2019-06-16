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
            "situacao_produto" => 'required|string',
        ]);

        if ($validator->fails()) {
            throw new \Exception($validator->errors()->first());
        }

        if ($dados['quantidade_estoque'] == 0) {
            $dados['situacao_produto'] = "Indisponivel";
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

        if ($dados['quantidade_estoque'] == 0) {
            $dados['situacao_produto'] = "Indisponivel";
        }

        $produto = ModeloProduto::where('produto_id', $id)->update($dados);

        return $produto;

    }
}
