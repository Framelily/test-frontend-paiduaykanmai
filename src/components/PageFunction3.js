import React from 'react';

function PageFunction3() {

  const checkMaxSecond = (data)=>{
    if (data.length == 0) {
      return null
    }

    if (data.length == 1) {
      return data[0]
    }

    if (data.length > 1) {
      let max = -Infinity, result = -Infinity;
      for (const value of data) {
        const nr = Number(value)
        
        if (nr > max) {
          [result, max] = [max, nr]
        } else if (nr < max && nr > result) {
          result = nr;
        }
      }
      
      if (result == -Infinity) {
        return 'No second max value';
      } else {
        return result;
      }
    }
  }

  return (
    <div>
      <div className="boxcode">
        <p>[] // {checkMaxSecond([])}</p>
        <p>[1] // {checkMaxSecond([1])}</p>
        <p>[1,2,3] // {checkMaxSecond([1,2,3])}</p>
        <p>[1,1] // {checkMaxSecond([1,1])}</p>
        <p>[1,2,3,4,5,6] // {checkMaxSecond([1,2,3,4,5,6])}</p>
        <p>[1,5,3,2,5,10] // {checkMaxSecond([1,5,3,2,5,10])}</p>
        <p>[100,5,3,2,99] // {checkMaxSecond([100,5,3,2,99])}</p>
        <p>[35,5,3,2,5,100] // {checkMaxSecond([35,5,3,2,5,100])}</p>
        <p>[1,5,101,2,5,10] // {checkMaxSecond([1,5,101,2,5,10])}</p>
        <p>[10,10,9] // {checkMaxSecond([10,10,9])}</p>
      </div>
    </div>
  );
}

export default PageFunction3;