//-------------------------useEffect with HOOKS ||  AXIOS----------------------------
/*
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FData() {
    const [posts, setposts] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/post')

            .then(res => {
                console.log(res.data)

                setposts(res.data
                )
            })
            .catch( err => { console.log(err) })



         .finally(() => {
             setLoading(false);
        });
    }, [])

    // if (loading) {
    //     return <p>Data is loading....</p> ;
    // }
    // if (error || !Array.isArray(posts)) {
    //     return <p>There was an error loading your data!</p>;
    // }
    return (
        <div>
            <ul>{posts.map(post => (<li key={post.id}> {post.title} </li>))}</ul>
        </div>
    )
}

export default FData


*/
//-------------------------useEffect with HOOKS ||  AXIOS | Fetching required Post ----------------------------

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// function FData() {
//     const [posts, setposts] = useState({})
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState();
//     const [id, setid] = useState(1)
//     const [press, setpress] = useState(id)

//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${press}`)

//             .then(res => {
//                 console.log(res)
//                 setposts((res.data))
//             })

//             .catch(err => { console.log(err) })

//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [press])

//     if (loading) {
//         return <p>Data is loading...</p>;
//     }
//     // if (error || !Array.isArray(posts)) {
//     //     return <p>There was an error loading your data!</p>;
//     // }
//      let ButtonHandler = ()=>{setpress(id)}
//     return (
//         <div>
//             <input type="text" value={id} onChange={e => setid((e.target.value))} />
//             <div> {posts.title} </div>
//             <button onClick={ButtonHandler} >enter</button>

//         </div>
//     )
// }

// export default FData


//-------------------------useEffect with HOOKS ||  FETCH----------------------------

import React, { useState, useEffect } from 'react'

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setItems(result);
                })
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            })

    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h1> {item.title}  </h1>
                        {item.body}
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyComponent
