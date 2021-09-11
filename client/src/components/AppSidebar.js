import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLogin } from '../slices/loginSlice'
import { selectGlobal, hideSidebar, openSidebar } from '../slices/globalSlice'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem,
  CImage,
} from '@coreui/react'

import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import NavOut from '../_navOut'
import navIn from '../_navIn'

//sidebar top icon
import logo_row from '../assets/images/logo_row.png'
import { Link } from 'react-router-dom'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(selectLogin)
  const { sidebarShow, unfoldable } = useSelector(selectGlobal)
  const chNav = () => {
    if (isLogin) return [...navIn, ...NavOut]
    else return NavOut
  }
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
      <CSidebarNav>
        <NavOut />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
