/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetBrand, CRow, CCol } from '@coreui/react'
import eesa from './eesa-icon.png'
import './Recruitment.css'

const Post = ({ data }) => {
  const spec = (li) => {
    return (
      <div key={li} style={{ lineHeight: '2.5rem' }}>
        {li}
      </div>
    )
  }
  const posts = data.map((post) => {
    return (
      <CCol sm="12" lg="6" key={post.id} className="RecruBlock col">
        <CRow className="container">
          <CWidgetBrand
            className="mb-4 widgetbrand"
            headerChildren={<img className="eesa" src={eesa} alt="eesa" />}
            values={[[post.company_name]]}
          />
        </CRow>
        <CRow className="container">
          <h3 style={{ 'font-weight': '600' }}>{post.title.title}</h3>
          <h2 style={{ margin: '1rem 0rem', fontWeight: '600', color: 'red' }}>
            {post.info.salary}
          </h2>
          <h2 style={{ 'font-size': '1.39rem' }}>
            | {post.info.experience} | {post.info.diploma}
          </h2>
          <h3 style={{ 'font-weight': '600', margin: '1.3rem 0 0.1rem' }}>要求條件：</h3>
          <h4>{post.spec.requirement.map((req) => spec(req))}</h4>
          <h3 style={{ 'font-weight': '600', margin: '1rem 0 0.1rem' }}>說明：</h3>
          <h4>{post.spec.description.map((des) => spec(des))}</h4>
        </CRow>
      </CCol>
    )
  })
  return <CRow>{posts}</CRow>
}
Post.propTypes = {
  data: PropTypes.array,
}

export default Post
