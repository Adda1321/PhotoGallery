import React, { useEffect, useState } from 'react'
import { projectfirestore } from '../firegram/config'

const useImageHook = (collection) => {
    const [docs, setdocs] = useState([]);
    useEffect(() => {
         const unsub =   projectfirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                 });
                 
                 setdocs(documents)

            }); 

          return () => {
              unsub();
              console.log("unsub")
        }
    }, [collection])

    return docs
      
}

export default useImageHook;
