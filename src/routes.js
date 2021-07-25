import React from 'react'

const Column = React.lazy(() => import('./views/components/column/Column'))
const ShowColumns = React.lazy(() => import('./views/components/columnSummary/showColumns'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Career = React.lazy(() => import('./views/components/career/career'))
const Recommendation = React.lazy(() =>
  import('./views/components/career/recommendation/Recommendation'),
)
const Recruitment = React.lazy(() => import('./views/components/career/recruitment/Recruitment'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: false, name: 'Dashboard', component: Dashboard },
  { path: '/column/:id', exact: false, name: 'Column', component: Column },
  { path: '/column', exact: false, name: 'Column', component: Dashboard },
  { path: '/columnSummary', exact: false, name: 'ColumnSummary', component: ShowColumns },
  { path: '/career', exact: false, name: 'Career', component: Career },
  { path: '/recommendation', exact: false, name: 'Recommendation', component: Recommendation },
  { path: '/recruitment', exact: false, name: 'Recruitment', component: Recruitment },
]

export default routes
