import React,{useState} from 'react'

function Help() {
    const [color, setColor] = useState('#858585');
   
    const [isGrey, setIsGrey] = useState(true);
   
    

    const handleOne = (e) => {
      setIsGrey(!isGrey);
      setColor(isGrey ? '#37ECAB': '#858585');
    }
    const handleTwo = (e) => {
        setIsGrey(!isGrey);
        setColor(isGrey ? '#37E445': '#858585');
      }
    return (
    <div>
    <h4 value={isGrey} onClick={handleOne} className="one">1<div style={{ background:color}}  className="squareOne"></div></h4>
    <h4 value={isGrey} onClick={handleTwo} className="two">2<div style={{ background:color}} className="squareTwo"></div><div style={{ background:color}} className="squareTwo2"></div></h4>
    
    
 
  
</div>
    )
}

export default Help

//className="switch-container_text"
//<div style={{ color:textColor}} >advanced view</div>
//value={isGrey}
//