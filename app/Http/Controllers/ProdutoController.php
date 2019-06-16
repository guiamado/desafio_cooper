<?php

namespace App\Http\Controllers;

use App\Models\Produto as ModeloProduto;
use App\Services\Produto as ServicoProduto;
use Psr\Http\Message\ServerRequestInterface;

class ProdutoController extends Controller
{
    public function index()
    {
        return ModeloProduto::latest()->get();
    }

    public function store(ServerRequestInterface $request)
    {
        $dados = $request->getParsedBody();

        $produto = new ServicoProduto();

        $response = response();
        return $response->json($produto->criar($dados));
    }

    public function show(ModeloProduto $produto)
    {
        return $produto;
    }

    public function update(ServerRequestInterface $request, $id)
    {
        $dados = $request->getParsedBody();

        $produto = new ServicoProduto();

        $response = response();
        return $response->json($produto->alterar($id, $dados));
    }

    public function destroy(ModeloProduto $produto)
    {
        $produto->delete();
        return response('Deletado!', 202);
    }
}
