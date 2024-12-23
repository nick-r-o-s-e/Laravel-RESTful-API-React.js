import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import BlogList from "./components/BlogList";
import Post from "./pages/Post/Post";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts/Posts";
import PostForm from "./pages/PostForm/PostForm";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <div className="container h-[100vh] mb-[200px] flex justify-center w-full mx-auto">
          <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/create" element={<PostForm isEdit={false} />} />
            <Route path="/edit/:id" element={<PostForm isEdit={true} />} />
            <Route path="*" element={<Navigate to="/posts" replace />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
