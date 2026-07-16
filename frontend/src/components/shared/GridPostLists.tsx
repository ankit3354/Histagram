import { Link } from "react-router-dom";

const GridPostLists = ({
  posts,
  showUser = true,
  // showStats = true,
}: any) => {
  // const { user } = userContext();

  // console.log("Posts : ", posts);
  return (
    <ul className="grid-container">
      {posts.map((post:any) => (
        <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>

          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                <img
                  src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
                  alt="creator"
                  className="h-8 w-8 rounded-full"
                />
                <p className="line-clamp-1">{post.name}</p>
              </div>
            )}
            {/* {showStats && <PostStats post={post} userId={user.id} />} */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GridPostLists;
