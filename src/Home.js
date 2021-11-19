import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  //  const [blogs, setBlogs] = useState([
  //    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  //    { title: 'Hello World!', body: 'lorem ipsum doler...', author: 'Usman', id: 4 }
  //  ])
  // const [name, setName] = useState('Ali');
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
  
  // useEffect( ()  => {
    //   console.log('UseEffect ran');
    // }, [name]); //name variable is useEffect dependency, so whenever name changes only useEffect will run instead on every rerender
  const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
    
      {/* {blogs && <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}/>} */}
      {/* <button onClick={ () => setName('Ahmad')}> Change Name</button>
      <p> {name} </p> */}
     {/* <BlogList blogs = {blogs.filter( (blog) => blog.author === 'Usman')} title = "Usman's Blogs"/> */}
      {error && <div> {error} </div>}
      {!error && isPending && <div>Loading... </div>}
      {blogs && <BlogList blogs = {blogs} title = "All Blogs!"/>}
    </div>
  );
}
 
export default Home;

/*     const title = 'Welcome to the New Blog Usman';
    const [likes, setLikes] = useState(Math.ceil(Math.random() * 1000));
    const [views, setViews] = useState(Math.ceil(Math.random() * 10000));
    //const obj1 = { name: 'usman', age: '30'}; // we can't return this object directly (also booleans) below like strings and others
    const link = "https://www.youtube.com/PlayU2U";
    const handleClick = () => {
          setLikes( Math.ceil(Math.random() * 1000));
    }
    const handleClickAgain = (name, eventObject) => {
      //console.log(`Hello ${name}!` + eventObject.target);
      setViews(Math.ceil(Math.random() * 10000));
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <a
            className="App-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            PlayU2U
          </a>
          <h1> { title } </h1>
          <p> 👍<b> {likes}</b>  <b> 👁 { views }</b> </p>
          <p><br></br></p>
          <button onClick={handleClick}>Update Likes</button> &nbsp; &nbsp;
          <button onClick={(e) => handleClickAgain('Usman', e)}> Update Views</button>
        </div>
     );
}
 
export default Home; */