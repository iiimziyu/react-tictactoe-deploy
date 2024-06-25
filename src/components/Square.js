import React  from 'react';
import "./Square.css";

// 해당 파일을 다른 곳에서도 사용할 수 있게 export로 선언
const Square = ({ onClick, value }) => { 
   
    return (
        <button className="square"
            onClick={onClick}>
            {value}
        </button>
    )

}
 
export default Square; 