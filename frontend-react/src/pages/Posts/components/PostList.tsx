import { Post } from "../../../utils/types";
import ListCard from "./ListCard";

type Props = {
  data: Post[];
};

function PostList({ data }: Props) {
  return (
    <div className="grid w-full grid-cols-1 gap-10 justify-items-stretch md:grid-cols-2 lg:grid-cols-3">
      {data.map((post, i) => (
        <ListCard post={post} i={i} />
      ))}
    </div>
  );
}

export default PostList;
