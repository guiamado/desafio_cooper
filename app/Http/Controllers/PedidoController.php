<?php

namespace App\Http\Controllers;

use App\Models\Pedido as ModeloPedido;
use App\Services\Pedido as ServicoPedido;
use Psr\Http\Message\ServerRequestInterface;

class PedidoController extends Controller
{
    public function index()
    {
        return ModeloPedido::latest()->get();
    }

    public function store(ServerRequestInterface $request)
    {
        $dados = $request->getParsedBody();

        $pedido = new ServicoPedido();

        $response = response();
        return $response->json($pedido->criar($dados));
    }

    public function show(ModeloPedido $pedido)
    {
        return $pedido;
    }

    public function update(ServerRequestInterface $request, $id)
    {
        $dados = $request->getParsedBody();

        $pedido = new ServicoPedido();

        $response = response();
        return $response->json($pedido->alterar($id, $dados));
    }

    public function destroy(ModeloPedido $pedido)
    {
        $pedido->delete();
        return response('Deletado!', 202);
    }
}
