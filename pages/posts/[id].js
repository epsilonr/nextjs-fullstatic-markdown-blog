/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */

import { getPostData, getAllPostIds } from "@/lib/posts";
import Layout from "@/components/Layout"
import Date from "@/components/Date";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {

    return (
        <Layout title={postData.title}>
            <article className="content">
                <img src={postData.img} alt={postData.title} className="w-full rounded-md mb-4" />
                <h1>{postData.title}</h1>
                <Date dateString={postData.date} className="text-gray-500" />
                <ReactMarkdown
                    className="mt-4 whitespace-pre-wrap"
                    children={postData.contentHtml}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={atomDark}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                />
            </article>
        </Layout>
    );
}
