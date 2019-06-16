<?php

namespace App\Http\Controllers;

use App\Models\Produto as ModeloProduto;
use App\Services\Produto as ServicoProduto;
use Illuminate\Http\Request;
use Psr\Http\Message\ServerRequestInterface;

class ProdutoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function show(ModeloProduto $produto)
    {
        return $produto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function update(ServerRequestInterface $request, $id)
    {
        $dados = $request->getParsedBody();

        $produto = new ServicoProduto();

        $response = response();
        return $response->json($produto->alterar($id, $dados));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModeloProduto $produto)
    {
        $produto->delete();
        return response('Deletado!', 202);
    }
}
