/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../../../slices/loginSlice'
import { useHistory } from 'react-router'
import axios from 'axios'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormControl,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

const MatchForm = ({ identity, setOpened }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const senior = identity === 'senior' ? true : false
  const { email: userEmail, name: userName } = useSelector(selectLogin)

  const formTemplate = senior
    ? {
        name: userName,
        email: userEmail,
        major: '',
        school: '',
        number: 0,
        admission: [],
      }
    : {
        name: userName,
        email: userEmail,
        major: '',
        degree: '',
        hasPaper: false,
        account: '',
        school1: '',
        school2: '',
        school3: '',
      }
  const [requiredStyle, setRequiredStyle] = useState({
    title: '',
    name: '',
    desireWorkType: '',
  })
  const [dataForm, setDataForm] = useState(formTemplate)
  const [admissions, setAdmissions] = useState([''])
  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    if (requiredStyle.hasOwnProperty(e.target.name)) {
      if (e.target.value === '')
        setRequiredStyle({ ...requiredStyle, [e.target.name]: 'border-3 border-danger' })
      else setRequiredStyle({ ...requiredStyle, [e.target.name]: '' })
    }
  }
  const addArray = (e) => {
    setAdmissions((s) => [...s, ''])
  }
  const handleInputArray = (e, index) => {
    const newArray = admissions.map((s, idx) => {
      if (idx !== index) return s
      else return e.target.value
    })
    setAdmissions(newArray)
  }
  const handleDeleteArray = (e, index) => {
    const newArray = admissions.filter((s, idx) => idx !== index)
    setAdmissions(newArray)
  }
  const handleSubmit = () => {
    // axios
    //   .post('/api/', dataForm)
    //   .then(() => {
    //     alert('已新增')
    //     history.push('/mathcing')
    //   })
    //   .catch((err) => {
    //     err.response.data.description && alert('錯誤\n' + err.response.data.description)
    //   })
    setOpened(true)
  }
  return (
    <>
      <div className="d-flex flex-row align-items-center text-color-black">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="11" lg="9" xl="8">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>
                      {senior ? '學長姐' : '學弟妹'} 您好，請於2/1前填妥以下表單，我們才會幫您配對
                      {senior ? '輔導您的學長姐' : '您的學弟妹'}喔！
                    </h1>
                    <p className="text-medium-emphasis">開通EEChain</p>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cil-layers" />
                      </CInputGroupText>
                      <CFormControl
                        className={requiredStyle.name}
                        data-for="name"
                        data-tip="Use impressing title to get people's attention!"
                        placeholder="Name*"
                        value={dataForm.name}
                        name="title"
                        onChange={handleInputChange}
                      />
                      <ReactTooltip id="name" place="top" type="dark" effect="solid" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cil-building" />
                      </CInputGroupText>
                      <CFormControl
                        data-for="email"
                        data-tip="Enter your company's name"
                        placeholder="Email*"
                        value={dataForm.email}
                        name="mail"
                        onChange={handleInputChange}
                      />
                      <ReactTooltip id="email" place="top" type="dark" effect="solid" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon="cil-braille" />
                      </CInputGroupText>
                      <CFormControl
                        data-for="major"
                        data-tip="The position you are recruiting"
                        placeholder="Major"
                        value={dataForm.major}
                        name="major"
                        onChange={handleInputChange}
                      />
                      <ReactTooltip id="major" place="top" type="dark" effect="solid" />
                    </CInputGroup>
                    {senior ? (
                      <>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon="cil-dollar" />
                          </CInputGroupText>
                          <CFormControl
                            data-for="school"
                            data-tip="Salary paid (/month or /year)"
                            placeholder="School"
                            name="school"
                            value={dataForm.school}
                            onChange={handleInputChange}
                          />
                          <ReactTooltip id="school" place="top" type="dark" effect="solid" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon="cil-education" />
                          </CInputGroupText>
                          <CFormControl
                            data-for="number"
                            data-tip="Prefered education degree or major"
                            placeholder="number"
                            value={dataForm.number}
                            name="number"
                            onChange={handleInputChange}
                          />
                          <ReactTooltip id="number" place="top" type="dark" effect="solid" />
                        </CInputGroup>
                        {admissions.map((req, index) => {
                          return (
                            <CInputGroup className="mb-3" key={index}>
                              <CInputGroupText>
                                <CIcon icon="cil-thumb-up" />
                              </CInputGroupText>
                              <CFormControl
                                data-for="specialty"
                                data-tip="Enter your strength or other specialty"
                                placeholder="Speciality"
                                name="speciality"
                                value={req}
                                onChange={(e) => handleInputArray(e, index)}
                              />
                              <ReactTooltip id="specialty" place="top" type="dark" effect="solid" />
                              <CButton
                                type="button"
                                name="speciality"
                                onClick={(e) => handleDeleteArray(e, index)}
                              >
                                x
                              </CButton>
                            </CInputGroup>
                          )
                        })}
                        <CInputGroup className="mb-4 d-flex flex-row">
                          <CInputGroupText>
                            <CIcon icon="cil-thumb-up" />
                          </CInputGroupText>
                          <CButton
                            type="button"
                            name="speciality"
                            className="form-add"
                            onClick={addArray}
                            hidden={admissions.length >= 3}
                          >
                            +
                          </CButton>
                        </CInputGroup>
                      </>
                    ) : (
                      <></>
                    )}
                    <CRow className="justify-content-center mt-3">
                      <div className="d-flex d-flex justify-content-center">
                        <CButton
                          color="dark"
                          onClick={(e) => {
                            let miss = []
                            for (let info in requiredStyle) {
                              if (!dataForm[info]) {
                                miss.push(info)
                              }
                            }
                            if (miss.length !== 0) {
                              let missStyle = requiredStyle
                              for (let m of miss) {
                                missStyle[m] = 'border-3 border-danger'
                              }
                              alert(`You have to fill out ${miss}`)
                              setRequiredStyle({ ...requiredStyle, ...missStyle })
                              return
                            }
                            handleSubmit(e)
                          }}
                        >
                          確認送出
                        </CButton>
                      </div>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  )
}
MatchForm.propTypes = {
  identity: PropTypes.string,
  setOpened: PropTypes.func,
}
export default MatchForm
