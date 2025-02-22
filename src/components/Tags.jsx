import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from './Spinner'
import { useGif } from '../hooks/useGif'

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

export const Tags = () => {
    const [tag, setTag] = useState('')
    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false)

    // async function fetchData() {
    //   setLoading(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'}&tag=${tag}`
    //   const output = await axios.get(url);
    //   const imageSource = output.data.data.images.downsized_large.url
    //   console.log(imageSource);
    //   setGif(imageSource)
    //   setLoading(false)
    // }
    
    
    // useEffect( ()=>{
    //   // fetchData()
    // }, [])

    const {gif, loading, fetchData} = useGif(tag)



  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {loading ? (<Spinner/>) : (<img src={gif} alt="" width='450'/>)}

        <input className='w-10/12 text-lg py-2 rounded-lg mb-[2px] text-center' onChange={(event)=> setTag(event.target.value)} type="text" value={tag}/>
        
        <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]' onClick={()=> fetchData()}>Generate</button>
    </div>
  )
}
