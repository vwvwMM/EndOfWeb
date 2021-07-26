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
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/columns/:id', exact: false, name: 'Column', component: Column },
  { path: '/columns', exact: true, name: 'ColumnSummary', component: ShowColumns },
  { path: '/columnSummary', exact: true, name: 'ColumnSummary', component: ShowColumns },
  { path: '/career', exact: true, name: 'Career', component: Career },
  { path: '/recommendation', exact: true, name: 'Recommendation', component: Recommendation },
  { path: '/recruitment', exact: true, name: 'Recruitment', component: Recruitment },
]

export default routes
