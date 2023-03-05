import fs from "fs"
import matter from "gray-matter"

const postsDirectory = "./content";

(async () => {
    const arr = [];
    const fileNames = fs.readdirSync(postsDirectory);
    fileNames.map((fileName) => {
        const nFileName = fileName.replace(/\.md$/, '');
        arr.push({ ...nFileName });
    });
    console.log(arr);
    // Sort by arr[i].data.date
    // const sortedArr = arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // return sortedArr;
})();
