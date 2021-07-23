/* eslint-disable prettier/prettier */
import React from 'react'
import { Chrono } from 'react-chrono'
import HistBlock from './HistBlock'
import PropTypes from 'prop-types'
import { CCol, CContainer, CImage, CRow } from '@coreui/react'

const Timeline = ({ data }) => {
  const items = data.history.map((year) => {
    return {
      title: year.grade,
      cardTitle: year.title,
    }
  })

  return (
    <div style={{ width: '100%' }}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" slideShow slideItemDuration={4500}>
        {data.history.map((year) => {
          return <HistBlock people={year.people} key={year.grade} />
        })}
      </Chrono>
      <CContainer>
        <CRow className="justify-content-center align-items-center">
          <CCol xs={6} className="justify-content-center">
            <CImage src={data.allImg} alt="" fluid style={{ margin: 'shadow' }} />
          </CCol>
          <CCol xs={4}>
            <h3>今年部員:</h3>
            {data.member.map((person) => {
              return (
                <span key={person} style={{ fontSize: '1.3rem' }}>
                  {person}{' '}
                </span>
              )
            })}
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
Timeline.propTypes = {
  data: PropTypes.array,
}

export default Timeline
