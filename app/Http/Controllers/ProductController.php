<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\Product as ModelsProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{


    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $product = product::findOrFail($id);

        return Inertia::render('Products/Page', [
            'product' => $product
        ]);
    }
}
