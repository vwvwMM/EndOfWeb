/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormControl,
  CInputGroup,
  CInputGroupText,
  CListGroup,
  CListGroupItem,
  CRow,
  CCollapse,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const AddRecruitment = () => {
  const [title, setTitle] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [workType, setWorkType] = useState('')
  const [salary, setSalary] = useState('')
  const [experience, setExperience] = useState('')
  const [diploma, setDiploma] = useState('')
  const [requirement, setRequirement] = useState([])
  const [description, setDescription] = useState([])
  const [image, setImage] = useState('')
  const [id, setId] = useState('')
  return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="11" lg="9" xl="8">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Just A Few Steps to Join EE+!</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                    <CFormControl
                      placeholder="Your Chinese Name"
                      name="username"
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon name="cil-education" />
                    </CInputGroupText>
                    <CFormControl
                      placeholder="Student ID"
                      name="account"
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormControl
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormControl
                      type="password"
                      placeholder="Repeat password"
                      name="ConfirmPassword"
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormControl placeholder="Email" name="Email" onChange={handleInputChange} />
                  </CInputGroup>
                  <CInputGroup
                    className="mb-3"
                    onMouseEnter={expand}
                    onFocus={expand}
                    onBlur={constract}
                  >
                    <CInputGroupText>
                      <CIcon name="cil-image" />
                    </CInputGroupText>
                    <CFormControl
                      id="formFile"
                      type="file"
                      onChange={handleChangeImage}
                    ></CFormControl>
                  </CInputGroup>
                  <CCollapse visible={isExpand} onMouseLeave={constract}>
                    <CListGroup>
                      <CListGroupItem color="info">
                        ID photo should contain your <b>full name</b> and <b>intact, clear face</b>.
                      </CListGroupItem>
                      <CListGroupItem color="success">
                        ID photo is used to confirm your identity, and will be auto deleted after
                        account is activated
                      </CListGroupItem>
                      <CListGroupItem color="warning">
                        The size of photo is at most <b>1MB</b>.
                      </CListGroupItem>
                    </CListGroup>
                    <div className="d-flex justify-content-end">
                      {previewURL ? (
                        <CLink color="link" onClick={openModal} style={{ cursor: 'pointer' }}>
                          Preview Again?
                        </CLink>
                      ) : (
                        <></>
                      )}
                    </div>
                  </CCollapse>
                  <CRow className="justify-content-center mt-3">
                    <div className="d-flex justify-content-center">
                      <CButton color="dark" onClick={handleSubmit}>
                        Create Account
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
  )
}

export default AddRecruitment
