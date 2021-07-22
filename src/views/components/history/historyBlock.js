/* eslint-disable prettier/prettier */
import React from 'react'
import { Chrono } from 'react-chrono'
import PropTypes from 'prop-types'

const HistoryBlock = ({ data }) => {
  const items = data.map((per) => {
    return {
      title: per.grade,
      cardTitle: per.title,
      media: {
        type: 'IMAGE',
        source: {
          url: [per.person[0].img],
        },
      },
    }
  })

  return <Chrono items={items} mode="VERTICAL" />
}
HistoryBlock.propTypes = {
  data: PropTypes.array,
}

export default HistoryBlock
