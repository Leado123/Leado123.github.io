import { MDXEditor } from "@mdxeditor/editor";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog () {

    const { file } = useParams();
    const [blog, setBlog] = useState<string>("");
    
    useEffect(() => {
        fetch(`/blog/${file}.md`)
            .then(response => response.text())
            .then(data => setBlog(data))
            .then(() => console.log(blog))
    }, [file]);

    return (
        <div>
            <MDXEditor readOnly markdown={blog} />
        </div>
    )
}

export default Blog