import React from 'react'
import { CCol, CFooter, CRow } from '@coreui/react'
import eesa from '../assets/images/eesa-icon.png'

const AppFooter = () => {
  return (
    <div>
      <CRow
        lg={10}
        style={{
          backgroundColor: '#002958',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="justify-content-center"
      >
        <CCol xs={10}>
          國立臺灣大學電機工程學系 系學會 <br />
          <div style={{ fontWeight: '600' }}>
            National Taiwan University Electrical Engineering Department Student Association <br />{' '}
            Email: ntueesa@gmail.com
          </div>
        </CCol>
        <CCol xs={2}>
          <img src={eesa} alt="eesa" className="img-fluid" />
        </CCol>
      </CRow>
      <CRow
        className="d-flex flex-column align-items-center text-center"
        lg={2}
        style={{ backgroundColor: '#001936', fontSize: '1rem', width: '100%' }}
      >
        Copyright © 2021 NTUEESA
      </CRow>
    </div>
  )
}

export default React.memo(AppFooter)
