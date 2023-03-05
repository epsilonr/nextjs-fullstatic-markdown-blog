import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { getAllSortedPostData } from "@/lib/posts";

export async function getStaticProps() {
    const posts = await getAllSortedPostData();

    return {
        props: {
            posts,
        },
    };
}

export default function Home({ posts }) {
    return (
        <Layout title="Home">
            <h1 className="font-extrabold text-4xl">Latest Posts</h1>
            <div className="bg-gray-700 h-[2px] rounded-sm w-full mt-2 mb-4"></div>
            <div className="grid sm:grid-cols-2 gap-8">
                {/* Get latest 4 posts here */}
                {posts.map((post, i) => i <= 4 && <PostCard title={post.title} image={post.img} key={post.url} url={post.url} date={post.date} readTime={post.readTime} />)}
            </div>
        </Layout>
    )
};

{/* <PostCard title="I wrote 1000 articles, what's next?" image="/assets/test.jpg" date="2022-01-02" readTime="10 mins" /> */ }