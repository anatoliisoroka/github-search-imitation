import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HiLocationMarker } from "react-icons/hi";
// src
import './style.scss';

function UserCard({ url }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        async function getUser() {
          const response = await axios.get(url)
          if (response?.data) {
            setUser(response.data)
          }
        }
    
        getUser()
    }, [url])

    return (
        <div className='user-card'>
            <a href={user.html_url}>
                <img className='user-avatar' src={user.avatar_url} />
            </a>
            <div>
                <div>
                    {user.name && 
                        <a className='user-name m-r-1' href={user.html_url}>
                            <span>{user.name}</span>
                        </a>
                    }
                    {user.login &&
                        <a className='user-login' href={user.html_url}>
                            <span>{user.login}</span>
                        </a>
                    }
                </div>
                {user.bio && <p>{user.bio}</p>}
                <div>
                    {user.location && <span className='m-r-1'><HiLocationMarker /> {user.location}</span>}
                    {user.followers && <span>{user.followers} followers</span>}                   
                </div>
            </div>
        </div>
    )
}

export default UserCard
