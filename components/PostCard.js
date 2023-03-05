/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { AiFillRead } from "react-icons/ai";
import Date from "./Date";

export default function PostCard({ title, image, date, readTime, url }) {
    return (
        <article>
            <Link href={`/posts/${url}`} className="group w-full h-full">
                {/* Replace those placeholders with fetched data */}
                <img src={image} alt={title} className="w-full h-48 rounded-md mb-4" />
                <h1 className="font-bold text-2xl truncate group-hover:text-red-500 transition-colors duration-150">{title}</h1>
                <div className="flex items-center text-gray-400">
                    <Date dateString={date} />
                    <div className="bg-gray-400 mx-2 p-[2px] rounded-full"></div>
                    <AiFillRead className="mr-1" />
                    <p>{readTime}</p>
                </div>
            </Link>
        </article>
    )
};