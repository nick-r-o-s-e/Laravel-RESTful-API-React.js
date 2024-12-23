<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            'title' => 'Lorem Ipsum',
            'description' => 'Praesent accumsan ante non augue varius, sit amet imperdiet turpis auctor. Sed eget suscipit mi. Nunc et suscipit mi. Etiam nec lobortis justo, fermentum ullamcorper magna. Nam fermentum at risus non consectetur. Mauris a sagittis lorem. Quisque pretium leo eget ex sodales varius.',
            'status' => 'published',
        ];
        foreach (range(1, 4) as $_) {
            Post::create($data);
        };
    }
}
