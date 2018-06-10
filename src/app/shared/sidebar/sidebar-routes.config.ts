import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Dashboard', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '#', title: 'Tour Operator', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu: [
            { path: '/tour-operators/profile', title: 'Profile', icon: 'ft-user', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/market-place/my-agents', title: 'My Agents', icon: 'ft-users', class: '', badge: '15', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
            
        ]
    },
    {
        path: '', title: 'Tours', icon: 'ft-briefcase', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu: [
            { path: '/inventory/new-tour', title: 'New Tour', icon: 'ft-plus', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/inventory/my-tours', title: 'My Tours', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/inventory/tour-details', title: 'Tour Details', icon: 'ft-align-left', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Marketplace', icon: 'ft-globe', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu: [
            { path: '/market-place/agents', title: 'Travel Agencies', icon: 'ft-users', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/market-place/agent', title: 'Agent Details', icon: 'ft-user', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/market-place/social-media', title: 'Social Media', icon: 'ft-facebook', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/market-place/insights', title: 'Insights', icon: 'ft-pie-chart', class: '', badge: 'Soon', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Bookings', icon: 'ft-calendar', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,submenu: [
            { path: '/bookings', title: 'Bookings', icon: 'ft-edit', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] },
            { path: '/bookings/booking-details', title: 'Booking Details', icon: 'ft-bell', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
        ]
    },
    // {
    //     path: '/auth', title: 'Authentication', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/experiences', title: 'Experiences', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // {
    //     path: '/how-it-works', title: 'How It Works', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
  
  
  
 
    
    // {
    //     path: '', title: 'Tour Operator', icon: 'ft-align-left', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    //     submenu: [
    //         { path: '/tour-operators/profile', title: 'Company Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //         {
    //             path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    //             submenu: [
    //                 { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //                 { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    //             ]
    //         },
    //     ]
    // },
    {
        path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
];
