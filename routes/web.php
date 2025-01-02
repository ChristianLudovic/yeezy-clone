<?php

use App\Http\Controllers\CartItemController;
use App\Http\Controllers\ProductController;
use App\Models\CartItem;;
use App\Models\product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    $products = product::all();
    $cartItems = CartItem::where('session_id', session()->getId())->sum('quantity');
    return Inertia::render('Page',[
        'products' => $products,
        'cartCount' => $cartItems,
    ]);
});

Route::get('/help', function(){
    return Inertia::render('Help/Page');
});

Route::get('/terms', function(){
    return Inertia::render('Terms/Page');
});

Route::get('/privacy', function(){
    return Inertia::render('Privacy/Page');
});

Route::get('/cart', [CartItemController::class, 'index'])->name('cart.index');
Route::post('/cart', [CartItemController::class, 'store'])->name('cart.store');
Route::patch('/cart/{id}', [CartItemController::class, 'update'])->name('cart.update');
Route::delete('/cart/{id}', [CartItemController::class, 'destroy'])->name('cart.destroy');


Route::get('/{id}', [ProductController::class, 'show'])->name('product');




