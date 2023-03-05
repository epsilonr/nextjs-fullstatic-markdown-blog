import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiFillHome } from "react-icons/ai";
import { IoMdArrowRoundBack, IoMdRefresh } from "react-icons/io"

export default function NoPage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="description" content="This page doesn't exist" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Page not Found</title>
            </Head>
            <main className="bg-secondary text-gray-200 overflow-hidden w-full h-screen flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center mb-4">
                    <p className="text-xl font-thin">Page not Found</p>
                    <h1 className="font-bold text-4xl font-mono">Error 404</h1>
                </div>
                <div className="flex justify-center font-medium items-center text-gray-400 gap-x-4">
                    <button className="w-20 h-20 flex flex-col justify-center items-center rounded-md hover:bg-primary cursor-pointer" onClick={() => router.back()}>
                        <IoMdArrowRoundBack size={24} />
                        <p>Back</p>
                    </button>
                    <Link className="w-20 h-20 flex flex-col justify-center items-center rounded-md hover:bg-primary cursor-pointer" href="/">
                        <AiFillHome size={24} />
                        <p>Home</p>
                    </Link>
                    <button className="w-20 h-20 flex flex-col justify-center items-center rounded-md hover:bg-primary cursor-pointer" onClick={() => router.reload()}>
                        <IoMdRefresh size={24} />
                        <p>Refresh</p>
                    </button>
                </div>
            </main>
        </>
    )
};