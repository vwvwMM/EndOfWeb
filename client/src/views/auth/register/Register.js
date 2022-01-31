/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Applicant from './Applicant'
import {
  CModal,
  CModalBody,
  CModalContent,
  CModalHeader,
  CModalFooter,
  CModalTitle,
  CButton,
} from '@coreui/react'
const Register = () => {
  const [isModal, setIsModal] = useState(false)
  const [modalPerson, setModalPerson] = useState({
    username: '',
    account: '',
    email: '',
    imgSrc: '',
  })
  const [applicants, setApplicants] = useState([
    {
      username: '123',
      account: 'b09901022',
      email: 'vincentwu0628@gmail.com',
      imgSrc:
        'https://lh3.googleusercontent.com/WMiB19W30Hv7ZncOPnbe-5m1QrsytApHzgi_69jjz3OD_0wuKoIav7-12JY3uwa0EshTy2N06VCwUdTiD1HUkB2nEFpnZQpeqy_H09E=s130',
    },
    {
      username: '456',
      account: 'b09901122',
      email: 'vincentwu0028@gmail.com',
      imgSrc:
        'https://lh3.googleusercontent.com/WMiB19W30Hv7ZncOPnbe-5m1QrsytApHzgi_69jjz3OD_0wuKoIav7-12JY3uwa0EshTy2N06VCwUdTiD1HUkB2nEFpnZQpeqy_H09E=s130',
    },
    {
      username: '13423535345',
      account: 'b09901029',
      email: 'vincentwu064323535523428@gmail.com',
      imgSrc:
        'https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550',
    },
  ])
  const verify = () => {
    alert('已發送驗證信至對方信箱！')
    setIsModal(false)
  }
  const reject = () => {
    alert('已發送拒絕申請信至對方信箱！')
    setIsModal(false)
  }
  return (
    <>
      <CModal size="lg" visible={isModal} onDismiss={() => setIsModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setIsModal(false)}>
          <CModalTitle>驗證身分</CModalTitle>
        </CModalHeader>
        <CModalBody className="d-flex flex-column justify-content-center align-items-center h3">
          姓名：{modalPerson.username}
          <br />
          學號：{modalPerson.account}
          <br />
          信箱：{modalPerson.email}
          <br />
          <img src={modalPerson.imgSrc} alt="" style={{ width: '48rem', margin:'1rem' }} />
        </CModalBody>
        <CModalFooter>
          <CButton color="warning" onClick={reject}>
            拒絕申請
          </CButton>
          <CButton color="dark" onClick={verify}>
            同意申請
          </CButton>
        </CModalFooter>
      </CModal>
      <div className="auth-register mx-auto w-75 py-3">
        <h1 className="mt-3">底下為待您確認的註冊申請：</h1>
        {applicants.map((a, i) => (
          <Applicant person={a} key={i} setIsModal={setIsModal} setModalPerson={setModalPerson} />
        ))}
      </div>
    </>
  )
}

export default Register
