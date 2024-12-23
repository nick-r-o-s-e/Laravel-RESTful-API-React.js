import { Link } from "react-router-dom";
import { Post } from "../../../utils/types";

type Props = {
  post: Post;
  i: number;
};

function ListCard({ post, i }: Props) {
  return (
    <div
      key={i}
      className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between w-full gap-3">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <span className="text-gray-900 dark:text-slate-400">
          {new Date(post.created_at).toDateString()}
        </span>
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {(() => {
          const text = post.description;
          return text.length > 350 ? text.slice(0, 350) + "..." : text;
        })()}
      </p>

      <Link
        to={`/posts/${post.id}`}
        className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ListCard;
