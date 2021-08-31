/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CWidgetBrand } from '@coreui/react'
import eesa from '../../../assets/images/eesa-icon.png'
import parser from 'html-react-parser'

const CareerBlock = ({ post }) => {
  const [isExpand, setIsExpand] = useState(false)
  const spec = (li) => {
    return (
      <div key={li} style={{ lineHeight: '2.5rem', fontSize: '1.6rem' }}>
        {li}
      </div>
    )
  }
  return post.spec.description ? (
    <div className="RecruBlock" key={post._id}>
      <Link to={`/profile/${post.account}`}>
        <CWidgetBrand
          className="mb-4 widgetbrand"
          headerChildren={<img className="eesa" src={post.image ? post.image : eesa} alt="eesa" />}
          values={[[`${post.title.company_name} 徵 ${post.title.work_type}`]]}
        />
      </Link>
      <hr></hr>
      <div className="recrucontent">
        <h3 style={{ 'font-weight': '600' }}>{post.title.title}</h3>
        <h2 style={{ margin: '1rem 0rem', fontWeight: '600', color: 'red' }}>{post.info.salary}</h2>
        <h3 style={{ 'font-weight': '600', margin: '1.3rem 0 0.1rem' }}>要求學歷：</h3>
        <div style={{ lineHeight: '2.5rem', fontSize: '1.6rem' }}>{post.info.diploma}</div>
        {!isExpand && <button onClick={() => setIsExpand(true)}>Show more...</button>}
        {isExpand && (
          <>
            <h3 style={{ 'font-weight': '600', margin: '1.3rem 0 0.1rem' }}>工作經驗限制：</h3>
            <h4>{post.info.experience.map((exp) => spec(exp))}</h4>
            <h3 style={{ 'font-weight': '600', margin: '1.3rem 0 0.1rem' }}>要求條件：</h3>
            <h4>{post.spec.requirement.map((req) => spec(req))}</h4>
            <h3 style={{ 'font-weight': '600', margin: '1rem 0 0.1rem' }}>說明：</h3>
            <h4>{post.spec.description.map((des) => spec(parser(des)))}</h4>
            <button onClick={() => setIsExpand(false)}>Show less...</button>
          </>
        )}
      </div>
    </div>
  ) : (
    <div className="RecomBlock" key={post._id}>
      <Link to={`/profile/${post.account}`}>
        <CWidgetBrand
          className="mb-4 widgetbrand"
          headerChildren={<img className="eesa" src={post.image ? post.image : eesa} alt="eesa" />}
          values={[['~~~~~~~~~~~~~~~~~~~~~~']]}
        />
      </Link>
      <div className="recomcontent">
        <h3>
          {post.title.name} asking for <nobr>{post.title.desire_work_type}</nobr>
        </h3>
        <h2 style={{ margin: '1rem 0rem' }}>{post.title.title}</h2>
        <div style={{ 'font-size': '1.39rem' }}>
          <span style={{ color: 'red', 'font-weight': '500' }}>{post.info.diploma}</span> |{' '}
          <nobr>{post.info.contact}</nobr> | <nobr>{post.info.email}</nobr>
        </div>
        {!isExpand && <button onClick={() => setIsExpand(true)}>Show more...</button>}
        {isExpand && (
          <>
            <h3 style={{ margin: '1.3rem 0 0.1rem' }}>個人簡歷：</h3>
            <h4>{post.spec.experience.map((exp) => spec(exp))}</h4>
            <h3 style={{ margin: '1rem 0 0.1rem' }}>專業技能：</h3>
            <h4>{post.spec.speciality.map((speci) => spec(speci))}</h4>
            <button onClick={() => setIsExpand(false)}>Show less...</button>
          </>
        )}
      </div>
    </div>
  )
}
CareerBlock.propTypes = {
  post: PropTypes.object,
  experience: PropTypes.array,
  requirement: PropTypes.array,
  description: PropTypes.array,
}
export default CareerBlock
