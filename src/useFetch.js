import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
          fetch(url, { signal: abortController.signal})
            .then(res => {
              if(!res.ok){
                throw Error('Could not fetch resource for that request!');
              }
              return res.json();
            })
            .then( data => {
              //console.log(data);
              setData(data);
              setIsPending(false);
            })
            .catch(err => {
              //console.log(err);
              if(err.message === 'AbortError'){
                console.log('Fetch Aborted!');
              }else{
                setError(err.message);
              }
            })
        }, 500);

        return () => abortController.abort();
      }, [url]); //this second empty array parameter declares that this time useEffect function will run only on first render only or use dependency for any variable(depend on the variable)

    return {data, isPending, error};
}

export default useFetch;