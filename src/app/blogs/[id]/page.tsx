
// WIP - Blog Post Page
type Props = { params: { id: string } }

const PostPage = async ({ params }: Props) => {
  // const post = await onGetBlogPost(params.id)
  // console.log(parse(post?.content))
  return (
    <div>
      <h1>Post Page</h1>
    </div>

    // <div className="container flex justify-center my-10">
    //   <div className="lg:w-6/12 flex flex-col">
    //     <CardDescription>
    //       {/* {getMonthName(post?.createdAt.getMonth()!)}{' '}
    //       {post?.createdAt.getDate()} {post?.createdAt.getFullYear()} */}
    //     </CardDescription>
    //     <h2 className="text-6xl font-bold">{post?.title}</h2>
    //     <div className="text-xl parsed-container flex flex-col mt-10 gap-10">
    //       {parse(post?.content)}
    //     </div>
    //   </div>
    // </div>
  )
}

export default PostPage
