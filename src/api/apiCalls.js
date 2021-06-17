// url imports
import { URL_POSTS } from "./baseUrl/BaseUrl"

//  async calls

// req to delete a post
export const Delete = async (post) => {
    // console.log(post.id)
    await fetch(`${URL_POSTS}/${post.id}`,{
      method: 'DELETE'
    }).then(() => {
      console.log('deleted')
    }).catch((err) => {
      console.log(err.message)
    } )
}

// req to like a post
export const Like = async (post) => {
    await fetch(`${URL_POSTS}/${post.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        likes: post.likes+1
      })
    }).then(() => {
      console.log('updates')
    }).catch((err) => {
      console.log(err.message)
    })
}

// to unlike the liked post  
export const UnLike = async (post) => {
  await fetch(`${URL_POSTS}/${post.id}`,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      likes: post.likes
    })
  }).then(() => {
    console.log('updates')
  }).catch((err) => {
    console.log(err.message)
  })
}