export interface Article {
    title: string;
    date: string;
    file: string;
    description: string;
    tags: string[];
}

const ArticleIndex: Article[] = [
    {
        title: "Free Resources for Students",
        file: "free_resources",
        date: "2025-03-15",
        description: "A list of free resources for students",
        tags: ["resources", "students"]
    }
]

export default ArticleIndex