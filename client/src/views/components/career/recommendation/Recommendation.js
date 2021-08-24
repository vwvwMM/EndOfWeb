/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import RecomBlock from './RecomBlock'
import Masonry from 'react-masonry-css'
import axios from 'axios'
import { selectCareer, setKeywords, clearKeywords } from '../../../../slices/careerSlice'

const Recommendation = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  }
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const { keywords } = useSelector(selectCareer)
  const [isPending, setIsPending] = useState()
  const searchData = (e) => {
    e.preventDefault()
    axios
      .post('/api/smartsearchrecommendation', { keyword: keywords })
      .then((res) => {
        setData(res.data)
        console.log('data:', res.data)
        setIsPending(false)
      })
      .catch((err) => {
        err.response.data.description && alert('錯誤\n' + err.response.data.description)
      })
  }
  const getData = () => {
    setIsPending(true)
    dispatch(clearKeywords())
    axios
      .get('/api/recommendation')
      .then((res) => {
        console.log('this is posts:', res.data)
        setData(res.data)
        setIsPending(false)
      })
      .catch((err) => {
        err.response.data.description && alert('錯誤\n' + err.response.data.description)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <form
        className="d-flex flex-column text-light py-2 my-2"
        onSubmit={(e) => searchData(e)}
        action={(e) => searchData(e)}
      >
        <div className="col">
          <button className="btn btn-warning" onClick={() => getData()}>All Recommendation</button>
        </div>
        <div className="d-flex flex-column bg-dark rounded-3 py-3 col align-self-center">
          <div className="row">
            <label forhtml="keywords" className="d-flex">
              &ensp;Key words&#40;split with space&#41;:
            </label>
          </div>
          <div className="row justify-content-around d-flex">
            <div className=" col-8 mt-2">
              <input
                type="text"
                name="keywords"
                placeholder={keywords === '' ? 'search for...' : keywords}
                className="rounded-3"
                defaultValue={keywords}
                onChange={(e) => dispatch(setKeywords(e.target.value))}
              ></input>
            </div>
            <div className="col-3 align-items-center d-flex">
              <button
                type="button"
                onClick={(e) => searchData(e)}
                className="btn btn-primary d-flex mt-1"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      {isPending ? (
        <div className="spinner-border text-primary mt-3" role="status">
          <span className="sr-only"></span>
        </div>
      ) : data.length === 0 ? (
        <div className="display-2 d-flex justify-content-center mt-3">Result not found</div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          columnAttrs={{
            className: 'should be overridden',
            'data-test': '',
            style: { '--test': 'test', color: 'black' },
          }}
          style={{ display: 'flex' }}
        >
          {data.map((post) => (
            <RecomBlock post={post} key={post._id} />
          ))}
        </Masonry>
      )}
    </>
  )
}
Recommendation.propTypes = {
  data: PropTypes.array,
}

export default Recommendation
