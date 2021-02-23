module.exports = [
    {
      path: '/',
      component: '../layouts/BasicLayout', // layout for pages in routes
      routes: [
        // dashboard
        { path: '/', redirect: '/dashboard/analysis' },
        {
          path: '/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          routes: [
            { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
            { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
            { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
          ],
        },
      ],
    },
  ];