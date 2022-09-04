import React, { lazy, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CImage,
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CCard,
  CCardHeader,
  CCardBody,
  CCardImage,
  CCardTitle,
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CModalFooter,
} from '@coreui/react'
import logo from '../../assets/images/logo_row.png'
import axios from 'axios'

const perRecruitment = 4
const perRecommendation = 4

const Dashboard = () => {
  const [isModal, setIsModal] = useState(false)
  const [recentColumns, setRecentColumns] = useState([])
  const [recentRecruitments, setRecentRecruitments] = useState([])
  const [recentRecommendations, setRecentRecommendations] = useState([])
  const [announces, setAnnounces] = useState([
    { title: 'ann1', body: 'this is first announcement', time: '2022/9/2' },
    { title: 'ann2', body: 'this is second announcement', time: '2022/9/3' },
  ])
  const [announce, setAnnounce] = useState({})

  const openModal = (e, index) => {
    setAnnounce(announces[index])
    setIsModal(true)
  }

  const closeModal = (e) => {
    setAnnounce({})
    setIsModal(false)
  }

  const getRecentColumns = () => {
    axios
      .get('api/column/recent')
      .then((res) => {
        setRecentColumns(res.data.data)
      })
      .catch((err) => console.log(err))
  }

  const getRecentRecruitments = () => {
    axios
      .get('api/recruitment/recent', { params: { number: perRecruitment } })
      .then((res) => {
        setRecentRecruitments(res.data.data)
      })
      .catch((err) => console.log(err))
  }

  const getRecentRecommendations = () => {
    axios
      .get('api/recommendation/recent', { params: { number: perRecommendation } })
      .then((res) => {
        setRecentRecommendations(res.data.data)
      })
      .catch((err) => console.log(err))
  }

  // useEffect(() => {
  //   getRecentColumns()
  //   getRecentRecruitments()
  //   getRecentRecommendations()
  // }, [])

  return (
    <>
      <CModal visible={isModal} onDismiss={closeModal} alignment="center">
        <CModalHeader onDismiss={closeModal}>
          <CModalTitle>{announce.title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{announce.body}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="dark" onClick={closeModal}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
      <CContainer fluid className="align-items-center text-color-black w-75">
        <CRow className="justify-content-center my-4">
          <CCard className="bg-transparent border-0">
            <CCardHeader className="section-title mb-1 border-0 text-center bg-transparent">
              <h1>Recent Announcements</h1>
            </CCardHeader>
            <CCardBody>
              {announces.map((ann, index) => {
                return (
                  <CCardHeader
                    className="mb-1 text-center d-flex justify-content-between align-items-center p-2 rounded-3 announce"
                    key={index}
                    onClick={(e) => {
                      openModal(e, index)
                    }}
                    type="button"
                  >
                    <h2>
                      <b>{ann.title}</b>
                    </h2>
                    <span>{ann.time}</span>
                  </CCardHeader>
                )
              })}
            </CCardBody>
          </CCard>
        </CRow>
        <CRow className="justify-content-center my-4">
          <CCard className="bg-transparent border-0">
            <CCardHeader className="section-title mb-1 border-0 text-center bg-transparent">
              <h1>Recent Interviews</h1>
            </CCardHeader>
            <CCardBody>
              <CCarousel controls indicators transition="crossfade">
                {recentColumns.map((column, index) => {
                  return (
                    <CCarouselItem key={index}>
                      <Link to={`/columnSummary/${column.id}`}>
                        <CImage
                          className="d-block w-100"
                          fluid
                          src={column.imgSrc}
                          alt={column.id}
                        />
                        <CCarouselCaption className="d-none d-md-block w-100">
                          {column.title.map((title, i) => {
                            return <h3 key={i}>{title}</h3>
                          })}
                          <CRow>
                            <CCol>
                              <ul className="recent-ul list-unstyled">
                                {column.edu.map((edu, i) => {
                                  return (
                                    <li className="text-start" key={i}>
                                      {edu}
                                    </li>
                                  )
                                })}
                              </ul>
                            </CCol>
                            <CCol>
                              <ul className="recent-ul list-unstyled">
                                {column.exp.map((exp, i) => {
                                  return (
                                    <li className="text-start" key={i}>
                                      {exp}
                                    </li>
                                  )
                                })}
                              </ul>
                            </CCol>
                          </CRow>
                        </CCarouselCaption>
                      </Link>
                    </CCarouselItem>
                  )
                })}
              </CCarousel>
            </CCardBody>
          </CCard>
        </CRow>
        <CRow className="justify-content-center my-4">
          <CCard className="bg-transparent border-0">
            <CCardHeader className="section-title mb-1 border-0 text-center bg-transparent">
              <h1>Recent Recruitment</h1>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {recentRecruitments.map((recruitment, index) => {
                  return (
                    <CCol className="col-6" key={index}>
                      <Link to="/recruitment">
                        <CCard className="m-2" style={{ borderRadius: '10px' }}>
                          <CCardImage src={recruitment.image === '' ? logo : recruitment.image} />
                          <CCardBody>
                            <CCardTitle className="text-center">
                              {recruitment.title.title}
                            </CCardTitle>
                          </CCardBody>
                        </CCard>
                      </Link>
                    </CCol>
                  )
                })}
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
        <CRow className="justify-content-center my-4">
          <CCard className="bg-transparent border-0">
            <CCardHeader className="section-title mb-1 border-0 text-center bg-transparent">
              <h1>Recent Job Hunting</h1>
            </CCardHeader>
            <CCardBody>
              <CRow>
                {recentRecommendations.map((recommendation, index) => {
                  return (
                    <CCol className="col-6" key={index}>
                      <Link to="/recommendation">
                        <CCard className="m-2" style={{ borderRadius: '10px' }}>
                          <CCardImage
                            src={recommendation.image === '' ? logo : recommendation.image}
                          />
                          <CCardBody>
                            <CCardTitle className="text-center">
                              {recommendation.title.title}
                            </CCardTitle>
                          </CCardBody>
                        </CCard>
                      </Link>
                    </CCol>
                  )
                })}
              </CRow>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </>
  )
}

export default Dashboard
