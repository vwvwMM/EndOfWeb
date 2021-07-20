/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetBrand, CRow, CCol } from '@coreui/react'
import eesa from './eesa-icon.png'
import './Recommendation.css'

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
      <CCol sm="12" lg="6" key={post.id} className="RecomBlock col">
        <CRow className="container">
          <CWidgetBrand
            className="mb-4 widgetbrand"
            headerChildren={<img className="eesa" src={eesa} alt="eesa" />}
            values={[['~~~~~~~~~~~~~~~~~~~~~~']]}
          />
        </CRow>
        <CRow className="container">
          <h3 style={{ 'font-weight': '600' }}>
            {post.title.name} asking for <nobr>{post.title.desire_work_type}</nobr>
          </h3>
          <h2 style={{ margin: '1rem 0rem', fontWeight: '600' }}>{post.title.title}</h2>
          <div style={{ 'font-size': '1.39rem' }}>
            <span style={{ color: 'red', 'font-weight': '500' }}>{post.info.diploma}</span> |{' '}
            <nobr>{post.info.contact}</nobr> | <nobr>{post.info.email}</nobr>
          </div>
          <h3 style={{ 'font-weight': '600', margin: '1.3rem 0 0.1rem' }}>個人簡歷：</h3>
          <h4>{post.spec.experience.map((exp) => spec(exp))}</h4>
          <h3 style={{ 'font-weight': '600', margin: '1rem 0 0.1rem' }}>專業技能：</h3>
          <h4>{post.spec.speciality.map((speci) => spec(speci))}</h4>
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
