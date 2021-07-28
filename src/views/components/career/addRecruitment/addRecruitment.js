/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useHistory } from 'react-router'
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
  CRow,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const formTemplate = {
  title: '',
  companyName: '',
  workType: '',
  salary: '',
  experience: [''],
  diploma: '',
  requirement: [''],
  description: [''],
  file: '',
  id: '',
}
const AddRecruitment = () => {
  const history = useHistory()
  const [isExpand, setIsExpand] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [previewURL, setPreviewURL] = useState(null)
  const [fileButton, setFileButton] = useState(null)
  const [recruitmentForm, setRecruitmentForm] = useState(formTemplate)
  const handleInputChange = (e) => {
    setRecruitmentForm({ ...recruitmentForm, [e.target.name]: e.target.value })
  }
  const addArray = (e) => {
    const newArray = recruitmentForm[e.target.name].push('')
    setRecruitmentForm({ ...recruitmentForm, [e.target.name]: newArray })
    console.log('after add array:', recruitmentForm)
  }
  const handleInputArray = (e, index) => {
    const newArray = recruitmentForm[e.target.name].splice(index, 1, e.target.value)
    setRecruitmentForm({ ...recruitmentForm, [e.target.name]: newArray })
    console.log('this is recruiform:', recruitmentForm)
  }
  const handleChangeImage = (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]
    setFileButton(e.target)
    setRecruitmentForm({ ...recruitmentForm, file: file })
    reader.onloadend = () => {
      setPreviewURL(reader.result)
    }
    reader.readAsDataURL(file)
    // call the modal
    setIsModal(true)
  }

  const clearImage = (e) => {
    setIsModal(false)
    setPreviewURL(null)
    setRecruitmentForm({ ...recruitmentForm, file: null })
    fileButton.value = ''
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: {
        title: recruitmentForm.title,
        company_name: recruitmentForm.companyName,
        work_type: recruitmentForm.workType,
      },
      info: {
        salary: recruitmentForm.salary,
        experience: recruitmentForm.experience,
        diploma: recruitmentForm.diploma,
      },
      spec: {
        requirement: recruitmentForm.requirement,
        description: recruitmentForm.description,
      },
      image: recruitmentForm.file,
      id: recruitmentForm.id,
    }
    console.log(post)
    fetch('recruitmentPosts.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    }).then(history.push('/'))
  }
  return (
    <>
      <CModal visible={isModal} onDismiss={() => setIsModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setIsModal(false)}>
          <CModalTitle>Preview Your Photo</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <img src={previewURL} className="img-fluid container justify-content-center d-flex" />
        </CModalBody>
        <CModalFooter>
          <CButton color="warning" onClick={clearImage}>
            Clear
          </CButton>
          <CButton color="dark" onClick={() => setIsModal(false)}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
      <div className="min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="11" lg="9" xl="8">
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Ready to post a recruitment?</h1>
                    <p className="text-medium-emphasis">Create your recruitment</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                      <CFormControl
                        placeholder="The job title"
                        name="title"
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon name="cil-education" />
                      </CInputGroupText>
                      <CFormControl
                        placeholder="Company name"
                        name="companyName"
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                      <CFormControl
                        placeholder="Work Type"
                        name="workType"
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                      <CFormControl
                        placeholder="Salary"
                        name="salary"
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    {/* <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormControl
                        placeholder="Experience"
                        name="experience"
                        onChange={handleInputChange}
                      />
                    </CInputGroup> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormControl
                        placeholder="Diploma"
                        name="diploma"
                        onChange={handleInputChange}
                      />
                    </CInputGroup>
                    {recruitmentForm.experience.map((exp, index) => {
                      return (
                        <CInputGroup className="mb-3" key={index}>
                          <CInputGroupText>@</CInputGroupText>
                          <CFormControl
                            placeholder="Required Experience"
                            name="experience"
                            onChange={handleInputArray}
                          />
                          <button onClick={addArray}></button>
                        </CInputGroup>
                      )
                    })}
                    <CInputGroup
                      className="mb-3"
                      onMouseEnter={() => setIsExpand(true)}
                      onFocus={() => setIsExpand(true)}
                      onBlur={() => setIsExpand(false)}
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
                    <CRow className="justify-content-center mt-3">
                      <div className="d-flex justify-content-center">
                        <CButton color="dark" onClick={handleSubmit}>
                          Post A Recruitment
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

export default AddRecruitment
