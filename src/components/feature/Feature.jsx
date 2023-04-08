import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

            // Using "Props" word
// const Feature = (props) => {
//   return (
//     <div className="gpt3__features-container__feature">
//       <div className="gpt3__features-container__feature-title">
//         <div />
//         <h1>{props.title}</h1>
//       </div>
//       <div className="gpt3__features-conatiner__feature-text">
//         {props.text}
//       </div>
//     </div>
//   )
// }

export default Feature