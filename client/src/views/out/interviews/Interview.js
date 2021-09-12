/* eslint-disable prettier/prettier */
import React from 'react'

const Interview = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="portfolio-item">
        <div className="hover-bg">
          {' '}
          <a
            href="img/portfolio/01-large.jpg"
            title="Project Title"
            data-lightbox-gallery="gallery1"
          >
            <div className="hover-text">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure cumque
                repudiandae aspernatur et eaque quam, reiciendis sunt, quas id sed consequuntur non
                aperiam, animi excepturi expedita maiores eligendi aliquid.
              </p>
            </div>
            <img src="https://picsum.photos/400" className="img-responsive" alt="Project Title" />{' '}
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default Interview
