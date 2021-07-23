/* eslint-disable prettier/prettier */
import { CCol, CImage, CRow } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'

const TeamBlocks = ({ data }) => {
  const minister = data.minister.map((person) => {
    return (
      <CCol
        xs={12 / data.minister.length}
        key={person.name}
        align="center"
        className="justify-content-center"
      >
        <CImage src={person.img} height="200rem" />
        <h3>{person.name}</h3>
      </CCol>
    )
  })
  return (
    <>
      <CRow className="justify-content-md-center">
        <h2>負責人：</h2>
        {minister}
      </CRow>
      <CRow className="justify-content-md-center">
        <h2>負責人：</h2>
        {minister}
      </CRow>
      <CRow className="justify-content-md-center">
        <h2>負責人：</h2>
        {minister}
      </CRow>
      <CRow className="justify-content-md-center">
        <h2>負責人：</h2>
        {minister}
      </CRow>
    </>
  )
}
TeamBlocks.propTypes = {
  data: PropTypes.array,
}
export default TeamBlocks
