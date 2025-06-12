import { PostRelatedItem } from "@/components/common/PostRelatedItem";

export const PostRelated = () => {
  return (
    <div className="mt-[3rem] lg:w-full md:w-[75%] px-[10px]">
      <div className="flex items-center justify-between">
        <h2 className="bg-white shadow-sm p-4 px-6 rounded-t-md font-medium">
          Tin đăng cùng khu vực
        </h2>
      </div>
      <div className="bg-white rounded shadow-sm p-4 relative z-1">
        <div className="flex flex-wrap">
          <PostRelatedItem />
          <PostRelatedItem />
          <PostRelatedItem />
          <PostRelatedItem />
        </div>
      </div>
    </div>
  );
};
