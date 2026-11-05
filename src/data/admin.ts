import {
  Activity,
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  ClipboardList,
  FileQuestion,
  Gauge,
  KeyRound,
  Layers3,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Newspaper,
  Search,
  Settings,
  ShieldCheck,
  Star,
  UserCog,
  Users
} from 'lucide-react';

export const adminRoles = [
  { name: 'Super Admin', access: 'Full Access' },
  { name: 'Admin', access: 'Manage Content and Leads' },
  { name: 'Content Manager', access: 'Manage Blogs and Website Content' },
  { name: 'Sales Manager', access: 'Manage Leads and Contact Requests' }
];

export const sidebarSections = [
  {
    title: 'Dashboard',
    items: [{ label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard }]
  },
  {
    title: 'Content Management',
    items: [
      { label: 'Blogs', href: '/admin/content/blogs', icon: Newspaper },
      { label: 'Categories', href: '/admin/content/categories', icon: Layers3 },
      { label: 'Services', href: '/admin/content/services', icon: BriefcaseBusiness },
      { label: 'ERP Modules', href: '/admin/content/erp-modules', icon: ClipboardList },
      { label: 'Testimonials', href: '/admin/content/testimonials', icon: Star },
      { label: 'FAQ', href: '/admin/content/faq', icon: FileQuestion }
    ]
  },
  {
    title: 'Lead Management',
    items: [
      { label: 'Leads', href: '/admin/leads', icon: Users },
      { label: 'Contact Messages', href: '/admin/contact-messages', icon: MessageSquare }
    ]
  },
  {
    title: 'User Management',
    items: [
      { label: 'Users', href: '/admin/users', icon: UserCog },
      { label: 'Roles', href: '/admin/roles', icon: ShieldCheck },
      { label: 'Permissions', href: '/admin/permissions', icon: KeyRound }
    ]
  },
  {
    title: 'System',
    items: [
      { label: 'Settings', href: '/admin/settings', icon: Settings },
      { label: 'Profile', href: '/admin/profile', icon: UserCog },
      { label: 'Audit Logs', href: '/admin/audit-logs', icon: Activity }
    ]
  }
];

export const dashboardStats = [
  { label: 'Total Leads', value: '1,248', change: '+18.2%', icon: Users },
  { label: 'Total Clients', value: '86', change: '+7.4%', icon: BriefcaseBusiness },
  { label: 'Total Blog Posts', value: '142', change: '+12', icon: BookOpen },
  { label: 'Total Services', value: '18', change: 'Active', icon: ClipboardList },
  { label: 'Contact Messages', value: '329', change: '+31', icon: MessageSquare },
  { label: 'Website Visitors', value: '42.8k', change: '+24.1%', icon: Gauge }
];

export const monthlyLeads = [
  { month: 'Jan', leads: 72, contacts: 44, visitors: 3100 },
  { month: 'Feb', leads: 86, contacts: 51, visitors: 3600 },
  { month: 'Mar', leads: 94, contacts: 62, visitors: 4100 },
  { month: 'Apr', leads: 118, contacts: 79, visitors: 5200 },
  { month: 'May', leads: 136, contacts: 88, visitors: 6100 },
  { month: 'Jun', leads: 154, contacts: 103, visitors: 7200 }
];

export const activities = [
  { type: 'New Lead', text: 'Pharmaceutical ERP consultation request from Dhaka.', time: '8 min ago' },
  { type: 'Contact Request', text: 'Manufacturing company asked for inventory automation.', time: '24 min ago' },
  { type: 'Blog Update', text: 'ERP implementation checklist published by Content Manager.', time: '1 hr ago' },
  { type: 'Security', text: 'Admin password changed successfully.', time: '2 hrs ago' }
];

export const leadRows = [
  { company: 'Apex Pharma Ltd.', contact: 'Tanvir Ahmed', service: 'ERP Software', status: 'Qualified', value: '$18,500' },
  { company: 'Northstar Retail', contact: 'Nusrat Jahan', service: 'POS + Inventory', status: 'Proposal', value: '$9,200' },
  { company: 'Medicare Group', contact: 'Rahim Chowdhury', service: 'Healthcare ERP', status: 'New', value: '$14,000' },
  { company: 'Delta Logistics', contact: 'Farhana Islam', service: 'API Integration', status: 'Follow Up', value: '$6,800' }
];

export const securityFeatures = [
  { title: 'JWT Authentication', icon: Lock },
  { title: 'Refresh Token Rotation', icon: ShieldCheck },
  { title: 'Password Hashing', icon: KeyRound },
  { title: 'Role-Based Access Control', icon: UserCog },
  { title: 'Account Lockout', icon: Bell },
  { title: 'Secure Cookie + CSRF Ready', icon: Search }
];
