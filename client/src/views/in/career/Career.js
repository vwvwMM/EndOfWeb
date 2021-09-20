/* eslint-disable prettier/prettier */
import React from 'react'
import { Link } from 'react-router-dom'
import { CCol, CRow, CContainer, CImage } from '@coreui/react'
import { Recruitment_image, Recommendation_image } from './index'

const Career = () => {
  return (
    <div className="d-flex flex-row align-items-center career">
      <CContainer className="align-items-center">
        {/* for desktop and ipad */}
        <CRow className="justify-content-around d-flex">
          <CCol md="4" sm="8">
            <h3 className="text-light text-center my-4">
              Companies are looking for capable employees!
            </h3>
            <Link className="d-flex justify-content-center" to="/recruitment">
              <CImage
                src={Recruitment_image}
                alt="Register by Account"
                className="career_img img-fluid"
              />
            </Link>
          </CCol>
          <CCol md="4" sm="8">
            <h3 className="text-light text-center my-4">See some awesome people in NTUEE!</h3>
            <Link className="d-flex justify-content-center" to="/recommendation">
              <CImage
                src={Recommendation_image}
                alt="Register by Account"
                className="career_img img-fluid"
              />
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Career
