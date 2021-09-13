import React from 'react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { _navOutContent } from './_navOut'

const _navInContent = [
  {
    _component: 'CNavTitle',
    anchor: 'Services',
  },
  {
    _component: 'CNavItem',
    anchor: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    anchor: 'CAREER',
    to: '/career',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    anchor: 'COLUMNS',
    to: '/column_summary',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  },
  /* {
    _component: 'CNavItem',
    anchor: 'STUDY',
    to: '/study',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
  }, */
]
const NavIn = () => {
  const history = useHistory()
  return (
    <SimpleBar>
      {_navInContent.map((item, i) => {
        return item._component === 'CNavTitle' ? (
          <p style={{ margin: '2rem 0rem 2rem 2rem', color: 'black', fontSize: '1.2rem' }}>
            &nbsp;{item.anchor}
          </p>
        ) : (
          <p key={i} style={{ margin: '1.5rem 0rem 1.5rem 2rem' }}>
            &nbsp;{item.icon}
            {'  '}
            <Link to={item.to} style={{ color: 'black' }}>
              {item.anchor}
            </Link>
          </p>
        )
      })}
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
              onClick={async () => {
                await history.push(`/home/#${item.to}`)
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

export default NavIn
