import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../config/constant'    //this is useful as we can need to change url only at constant file
import { Link, useNavigate } from 'react-router-dom'

function AllPosts() {

    //Create a variable to store all posts and a set method to update the value of posts then
    //useState hook helps us create this variable with empty array
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false)

    // function getAllPosts() {}
    //ES6 function to load get all posts from REST API
    const gelAllPosts = () => {
        setLoader(true)
        fetch(`${API_BASE_URL}/posts`)
            .then((response) => response.json())
            .then((json) => {
                //console.log(json)
                setPosts(json)
                setLoader(false)
            });
    }

    //we want to load data on page load of this component
    useEffect(() => {
        //console.log("All Posts loaded")
        gelAllPosts();
    }, []);//empty array means executes only once when component loads
    return (
        <div className='container'>
            <section className='container pt-2'>
                <h3 className='text-center text-uppercase py-4'>All Posts</h3>
                <div id="alertmessage"></div>
                <div className='row'>
                    {
                        loader ?
                            <div className='col-12 text-center'>
                                <div className='spinner-border text-primary' role='status'>
                                    <span className='visually-hidden'>Loading...</span>
                                </div>
                            </div>
                            : posts.map((post, index) => {
                                return <div key={index} className='col-lg-4 col-md-4 col-sm-12 mb-2'>
                                    <div className="card">
                                        <img style={{ height: '300px' }} src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                            <div className='d-grid'>
                                                <Link to={`/posts/${post.id}/${post.userId}`} className="btn btn-primary text-uppercase">
                                                    <i className='fa-solid fa-location-arrow'></i> Detail
                                                </Link> {/*This is known as Dynamic Routing*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </section>
        </div>
    )
}

export default AllPosts