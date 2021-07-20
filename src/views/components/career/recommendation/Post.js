/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetBrand, CRow, CCol } from '@coreui/react'
import eesa from './eesa-icon.png'
import './Recommendation.css'

const Post = ({ data }) => {
  const posts = data.map((post) => {
    return (
      <CCol sm="12" lg="6" key={post.id} className="RecomBlock col">
        <CRow className="container">
          <CWidgetBrand
            className="mb-4 widgetbrand"
            headerChildren={<img className="eesa" src={eesa} alt="eesa" />}
            values={[[`${post.title.name} asking for ${post.title.desire_work_type}`]]}
          />
        </CRow>
        <CRow className="container">
          <h2>this is job</h2>
          <h3>this is require</h3>
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
