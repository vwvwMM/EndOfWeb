/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import DownloadMatch from './DownloadMatch'
import UploadMatch from './UploadMatch'

const Matching = () => {
  const [downloaded, setDownloaded] = useState(false)
  const [sdata, setSdata] = useState(null)
  const [jdata, setJdata] = useState(null)

  return (
    <div className="matching bg-white border-2 mx-3">
      {downloaded ? (
        <UploadMatch sdata={sdata} setSdata={setSdata} jdata={jdata} setJdata={setJdata} />
      ) : (
        <DownloadMatch setDownloaded={setDownloaded} />
      )}
    </div>
  )
}

export default Matching
