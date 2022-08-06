import { useState, useEffect } from 'react';

export const useFetch = (url) =>{
    const [data, setData] = useState(null)          
    const [isPending, setIsPending] = useState(false) 
    const [error, setError] = useState(null)            


    useEffect(()=>{                                 

        const controller = new AbortController()    

        const fetchData = async () => {             
            
            setIsPending(true)  
                                                    
            try{                                    
            const response = await fetch(url, { signal: controller.signal})   
                                             
            if(!response.ok){
                throw new Error(response.statusText)
            }                                        

            const json = await response.json()      
            
            setIsPending(false)            

            setData(json)
            setError(null)                         
            } catch (err) {                        

            if (err.name === "AbortError"){         
                console.log("The fetch was aborted.")
                }else{            
                setIsPending(false)
                setError('Could not fetch the data')
                console.log(err.message)              
                }               
            }              

        }                                          

        fetchData()

        return () =>{                               //in this fct we will abort any fetch requests if there is an error
            controller.abort()                      //this method
        }
        
    }, [url])

    return { data, isPending, error}                             //we're returning here an object, so a data property which is using the data state
                                                    //we could actually shorten this to { data }
}



//now we can use this hook in the TripList component!

//try catch block is just a way to handle errors