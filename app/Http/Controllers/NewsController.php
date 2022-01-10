<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function __construct() {
        
    }

    public function index() {
        $data = News::all();

    }

    public function store(Request $request) {
        
    }
}
