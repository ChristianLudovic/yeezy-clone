<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    protected $fillable = [
        'product_id',
        'quantity',
        'session_id',
        'size'
    ];

    public function product(){
        return $this->belongsTo(product::class);
    }
}
