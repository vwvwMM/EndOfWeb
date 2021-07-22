/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

const HistBlock = ({ history }) => {
  const blocks = history.map((year) => {
    return (
      <div key={history.grade}>
        <img src={year.person.img} alt="" />
        <h3>{year.person.name}</h3>
      </div>
    )
  })
  return <div className="chrono-icons">{blocks}</div>
}
HistBlock.propTypes = {
  history: PropTypes.array,
}
export default HistBlock
