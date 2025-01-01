<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Post;
use App\Models\product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function(){
    $products = product::all();
    return Inertia::render('Page',[
        'products' => $products,
    ]);
});

Route::get('/cart', function(){
    return Inertia::render('Cart/Page');
});

Route::get('/{id}', [ProductController::class, 'show'])->name('product');

//Route::get('/help', )


