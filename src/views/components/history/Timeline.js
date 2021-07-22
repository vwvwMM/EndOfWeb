/* eslint-disable prettier/prettier */
import React from 'react'
import { Chrono } from 'react-chrono'
import { CCol, CContainer, CRow } from '@coreui/react'
import HistBlock from './HistBlock'
import PropTypes from 'prop-types'

const Timeline = ({ data }) => {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
    },
  ]
  const blocks = (year) => {
    return (
      <div className="chrono-icons">
        {year.people.map((person) => {
          return (
            <div key={person.name}>
              <img src={person.img} alt="" />
              <h3>{person.name}</h3>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <Chrono items={items} mode="VERTICAL_ALTERNATING">
      <CContainer className="align-items-center">
        {/* for desktop and ipad */}
        <CRow className="justify-content-between d-sm-none d-lg-flex">
          <CCol xs="5">
            <img src="https://picsum.photos/324/170" alt="" />
            <h3>greger</h3>
          </CCol>
          <CCol xs="5">
            <img src="https://picsum.photos/324/170" alt="" />
            <h3>greger</h3>
          </CCol>
        </CRow>
        {/* for mobile */}
        <CRow className="justify-content-center d-xs-flex d-lg-none">
          <CRow className="justify-content-center mb-3">
            <img src="https://picsum.photos/124/70" alt="" />
            <h3>greger</h3>
          </CRow>
          <CRow className="justify-content-center mt-3">
            <img src="https://picsum.photos/124/70" alt="" />
            <h3>greger</h3>
          </CRow>
        </CRow>
      </CContainer>
    </Chrono>
  )
}
Timeline.propTypes = {
  data: PropTypes.object,
}

export default Timeline
