/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectLogin } from '../../../slices/loginSlice'
import { useHistory } from 'react-router'
import axios from 'axios'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormControl,
  CButton,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

const MatchForm = ({ identity, setOpened }) => {
  const history = useHistory()
  const senior = identity === 'senior' ? true : false
  const { email: userEmail, name: userName } = useSelector(selectLogin)

  const formTemplate = senior
    ? {
        name: userName,
        email: userEmail,
        major: '',
        school: '',
        number: 0,
        admission: '',
      }
    : {
        name: userName,
        email: userEmail,
        major: '',
        degree: '',
        hasPaper: 0,
        account: '',
        school1: '',
        school2: '',
        school3: '',
      }
  const [requiredStyle, setRequiredStyle] = useState(
    senior
      ? {
          name: '',
          email: '',
          major: '',
          school: '',
          number: '',
        }
      : {
          name: '',
          email: '',
          major: '',
          degree: '',
          hasPaper: '',
          account: '',
          school1: '',
          school2: '',
          school3: '',
        },
  )
  const [dataForm, setDataForm] = useState(formTemplate)
  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    if (requiredStyle.hasOwnProperty(e.target.name)) {
      if (e.target.value === '')
        setRequiredStyle({ ...requiredStyle, [e.target.name]: 'border-3 border-danger' })
      else setRequiredStyle({ ...requiredStyle, [e.target.name]: '' })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let mjr = []
    if (dataForm.major.includes(',')) {
      mjr = dataForm.major.split(',')
    }
    if (dataForm.major.includes('，')) {
      mjr = dataForm.major.split('，')
    }
    mjr = mjr.map((m) => (m = m.trim()))

    console.log('now we have majors:', mjr)
    if (senior) {
      let ad = []
      if (dataForm.admission.includes(',')) {
        ad = dataForm.admission.split(',')
      }
      if (dataForm.admission.includes('，')) {
        ad = dataForm.admission.split('，')
      }
      ad = ad.map((a) => (a = a.trim()))
      console.log('now we have admissions:', ad)
      setDataForm((f) => {
        return { ...f, ['admission']: ad, ['school']: mjr }
      })
    } else {
      let sch1 = []
      let sch2 = []
      let sch3 = []
      if (dataForm.school1.includes(',')) {
        sch1 = dataForm.school1.split(',')
      }
      if (dataForm.school1.includes('，')) {
        sch1 = dataForm.school1.split('，')
      }
      sch1 = sch1.map((a) => (a = a.trim()))
      console.log('now we have school1s:', sch1)

      if (dataForm.school2.includes(',')) {
        sch2 = dataForm.school2.split(',')
      }
      if (dataForm.school2.includes('，')) {
        sch2 = dataForm.school2.split('，')
      }
      sch2 = sch2.map((a) => (a = a.trim()))
      console.log('now we have school2s:', sch2)

      if (dataForm.school3.includes(',')) {
        sch3 = dataForm.school3.split(',')
      }
      if (dataForm.school3.includes('，')) {
        sch3 = dataForm.school3.split('，')
      }
      sch3 = sch3.map((a) => (a = a.trim()))
      console.log('now we have school3s:', sch3)

      setDataForm((f) => {
        return { ...f, ['school1']: sch1, ['school2']: sch2, ['school3']: sch3, ['school']: mjr }
      })
    }
    axios.post('/api/')
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
    <div className="matching-form">
      <div className="d-flex flex-row align-items-center text-color-black">
        <CRow className="justify-content-center">
          <CCol md="11" lg="10" xl="9">
            <CCard className="mx-2">
              <CCardBody className="p-5">
                <CForm>
                  <h2>
                    {senior ? '學長姐' : '學弟妹'}您好，請於2/1前填妥以下表單，我們才會幫您配對
                    {senior ? '您的學弟妹' : '輔導您的學長姐'}喔！
                  </h2>
                  <p className="text-medium-emphasis">開通EEChain</p>

                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-layers" />
                    </CInputGroupText>
                    <CFormControl
                      className={requiredStyle.name}
                      data-for="name"
                      data-tip="Please fill in your name"
                      placeholder="Name*"
                      value={dataForm.name}
                      name="title"
                      onChange={handleInputChange}
                    />
                    <ReactTooltip id="name" place="top" type="dark" effect="solid" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-building" />
                    </CInputGroupText>
                    <CFormControl
                      data-for="email"
                      data-tip="Please fill in your email"
                      placeholder="Email*"
                      value={dataForm.email}
                      name="mail"
                      onChange={handleInputChange}
                    />
                    <ReactTooltip id="email" place="top" type="dark" effect="solid" />
                  </CInputGroup>
                  {senior ? (
                    <>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-dollar" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="school"
                          data-tip="your current school"
                          placeholder="School"
                          name="school"
                          value={dataForm.school}
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="school" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-education" />
                        </CInputGroupText>
                        <CFormControl
                          type="number"
                          data-for="number"
                          data-tip="Number of juniors you'd like to receive"
                          placeholder="number"
                          value={dataForm.number}
                          name="number"
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="number" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">
                        填入您現在研究的領域(若有多個請用 ，/ , 分開)
                      </h5>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-braille" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="major"
                          data-tip="What subjects or fields are you majar?"
                          placeholder="Major"
                          value={dataForm.major}
                          name="major"
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="major" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">
                        填入您之前有錄取的學校(若有多個請用 ，/ , 分開)
                      </h5>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-braille" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="admission"
                          data-tip="What schools do you get admitted?"
                          placeholder="Admissions"
                          value={dataForm.admission}
                          name="admission"
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="admission" place="top" type="dark" effect="solid" />
                      </CInputGroup>

                      {/* {admissions.map((req, index) => {
                        return (
                          <CInputGroup className="mb-4" key={index}>
                            <CInputGroupText>
                              <CIcon icon="cil-thumb-up" />
                            </CInputGroupText>
                            <CFormControl
                              data-for="admission"
                              data-tip="Enter one school you had got admitted"
                              placeholder="Admission school"
                              name="admission"
                              value={req}
                              onChange={(e) => handleInputArray(e, index)}
                            />
                            <ReactTooltip id="admission" place="top" type="dark" effect="solid" />
                            <CButton
                              type="button"
                              name="admission"
                              onClick={(e) => handleDeleteArray(e, index)}
                            >
                              x
                            </CButton>
                          </CInputGroup>
                        )
                      })} */}
                    </>
                  ) : (
                    <>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon="cil-braille" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="major"
                          data-tip="What subjects or fields are you majar?"
                          placeholder="Major"
                          value={dataForm.major}
                          name="major"
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="major" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-dollar" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="account"
                          data-tip="Please fill in your student number"
                          placeholder="Student number"
                          name="account"
                          value={dataForm.account}
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="account" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">想申請的學位</h5>
                      <CInputGroup className="mb-4">
                        <div className="d-flex justify-content-around">
                          <div className="mr-4">
                            <CFormCheck
                              type="checkbox"
                              name="degree"
                              id="gridRadios1"
                              value="0"
                              label="MS"
                              onChange={handleInputChange}
                              defaultChecked
                            />
                          </div>
                          <div className="mr-4">
                            <CFormCheck
                              type="checkbox"
                              name="degree"
                              id="gridRadios2"
                              value="1"
                              label="PhD"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">發論文的經驗</h5>
                      <div className="d-flex justify-content-around">
                        <CInputGroup className="mb-4">
                          <div className="col-3">
                            <CFormCheck
                              type="radio"
                              name="degree"
                              id="gridRadios1"
                              value="0"
                              label="無論文經驗"
                              onChange={handleInputChange}
                              defaultChecked
                            />
                          </div>
                          <div className="col-3">
                            <CFormCheck
                              type="radio"
                              name="degree"
                              id="gridRadios2"
                              value="1"
                              label="已投稿但尚未公佈"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-3">
                            <CFormCheck
                              type="radio"
                              name="degree"
                              id="gridRadios3"
                              value="2"
                              label="已發表 1 篇"
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="col-3">
                            <CFormCheck
                              type="radio"
                              name="degree"
                              id="gridRadios3"
                              value="2"
                              label="已發表 2 篇以上"
                              onChange={handleInputChange}
                            />
                          </div>
                        </CInputGroup>
                      </div>
                      <h5 className="text-medium-emphasis">你的夢想學校(若有多個請用，/ , 分開)</h5>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-dollar" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="school1"
                          data-tip="Please fill in your dream schools"
                          placeholder="Dream college"
                          name="school1"
                          value={dataForm.school1}
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="school1" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">
                        稍有把握的學校(若有多個請用，/ , 分開)
                      </h5>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-dollar" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="school2"
                          data-tip="Please fill in your confident colleges"
                          placeholder="Confident colleges"
                          name="school2"
                          value={dataForm.school2}
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="school2" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                      <h5 className="text-medium-emphasis">你的保底學校(若有多個請用，/ , 分開)</h5>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon="cil-dollar" />
                        </CInputGroupText>
                        <CFormControl
                          data-for="school3"
                          data-tip="Please fill your guaranteed colleges"
                          placeholder="Guaranteed colleges"
                          name="school3"
                          value={dataForm.school3}
                          onChange={handleInputChange}
                        />
                        <ReactTooltip id="school3" place="top" type="dark" effect="solid" />
                      </CInputGroup>
                    </>
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
      </div>
    </div>
  )
}
MatchForm.propTypes = {
  identity: PropTypes.string,
  setOpened: PropTypes.func,
}
export default MatchForm
