import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { deletePost } from "../../api";
import ErrorInfo from "../../components/ErrorInfo";
import PostSkeleton from "./components/PostSkeleton";
import PostDetails from "./components/PostDetails";
import { PostFormData } from "../../utils/types";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/posts/${id}`
        );

        setPost(response.data.data);
      } catch {
        setError("Post not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);

    try {
      await deletePost(Number(id));
      navigate("/posts");
    } catch {
      setError("Failed to delete Post. Try Again Later.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <PostSkeleton />;
  }

  if (error || !post || !id) {
    return (
      <div className="pt-32">
        <ErrorInfo
          title="Post not found"
          description={error || "Error fetching post"}
        />
      </div>
    );
  }

  return <PostDetails post={post} handleDelete={handleDelete} id={id} />;
};

export default Post;
