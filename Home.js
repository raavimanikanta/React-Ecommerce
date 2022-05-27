import React, { useCallback, useContext } from 'react'
import { UserContext } from './UseContext'

const Home = () => {
    const [data,setdata]=useContext(UserContext)
  return (
    <div>
         
        {
            data.map((result=>
                <div>
                <div>
                    <h2>{result.name}</h2>
                    <p>{result.brandName}</p>
                    <p>{result.category}</p>
                    <p>{result.companyAssured}</p>
                    <p>Rating :{result.rating}</p>
                    
                </div>
                <div>
                    <img src={result.imageURL} alt="" className='images'/>
                </div>
                </div>
                ))
        }
    </div>


  )
}

export default Home