/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import RecomBlock from './RecomBlock'
import Masonry from 'react-masonry-css'
import { selectCareer, setKeywords, clearKeywords } from '../../../../slices/careerSlice'

const RecomPost = ({ data }) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  }
  return (
    <>
      <form
        className="justify-content-around d-flex flex-column bg-dark rounded-3 text-light py-2"
        onSubmit={(e) => searchData(e)}
        action={(e) => searchData(e)}
      >
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
      </form>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        columnAttrs={{
          className: 'should be overridden',
          'data-test': '',
          style: { '--test': 'test' },
        }}
        style={{ display: 'flex' }}
      >
        {data.map((post) => (
          <RecomBlock post={post} key={post.id} />
        ))}
      </Masonry>
    </>
  )
}
RecomPost.propTypes = {
  data: PropTypes.array,
}

export default RecomPost
