import React,{useState , useEffect} from 'react'

function Democomponent() {
    const [arr, setarr] = useState([2,2,2])
    var arr2 =[4 ,4 ,4];
    
    useEffect(() => { 
    setarr(...arr , ...arr2)
        console.log(arr2)
    }, [])
    
    return (
        <div>
                {arr.map(e=>e)}         
        </div>
    )
}

export default Democomponent

