/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

const HistBlock = ({ history }) => {
  const blocks = history.map((year) => {
    const people = year.people.map((person) => {
      return (
        <div key={person.name}>
          <img src={person.img} alt="" />
          <h3>{person.name}</h3>
        </div>
      )
    })
    return <div key={year.grade}>{people}</div>
  })
  return <div className="chrono-icons">{blocks}</div>
}
HistBlock.propTypes = {
  history: PropTypes.array,
}
export default HistBlock
