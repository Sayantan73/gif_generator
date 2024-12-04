import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

export const useGif = (tag) => {
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchData() {
      setLoading(true)
      
      const output = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = output.data.data.images.downsized_large.url
      console.log(imageSource);
      setGif(imageSource)
      setLoading(false)
    }
    
    
    useEffect( ()=>{
      fetchData()
    }, [])

    return {gif, loading, fetchData}

}
