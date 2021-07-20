/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetBrand, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { CChart } from '@coreui/react-chartjs'

const Recommendation = ({ withCharts }) => {
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetBrand
          className="mb-4"
          headerChildren={
            <>
              <CIcon name="cib-facebook" height="52" className="my-4 text-white" />
            </>
          }
          values={[['89k', 'friends']]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetBrand
          className="mb-4"
          headerChildren={
            <>
              <CIcon name="cib-twitter" height="52" className="my-4 text-white" />
            </>
          }
          values={[['973k', 'followers']]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>
    </CRow>
  )
}

Recommendation.propTypes = {
  withCharts: PropTypes.bool,
}

export default Recommendation
