<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index(Request $request)
    {
        try {
            $query = Post::query();

            if ($request->has('status')) {
                $query->where('status', $request->status);
            }

            $dateSortOrder = $request->get('date_sort_order', 'desc');

            $query->orderBy('created_at', $dateSortOrder);

            $posts = $query->get();

            if ($posts->isEmpty()) {

                return response()->json([
                    'message' => 'No Posts found',
                    'status' => 'empty',
                    'data' => []
                ], 200);
            }

            return response()->json([
                'message' => 'Posts retrieved successfully',
                'status' => 'success',
                'data' => $posts
            ], 200);
        } catch (\Exception $err) {
            return response()->json([
                'message' => 'An error occured while fetching posts',
                'status' => 'error',
                'error' => $err->getMessage()

            ], 500);
        }
    }

    public function store(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'status' => 'in:draft,published',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()
            ], 422);
        } else {
            $post = Post::create([
                'title' => $request->title,
                'description' => $request->description,
                'status' => $request->status,
            ]);

            return response()->json([
                'message' => 'Post Created Successfully',
                'data' => new PostResource($post)
            ], 200);
        }
    }

    public function show(Post $post)
    {
        $post = Post::find($post->id);

        if (!$post) {
            return response()->json(['error' => 'Post not found']);
        } else {

            return new PostResource($post);
        }
    }

    public function update(Request $request, Post $post)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'status' => 'in:draft,published',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()
            ], 422);
        } else {
            $post->update([
                'title' => $request->title,
                'description' => $request->description,
                'status' => $request->status,
            ]);
            return response()->json([
                'message' => 'Post Updated Successfully',
                'data' => new PostResource($post)
            ], 200);
        }
    }
    
    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json([
            'message' => 'Deleted Successfully',
        ], 200);
    }
}
