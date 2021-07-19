/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import './career.css'
import Recruitment_image from './Recruitment.png'
import Recommendation_image from './Recommendation.png'

const Career = () => {
  return (
    <div className="d-flex align-items-center career">
      <div className="row container mx-auto ">
        <div className="col d-flex justify-content-center">
          <Link to="">
            <img className="career_img img-fluid" src={Recruitment_image} alt="Recruitment" />
          </Link>
        </div>
        <div className="col d-flex justify-content-center">
          <Link to="">
            <img className="career_img img-fluid" src={Recommendation_image} alt="Recommendation" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Career
