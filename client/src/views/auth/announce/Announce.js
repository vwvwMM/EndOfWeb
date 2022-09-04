/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import JoditEditor from 'jodit-react'
import parser from 'html-react-parser'
const Announce = () => {
  const editor = useRef(null)
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  }
  const add = useParams().id === 'add'
  const [blockModal, setBlockModal] = useState(false)
  const [ann, setAnn] = useState(
    add
      ? { title: '', body: '', date: '' }
      : { title: 'ann1', body: 'this is first announcement', date: '2022/9/2' },
  )
  const handleSubmit = (e) => {}
  return (
    <>
      <CModal visible={blockModal} onDismiss={() => setBlockModal(false)} alignment="center">
        <CModalHeader onDismiss={() => setBlockModal(false)}>
          <CModalTitle>{ann.title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>{parser(ann.body)}</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="warning" onClick={() => setBlockModal(false)}>
            Back
          </CButton>
          <CButton color="dark" onClick={handleSubmit}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
      <div className="d-flex flex-row align-items-center text-color-black auth-announce">
        <CContainer>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm>
                <h1>{add ? 'Ready to post' : 'Want to edit'} an announcement?</h1>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-layers" name="cil-layers" />
                  </CInputGroupText>
                  <CFormControl
                    className={ann.title}
                    placeholder="Title*"
                    value={ann.title}
                    name="title"
                    onChange={(e) => setAnn({ ...ann, title: e.target.value })}
                  />
                </CInputGroup>
                <div className="mb-3 mw-100">
                  <JoditEditor
                    name="description"
                    ref={editor}
                    value={ann.body}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setAnn({ ...ann, body: newContent })} // preferred to use only this option to update the content for performance reasons
                  />
                </div>
                <CRow className="justify-content-center mt-3">
                  <div className="d-flex d-flex justify-content-center">
                    <CButton color="dark" onClick={() => setBlockModal(true)}>
                      Preview
                    </CButton>
                  </div>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </>
  )
}

export default Announce
