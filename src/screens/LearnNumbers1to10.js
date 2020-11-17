/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';

function LearnNumbers1to10() {
    const canvas = useRef();
    let ctx = null;
   
    // initialize the canvas context
    useEffect(() => {
      // dynamically assign the width and height to canvas
      const canvasEle = canvas.current;
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
   
      // get context of the canvas
      ctx = canvasEle.getContext("2d");
    }, []);
   
    useEffect(() => {
      const one = { x: 20, y: 20, w: 30, h: 30 };
      drawFillRect(one, { backgroundColor: '#37ECAB' });
   
      const two1 = { x: 20, y: 60, w: 30, h: 30 };
      drawFillRect(two1, { backgroundColor: '#FCBFE3' });

      const two2 = { x: 60, y: 60, w: 30, h: 30 };
      drawFillRect(two2, { backgroundColor: '#FCBFE3' });
   
      const three1 = { x: 20, y: 100, w: 30, h: 30 };
      drawFillRect(three1, { backgroundColor: '#FFCF55' });
      const three2 = { x: 60, y: 100, w: 30, h: 30 };
      drawFillRect(three2, { backgroundColor: '#FFCF55' });
      const three3 = { x: 100, y: 100, w: 30, h: 30 };
      drawFillRect(three3, { backgroundColor: '#FFCF55' });

      const four1 = { x: 20, y: 140, w: 30, h: 30 };
      drawFillRect(four1, { backgroundColor: '#61FF47' });
      const four2 = { x: 60, y: 140, w: 30, h: 30 };
      drawFillRect(four2, { backgroundColor: '#61FF47' });
      const four3 = { x: 100, y: 140, w: 30, h: 30 };
      drawFillRect(four3, { backgroundColor: '#61FF47' });
      const four4 = { x: 140, y: 140, w: 30, h: 30 };
      drawFillRect(four4, { backgroundColor: '#61FF47' });

      const five1 = { x: 20, y: 180, w: 30, h: 30 };
      drawFillRect(five1, { backgroundColor: '#3918FF' });
      const five2 = { x: 60, y: 180, w: 30, h: 30 };
      drawFillRect(five2, { backgroundColor: '#3918FF' });
      const five3 = { x: 100, y: 180, w: 30, h: 30 };
      drawFillRect(five3, { backgroundColor: '#3918FF' });
      const five4 = { x: 140, y: 180, w: 30, h: 30 };
      drawFillRect(five4, { backgroundColor: '#3918FF' });
      const five5 = { x: 180, y: 180, w: 30, h: 30 };
      drawFillRect(five5, { backgroundColor: '#3918FF' });

      const six1 = { x: 20, y: 220, w: 30, h: 30 };
      drawFillRect(six1, { backgroundColor: '#F89705' });
      const six2 = { x: 60, y: 220, w: 30, h: 30 };
      drawFillRect(six2, { backgroundColor: '#F89705' });
      const six3 = { x: 100, y: 220, w: 30, h: 30 };
      drawFillRect(six3, { backgroundColor: '#F89705' });
      const six4 = { x: 140, y: 220, w: 30, h: 30 };
      drawFillRect(six4, { backgroundColor: '#F89705' });
      const six5 = { x: 180, y: 220, w: 30, h: 30 };
      drawFillRect(six5, { backgroundColor: '#F89705' });
      const six6 = { x: 220, y: 220, w: 30, h: 30 };
      drawFillRect(six6, { backgroundColor: '#F89705' });

      const seven1 = { x: 20, y: 260, w: 30, h: 30 };
      drawFillRect(seven1, { backgroundColor: '#849FE5' });
      const seven2 = { x: 60, y: 260, w: 30, h: 30 };
      drawFillRect(seven2, { backgroundColor: '#849FE5' });
      const seven3 = { x: 100, y: 260, w: 30, h: 30 };
      drawFillRect(seven3, { backgroundColor: '#849FE5' });
      const seven4 = { x: 140, y: 260, w: 30, h: 30 };
      drawFillRect(seven4, { backgroundColor: '#849FE5' });
      const seven5 = { x: 180, y: 260, w: 30, h: 30 };
      drawFillRect(seven5, { backgroundColor: '#849FE5' });
      const seven6 = { x: 220, y: 260, w: 30, h: 30 };
      drawFillRect(seven6, { backgroundColor: '#849FE5' });
      const seven7 = { x: 260, y: 260, w: 30, h: 30 };
      drawFillRect(seven7, { backgroundColor: '#849FE5' });

      const eight1 = { x: 20, y: 300, w: 30, h: 30 };
      drawFillRect(eight1, { backgroundColor: '#F21212' });
      const eight2 = { x: 60, y: 300, w: 30, h: 30 };
      drawFillRect(eight2, { backgroundColor: '#F21212' });
      const eight3 = { x: 100, y: 300, w: 30, h: 30 };
      drawFillRect(eight3, { backgroundColor: '#F21212' });
      const eight4 = { x: 140, y: 300, w: 30, h: 30 };
      drawFillRect(eight4, { backgroundColor: '#F21212' });
      const eight5 = { x: 180, y: 300, w: 30, h: 30 };
      drawFillRect(eight5, { backgroundColor: '#F21212' });
      const eight6 = { x: 220, y: 300, w: 30, h: 30 };
      drawFillRect(eight6, { backgroundColor: '#F21212' });
      const eight7 = { x: 260, y: 300, w: 30, h: 30 };
      drawFillRect(eight7, { backgroundColor: '#F21212' });
      const eight8 = { x: 300, y: 300, w: 30, h: 30 };
      drawFillRect(eight8, { backgroundColor: '#F21212' });

      const nine1 = { x: 20, y: 340, w: 30, h: 30 };
      drawFillRect(nine1, { backgroundColor: '#31E1D7' });
      const nine2 = { x: 60, y: 340, w: 30, h: 30 };
      drawFillRect(nine2, { backgroundColor: '#31E1D7' });
      const nine3 = { x: 100, y: 340, w: 30, h: 30 };
      drawFillRect(nine3, { backgroundColor: '#31E1D7' });
      const nine4 = { x: 140, y: 340, w: 30, h: 30 };
      drawFillRect(nine4, { backgroundColor: '#31E1D7' });
      const nine5 = { x: 180, y: 340, w: 30, h: 30 };
      drawFillRect(nine5, { backgroundColor: '#31E1D7' });
      const nine6 = { x: 220, y: 340, w: 30, h: 30 };
      drawFillRect(nine6, { backgroundColor: '#31E1D7' });
      const nine7 = { x: 260, y: 340, w: 30, h: 30 };
      drawFillRect(nine7, { backgroundColor: '#31E1D7' });
      const nine8 = { x: 300, y: 340, w: 30, h: 30 };
      drawFillRect(nine8, { backgroundColor: '#31E1D7' });
      const nine9 = { x: 340, y: 340, w: 30, h: 30 };
      drawFillRect(nine9, { backgroundColor: '#31E1D7' });

      const ten1 = { x: 20, y: 380, w: 30, h: 30 };
      drawFillRect(ten1, { backgroundColor: '#DC2CB5' });
      const ten2 = { x: 60, y: 380, w: 30, h: 30 };
      drawFillRect(ten2, { backgroundColor: '#DC2CB5' });
      const ten3 = { x: 100, y: 380, w: 30, h: 30 };
      drawFillRect(ten3, { backgroundColor: '#DC2CB5' });
      const ten4 = { x: 140, y: 380, w: 30, h: 30 };
      drawFillRect(ten4, { backgroundColor: '#DC2CB5' });
      const ten5 = { x: 180, y: 380, w: 30, h: 30 };
      drawFillRect(ten5, { backgroundColor: '#DC2CB5' });
      const ten6 = { x: 220, y: 380, w: 30, h: 30 };
      drawFillRect(ten6, { backgroundColor: '#DC2CB5' });
      const ten7 = { x: 260, y: 380, w: 30, h: 30 };
      drawFillRect(ten7, { backgroundColor: '#DC2CB5' });
      const ten8 = { x: 300, y: 380, w: 30, h: 30 };
      drawFillRect(ten8, { backgroundColor: '#DC2CB5' });
      const ten9 = { x: 340, y: 380, w: 30, h: 30 };
      drawFillRect(ten9, { backgroundColor: '#DC2CB5' });
      const ten10 = { x: 380, y: 380, w: 30, h: 30 };
      drawFillRect(ten10, { backgroundColor: '#DC2CB5' });


      const ten11 = { x: 500, y: 40, w: 30, h: 30 };
      drawFillRect(ten11, { backgroundColor: '#DC2CB5' });
      const ten12 = { x: 540, y: 40, w: 30, h: 30 };
      drawFillRect(ten12, { backgroundColor: '#DC2CB5' });
      const ten13 = { x: 580, y: 40, w: 30, h: 30 };
      drawFillRect(ten13, { backgroundColor: '#DC2CB5' });
      const ten14 = { x: 620, y: 40, w: 30, h: 30 };
      drawFillRect(ten14, { backgroundColor: '#DC2CB5' });
      const ten15 = { x: 660, y: 40, w: 30, h: 30 };
      drawFillRect(ten15, { backgroundColor: '#DC2CB5' });
      const ten16 = { x: 500, y: 80, w: 30, h: 30 };
      drawFillRect(ten16, { backgroundColor: '#DC2CB5' });
      const ten17 = { x: 540, y: 80, w: 30, h: 30 };
      drawFillRect(ten17, { backgroundColor: '#DC2CB5' });
      const ten18 = { x: 580, y: 80, w: 30, h: 30 };
      drawFillRect(ten18, { backgroundColor: '#DC2CB5' });
      const ten19 = { x: 620, y: 80, w: 30, h: 30 };
      drawFillRect(ten19, { backgroundColor: '#DC2CB5' });
      const ten110 = { x: 660, y: 80, w: 30, h: 30 };
      drawFillRect(ten110, { backgroundColor: '#DC2CB5' });


      const ten120 = { x: 750, y: 40, w: 80, h: 80 };
      drawFillRect(ten120, { backgroundColor: '#DC2CB5' });
    }, []);
   
 
   
  //  draw square with background
    const drawFillRect = (info, style = {}) => {
      const { x, y, w, h } = info;
      const { backgroundColor = 'black' } = style;
   
      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(x, y, w, h);
    }
    return (
        <div className='learn1to10'>
        <h3>Learn Numbers 1 to 10</h3>
        <canvas ref={canvas}></canvas>  
        </div>
    )
}


export default LearnNumbers1to10
