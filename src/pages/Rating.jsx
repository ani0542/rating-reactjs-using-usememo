// const Rating = () => {
    // const [rating, setRating] = useState(0);
    // const [rating2, setRating2] = useState(0);
//     return (
//       <>
//         <Header title="Star rating page" />
  
//         <ExternalInfo page="starRating" />
  
//         <div className="row">
//           <div className="col text-center">
//             <h2>Rate me</h2>
//             <p>Rating component</p>
//             <Rate rating={rating} onRating={(rate) => setRating(rate)} />
//             <p>Rating - {rating}</p>
//             <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
//             <p>Rating - {rating2}</p>
//           </div>
//         </div>
//       </>
//     );
//   };
//   //color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//   //count={10}
//   export default Rating;




// import React from 'react'
// import Rate from './Rate';

// function Rating() {

//     const [rating, setRating] = React.useState(0);
//     const [rating2, setRating2] = React.useState(0);
    
//     return (
//         <>
//                 <div className="row">
//                         <div className="col text-center">
//                             <h2>Rate me</h2>
//                             <p>Rating component</p>
//                                <Rate rating={rating} onRating={(rate) => setRating(rate)} />
//                             <p>Rating - {rating}</p>
//                                 <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
//                             <p>Rating - {rating2}</p>
//                         </div>
//                  </div>
//         </>
//     )
// }

// export default Rating




import React from 'react'
import Rate from './Rate';


function Rating() {

    const [rating, setRating] = React.useState(0);


    const handleRating =(value)=>{
        setRating(value)
    }

    // console.log(rating,'rating')

    return (
        <>
               <div className="row">
                      <div className="col text-center">
                          <h2>Rate me</h2>
                          <p>Rating component</p>
                          <Rate  rating={rating}  onRating={handleRating}/>
                          <p>Rating - {rating}</p>
                      </div>
               </div>
        </>
    )
}

export default Rating
