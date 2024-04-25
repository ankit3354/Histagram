import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutaion";

function LikedPosts() {
  const { data: currentUser } = useGetCurrentUser();
  
  if (!currentUser) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className="text-light-4">No Liked Posts </p>
      )}
      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
}

export default LikedPosts;
