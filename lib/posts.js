import fs from "fs"
import path from "path";

import matter from "gray-matter"

const postsDirectory = "./content";

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
        id,
        contentHtml: matterResult.content,
        ...matterResult.data,
    };
}

export async function getAllSortedPostData() {
    const wpm = 250;
    const arr = [];
    const fileNames = fs.readdirSync(postsDirectory);
    fileNames.map((fileName) => {
        if (!fileName.endsWith(".md"))
            return;

        const fileContents = fs.readFileSync(`${postsDirectory}/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        matterResult.data.url = fileName.replace(/\.md$/, '');
        matterResult.data.readTime = `${Math.floor((matterResult.content.length / wpm))} mins`;
        arr.push(matterResult.data);
    });

    // Sort by arr[i].data.date
    const sortedArr = arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return sortedArr;
}   