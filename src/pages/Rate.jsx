import React, { useMemo } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
// import { times } from "lodash";



function Rate({rating,onRating,count,color}) {
  // console.log(count,'count')

  // return Array(count)
  // .fill(0)
  // .map((_, i) => i + 1)

  // const arr1= Array(count).fill(0)
  // // console.log(arr1)
  // const arr2 = arr1.map((_, i)=>{
  //   return i+1
  // })

  const [hoverRating, setHoverRating] = React.useState(0);

  const getColor=(value)=>{
      console.log(value,'getcolor')
      // console.log(rating,'rating')
      if(hoverRating>=value){
            return color.filled;
      }else if(!hoverRating && rating >= value){
         return color.filled;
      }else{
        return color.unfilled
      }    
  }

 
  const memoFunction = useMemo(()=>{
     return Array(count).fill(0).map((_,i)=>i+1).map((value)=>{
       return (
         <>
                                      <FontAwesomeIcon
                                          key={value}
                                          className="cursor-pointer"
                                          icon='star'
                                          onClick={() => onRating(value)}
                                          style={{ color: getColor(value),cursor:"pointer" }}
                                          onMouseEnter={() => setHoverRating(value)}
                                          onMouseLeave={() => setHoverRating(0)}
                                      />
         </>
       )
     })
  },[count,rating,hoverRating])



        return (
          <>
                        {memoFunction}               
                        {/* {
                          Array(count).fill(0).map((_,i)=>i+1).map((value)=>{    
                              return (
                                <>
                                          <FontAwesomeIcon
                                              key={value}
                                              className="cursor-pointer"
                                              icon='star'
                                              onClick={() => onRating(value)}
                                              style={{ color: getColor(value),cursor:"pointer" }}
                                              onMouseEnter={() => setHoverRating(value)}
                                              onMouseLeave={() => setHoverRating(0)}
                                      />
                                </>
                              )      
                          })
                        } */}
          </>
         )

    }



  Rate.propTypes = {
    rating: PropTypes.string,
  }

  Rate.defaultProps = {
    count:5,
    color: {
      filled: "#f5eb3b",
      unfilled: "#DCDCDC",
    },
  }


 

export default Rate


