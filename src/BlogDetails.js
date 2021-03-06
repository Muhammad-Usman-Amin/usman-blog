import { useHistory, useParams } from "react-router-dom"; 
//import { useHistory, useParams } from "react-router"; //these both imports work and I don't know why....
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2> Blog Details - { id } </h2> */}
            { isPending && <div> Loading </div>  }
            { error && <div> { error } </div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p> Written by: { blog.author }</p>
                    <div className="blog-body">
                        { blog.body}
                    </div>
                    <button onClick= {handleDelete}> Delete </button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;