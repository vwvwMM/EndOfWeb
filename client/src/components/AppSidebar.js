import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../slices/loginSlice'
import { selectGlobal, hideSidebar, openSidebar } from '../slices/globalSlice'
import { CSidebar, CSidebarBrand, CSidebarNav, CImage } from '@coreui/react'

import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import NavOut from '../_navOut'
import NavIn from '../_navIn'

//sidebar top icon
import logo_row from '../assets/images/logo_row.png'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(selectLogin)
  const { sidebarShow, unfoldable } = useSelector(selectGlobal)
  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => dispatch(openSidebar())}
      onHide={() => dispatch(hideSidebar())}
      className="bg-light"
    >
      <CSidebarBrand className="d-flex" to="/">
        <CImage src={logo_row} width="60%" />
        {/* <CIcon className="sidebar-brand-narrow" name="sygnet" height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>{isLogin ? <NavIn /> : <NavOut />}</CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
