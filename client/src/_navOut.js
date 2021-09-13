/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

export const _navOutContent = [
  {
    _component: 'CNavTitle',
    anchor: 'Information',
  },
  {
    _component: 'CNavItem',

    anchor: 'HEADER',
    to: 'header',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'FEATURES',
    to: 'features',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'ABOUT',
    to: 'about',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'SERVICES',
    to: 'services',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'INTERVIEWS',
    to: 'interviews',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'HISTORY',
    to: 'history',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'TEAM',
    to: 'team',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',

    anchor: 'CONTACT',
    to: 'contact',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
]

const NavOut = () => {
  const history = useHistory()
  return (
    <SimpleBar>
      {_navOutContent.map((item, i) => {
        return item._component === 'CNavTitle' ? (
          <p style={{ margin: '2rem 0rem 2rem 2rem', color: 'black', fontSize: '1.2rem' }}>
            &nbsp;{item.anchor}
          </p>
        ) : (
          <p key={i} style={{ margin: '1.5rem 0rem 1.5rem 2rem' }}>
            &nbsp;{item.icon}
            {'  '}
            <Link
              to={`/home/#${item.to}`}
              style={{ color: 'black' }}
              onClick={() => {
                history.push(`/home/#${item.to}`)
                document.getElementById(item.anchor.toLowerCase()).scrollIntoView()
                return true
              }}
            >
              {item.anchor}
            </Link>
          </p>
        )
      })}
    </SimpleBar>
  )
}
export default NavOut
