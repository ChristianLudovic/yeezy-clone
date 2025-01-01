<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CartItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sessionId = session()->getId();
        $cartItems = CartItem::where('session_id', $sessionId)
            ->with('product')
            ->get();

        return Inertia::render('Cart/Page', [
            'cartItems' => $cartItems
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $sessionId = session()->getId();
        logger("Session ID: " . $sessionId); // Vérifiez si l'ID est généré correctement

        $cartItem = CartItem::where([
            'session_id' => $sessionId,
            'product_id' => $validated['product_id']
        ])->first();

        if ($cartItem) {
            $cartItem->quantity += $validated['quantity'];
            $cartItem->save();
        } else {
            CartItem::create([
                'session_id' => $sessionId,
                'product_id' => $validated['product_id'],
                'quantity' => $validated['quantity']
            ]);
        }

        session()->flash('success', 'Produit ajouté au panier'); // Ajout du flash message pour retour visuel
        return redirect()->back();
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $sessionId = session()->getId();

        $cartItem = CartItem::where('session_id', $sessionId)
            ->where('id', $id)
            ->firstOrFail();

        $validated = $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem->update($validated);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $sessionId = session()->getId();

        CartItem::where('session_id', $sessionId)
            ->where('id', $id)
            ->delete();

        return redirect()->back();
    }
}
