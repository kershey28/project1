import {
  MdOutlineMobileFriendly,
  MdOutlinePhonelinkLock,
  MdOutlinePhonelinkRing,
  MdOutlinePhonelinkSetup,
} from 'react-icons/md';

import logoImg from '../assets/img/main/logo.png';
import logoWhiteImg from '../assets/img/main/logo-white.png';

export const HERO = {
  heading:
    "The Only Platform You'll Need to Run Smart Coworking Spaces & Serviced Offices",
  p1: 'Oqulo is built to sell, manage and grow your commercial real estate business.',
  p2: 'Collect payments, manage clients and run reports using our booking app.',
  p3: 'Engage members using our community messaging feature.',
  ctaText: 'Be the first line to take Oqulo for a test drive!',
  caption: "*No spam, that's a promise",
  buttonCta: 'Notify me',
  inputLabel: 'Email address',
};

export const ABOUT = {
  heading: 'Tried & Tested Space Management Software',
  p1: "Oqulo is a homegrown app that's been tested by real-life businesses. Whether you operate on a single building or in multiple locations. Oqulo is designed to make your space leasing operations hassle-free.",
  p2: 'Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.',
};

export const FEATURES = {
  heading: ' Oqulo Features at a Glance',
  subheading: 'Powerful functionalities that changes the way you do business.',
  items: [
    {
      label: 'Powerful Space Management',
      paragraph:
        'Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard.',
      svg: <MdOutlinePhonelinkSetup className="icon" />,
      alt: 'touch phone',
    },
    {
      label: 'User-Friendly Interface',
      paragraph:
        "Clients will find it easy to book and pay for their space, thanks to Oqulo's easy navigation and pixel-perfect design. Keep members up to date with Oqulo's community board and help desk features",
      svg: <MdOutlineMobileFriendly className="icon" />,
      alt: 'user phone',
    },
    {
      label: 'Painless Integration',
      paragraph:
        'No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days.',
      svg: <MdOutlinePhonelinkRing className="icon" />,
      alt: 'hold phone',
    },
    {
      label: 'Secure Data & White Label Branding',
      paragraph:
        'Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own.',
      svg: <MdOutlinePhonelinkLock className="icon" />,
      alt: 'lock phone',
    },
  ],
};

export const STATISTICS = {
  heading: 'Stats Delivered Beautifully',
  subheading:
    "View sales charts, booking ratio and user behavior using Oqulo's visual reporting feature.",
};

export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 1 },
  labelStyle: { color: 'hsl(0, 0%, 36.1%)' },
};

export const barPrimaryYAxis = {
  majorGridLines: { width: 1 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 1 },
  labelStyle: { color: 'hsl(0, 0%, 36.1%)' },
};

export const barChartData = [
  [
    { x: 'Manila', y: 58070 },
    { x: 'Makati', y: 62050 },
    { x: 'Cavite', y: 40050 },
    { x: 'Laguna', y: 125040 },
  ],
  [
    { x: 'Manila', y: 19040 },
    { x: 'Makati', y: 37050 },
    { x: 'Cavite', y: 34020 },
    { x: 'Laguna', y: 131000 },
  ],
  [
    { x: 'Manila', y: 57050 },
    { x: 'Makati', y: 39020 },
    { x: 'Cavite', y: 22035 },
    { x: 'Laguna', y: 27000 },
  ],
  [
    { x: 'Manila', y: 35040 },
    { x: 'Makati', y: 46550 },
    { x: 'Cavite', y: 85050 },
    { x: 'Laguna', y: 57000 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Hot Desks',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '500', color: 'hsl(0, 0%, 20%)' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Private Offices',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '500', color: 'hsl(0, 0%, 20%)' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Virtual Offices',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '500', color: 'hsl(0, 0%, 20%)' },
      },
    },
  },
  {
    dataSource: barChartData[3],
    xName: 'x',
    yName: 'y',
    name: 'Meeting Rooms',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '500', color: 'hsl(0, 0%, 20%)' },
      },
    },
  },
];

export const CTA = {
  heading: 'Launching Soon',
  subheading: "Sign up to get updates on Oqulo's public release.",
  buttonCta: 'Try the beta',
};

export const FOOTER = 'Copyright © Oqulo 2018. All rights reserved.';

export const NAVIGATION = {
  logo: logoImg,
  logoWhite: logoWhiteImg,
  items: ['Discover Oqulo', 'Features', 'Contact'],
};
