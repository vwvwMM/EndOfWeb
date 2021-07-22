/* eslint-disable prettier/prettier */
import React from 'react'
import { CCol, CContainer, CRow, CImage } from '@coreui/react'
import PropTypes from 'prop-types'

const HistBlock = ({ people }) => {
  return (
    <CContainer className="align-items-center">
      {/* for desktop and ipad */}
      <CRow className="justify-content-around d-sm-none d-lg-flex">
        {people.map((person) => {
          return (
            <CCol xs={3} key={person.name} align="center" className="justify-content-center">
              <img src={person.img} alt="" width="100%" />
              <h3>{person.name}</h3>
            </CCol>
          )
        })}
      </CRow>
      {/* for mobile */}
      <CRow className="justify-content-center d-xs-flex d-lg-none">
        {people.map((person) => {
          return (
            <CRow className="justify-content-center" key={person.name} align="center">
              <CImage src={person.img} alt="" fluid style={{ height: '20%', width:'10%'}} />
              <h3>{person.name}</h3>
            </CRow>
          )
        })}
      </CRow>
    </CContainer>
  )
}
HistBlock.propTypes = {
  people: PropTypes.array,
}
export default HistBlock
