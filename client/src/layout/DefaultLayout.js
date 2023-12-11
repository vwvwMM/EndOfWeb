import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLogin } from '../slices/loginSlice'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'
import axios from 'axios'

const DefaultLayout = () => {
  const pathname = useLocation().pathname.split('/')[1]
  const { isLogin } = useSelector(selectLogin)
  const noModal = [
    'edit_profile',
    'profile',
    'forget',
    'register_entry',
    'reset_password',
    'change_password',
  ]
  const [isModal, setIsModal] = useState(false)
  useEffect(() => {
    if (isLogin) {
      axios
        .get('api/profile')
        .then((res) => {
          if (res.data.advisingProfessor.length) {
            setIsModal(false)
          } else {
            setIsModal(!noModal.includes(pathname))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      setIsModal(false)
    }
  }, [isLogin])
  return (
    <>
      <CModal size="l" visible={isModal} onDismiss={() => setIsModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setIsModal(false)}>
          <CModalTitle>請大家去新增專題教授</CModalTitle>
        </CModalHeader>
        <CModalBody>
          EE+推出新功能，讓大家可以在上面登錄自己跟過的專題教授啦~
          請點擊下方按鈕新增您跟過的專題教授吧！
        </CModalBody>
        <CModalFooter>
          <CButton onClick={() => setIsModal(false)}>
            <Link to={`/edit_profile`} style={{ color: 'white' }}>
              立即填寫
            </Link>
          </CButton>
        </CModalFooter>
      </CModal>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100">
          <AppHeader />
          <div className="body flex-grow-1 flex-column px-3">
            <AppContent />
          </div>
        </div>
        <div className="wrapper d-flex flex-column">
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
