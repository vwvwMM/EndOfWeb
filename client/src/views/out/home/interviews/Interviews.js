/* eslint-disable prettier/prettier */
import React from 'react'
import { CContainer } from '@coreui/react'

const Interviews = () => {
  return (
    <div id="interviews" className="text-center section">
      <CContainer data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="section-title">
          <h2>Interviews</h2>
          <p>底下是我們節錄的一些採訪介紹，一起看看吧！</p>
        </div>
        <div className="d-flex flex-row">
          <div className="col-xs-12 col-sm-4">
            <div className="portfolio-item">
              <div className="hover-bg">
                {' '}
                <a
                  href="https://picsum.photos/350/500"
                  title="Project Title"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h3>2012級 李昀樵 </h3>
                    <h4>17直播 技術副總</h4>
                    <p className="mx-3">
                      李昀樵曾是李琳山教授語音實驗室的研究生，研究所時期除了研究外，更有進行小型創業，開發出新聞摘要軟件及搜尋公共腳踏車的APP，前者以兩萬元售出，後者成為該領域當時市占率最高的APP。之後，李昀樵加入17直播，監管每年五百萬的IT預算，帶領團隊從5人成長到107人，更將17
                      Media的首屏載入速度從4秒縮減到0.3秒，成為同業中最快速的。李昀樵在新創領域有豐富經驗，現更到Harvard
                      MBA進修。
                    </p>
                  </div>
                  <img
                    src="https://picsum.photos/350/500"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </a>{' '}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="portfolio-item">
              <div className="hover-bg">
                {' '}
                <a
                  href="https://picsum.photos/350/500"
                  title="Project Title"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h3>1999級 簡韶逸</h3>
                    <h4> (CEO/ Founder @ Ganzin Technology, Prof. @ NTUEE)</h4>
                    <p className="mx-3">
                      簡韶逸教授任職於台大電子所長達16年，致力於多媒體訊號處理系統、多媒體積體電路設計、晶片系統設計方法的研究。
                      多年來，「媒體晶片系統實驗室」不斷研發出優異的技術。2016
                      年簡韶逸教授帶學生做出眼球追蹤技術的雛形時，他看好一定能應用在 AR/VR
                      上，於是決心創業。2018年1月時見臻科技(Ganzin Technology) 從台灣大學spin
                      off。見臻科技提供整合性視線追蹤解決方案 (eye tracking
                      solution)，包括視線追蹤模組 (eye tracking module) 及對應之軟體開發平台
                      (SDK)，解決目前市面上眼動儀成本高、功耗高、體積大、機構複雜的問題。
                    </p>
                  </div>
                  <img
                    src="https://picsum.photos/350/500"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </a>{' '}
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="portfolio-item">
              <div className="hover-bg">
                {' '}
                <a
                  href="https://picsum.photos/350/500"
                  title="Project Title"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h3>2008級 鄭恆之</h3>
                    <h4> (Technical Lead Manager @ Google Brain)</h4>
                    <p className="mx-3">
                      目前任職於 Google Brain
                      的團隊技術領導者和軟體主管工程師的鄭恆之，從事大規模機器學習的研究與軟體開發。在2013年加入
                      Googe
                      的實習生行列進行廣告排行的研究，僅僅花費不到三年的時間，就從實習生轉正職於
                      Google Research 的軟體工程師並且晉升 Google Brain
                      的技術領導與主管工程師，亮麗的職涯經歷背後是堅實的學術基礎與多篇國際期刊論文的支撐。
                    </p>
                  </div>
                  <img
                    src="https://picsum.photos/350/500"
                    className="img-responsive"
                    alt="Project Title"
                  />{' '}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </CContainer>
    </div>
  )
}

export default Interviews
