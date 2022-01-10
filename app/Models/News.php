<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 *  Class News
 * 
 * @property string $id
 * @property string|null $title
 * @property string|null $type
 * @property string|null $link
 * @property string|null $img
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 */


class News extends Model
{
    use HasFactory;

    protected $table = 'news';
    protected $primaryKey = 'id';
}
