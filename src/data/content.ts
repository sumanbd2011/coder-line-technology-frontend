import {
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Factory,
  FileCode2,
  Globe2,
  HeartPulse,
  LineChart,
  Link2,
  LockKeyhole,
  MessageSquare,
  PackageCheck,
  Phone,
  Rocket,
  School,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Truck,
  Users
} from 'lucide-react';

export const company = {
  name: 'Coder Line Technology',
  website: 'www.coderlinetechnology.com',
  email: 'sumanbd2011@gmail.com',
  address: 'DAG 14491, B-Block, Sayeed Nagar, Vatara, Dhaka-1212, Bangladesh'
};

export const services = [
  { title: 'ERP Software Development', icon: Boxes, text: 'Modular ERP platforms for finance, HR, inventory, sales, procurement, reporting, and operations.' },
  { title: 'Custom Software Development', icon: Code2, text: 'Secure business applications designed around your workflows, approval paths, and growth targets.' },
  { title: 'Web Application Development', icon: Globe2, text: 'Modern portals, dashboards, SaaS products, and enterprise systems built with scalable architecture.' },
  { title: 'Mobile Application Development', icon: Smartphone, text: 'Android and iOS-ready mobile experiences for teams, customers, and field operations.' },
  { title: 'Cloud Solutions', icon: Cloud, text: 'Cloud migration, hosting architecture, backups, monitoring, and performance modernization.' },
  { title: 'Business Process Automation', icon: Settings, text: 'Digitize repetitive operations with approvals, notifications, workflow engines, and analytics.' },
  { title: 'API Integration', icon: Link2, text: 'Connect ERP, accounting, payment, CRM, logistics, e-commerce, and third-party platforms.' },
  { title: 'ERP Support & Maintenance', icon: ShieldCheck, text: 'Ongoing security, enhancements, training, data support, and operational optimization.' }
];

export const erpModules = [
  { title: 'HR & Payroll', icon: Users, features: ['Attendance', 'Payroll rules', 'Leave approval'], benefits: 'Lower manual HR work and improve payroll accuracy.' },
  { title: 'Accounting & Finance', icon: BarChart3, features: ['Ledger', 'Voucher', 'Cash flow'], benefits: 'Real-time financial control and audit-ready reports.' },
  { title: 'Inventory Management', icon: PackageCheck, features: ['Stock tracking', 'Batch control', 'Warehouse'], benefits: 'Reduce stockouts, expiry loss, and dead inventory.' },
  { title: 'Procurement', icon: BriefcaseBusiness, features: ['Requisition', 'Supplier quotes', 'Purchase orders'], benefits: 'Control spending and standardize purchasing.' },
  { title: 'Sales Management', icon: ShoppingCart, features: ['Orders', 'Invoices', 'Targets'], benefits: 'Increase sales visibility from quotation to payment.' },
  { title: 'CRM', icon: MessageSquare, features: ['Leads', 'Pipeline', 'Customer history'], benefits: 'Convert more prospects with disciplined follow-up.' },
  { title: 'Manufacturing', icon: Factory, features: ['BOM', 'Production plan', 'Quality checks'], benefits: 'Track production cost, capacity, and wastage.' },
  { title: 'Supply Chain', icon: Truck, features: ['Dispatch', 'Route status', 'Delivery proof'], benefits: 'Improve fulfillment speed and delivery accountability.' },
  { title: 'Asset Management', icon: Building2, features: ['Asset register', 'Depreciation', 'Maintenance'], benefits: 'Protect assets and plan maintenance before failures.' },
  { title: 'Reporting & Analytics', icon: LineChart, features: ['KPI dashboards', 'Exports', 'Role reports'], benefits: 'Make faster decisions with trusted operational data.' }
];

export const industries = [
  { title: 'Healthcare', icon: HeartPulse, text: 'Patient operations, billing, pharmacy stock, HR, and reporting.' },
  { title: 'Pharmaceuticals', icon: ShieldCheck, text: 'Batch, expiry, compliance, procurement, distribution, and finance.' },
  { title: 'Manufacturing', icon: Factory, text: 'Production, inventory, quality, planning, and costing workflows.' },
  { title: 'Retail', icon: ShoppingCart, text: 'POS, inventory, loyalty, purchase, and sales analytics.' },
  { title: 'Logistics', icon: Truck, text: 'Shipment tracking, fleet coordination, billing, and proof of delivery.' },
  { title: 'Education', icon: School, text: 'Admissions, fees, HR, academic workflows, and parent portals.' },
  { title: 'E-Commerce', icon: PackageCheck, text: 'Orders, payment, warehouse, delivery, and customer support.' }
];

export const testimonials = [
  { quote: 'Coder Line Technology helped us replace spreadsheet-driven operations with one connected ERP workflow.', name: 'Operations Director', company: 'Manufacturing Group' },
  { quote: 'The team understood our reporting pain quickly and delivered dashboards our managers use every day.', name: 'Finance Lead', company: 'Retail Enterprise' },
  { quote: 'Their support approach is practical, responsive, and focused on business outcomes.', name: 'Managing Partner', company: 'Service Company' }
];

export const metrics = [
  { value: '35%', label: 'Average process time reduction' },
  { value: '99.5%', label: 'Target uptime for managed systems' },
  { value: '10+', label: 'ERP modules ready to tailor' },
  { value: '24/7', label: 'Support-ready engagement model' }
];

export const blogPosts = [
  { title: 'How ERP Helps Bangladeshi Businesses Scale with Control', category: 'ERP Strategy', date: 'June 2026', featured: true },
  { title: 'Custom ERP vs Off-the-Shelf ERP: What Should You Choose?', category: 'Digital Transformation', date: 'May 2026', featured: true },
  { title: 'Building Better Inventory Visibility with Integrated Software', category: 'Operations', date: 'April 2026', featured: false },
  { title: 'What Enterprise Leaders Should Expect from an ERP Implementation', category: 'Implementation', date: 'March 2026', featured: false }
];

export const adminModules = [
  'Dashboard Analytics',
  'Manage Blogs',
  'Manage Services',
  'Manage ERP Modules',
  'Manage Testimonials',
  'Manage Contact Messages',
  'Lead Management',
  'User Management',
  'Role Management'
];

export const authFeatures = ['JWT Authentication', 'Refresh Token', 'Forgot Password', 'Change Password', 'Role-Based Authorization'];

export const portfolio = [
  { title: 'Integrated Manufacturing ERP', type: 'ERP Project', text: 'Finance, inventory, production, procurement, HR, and executive analytics in one role-based system.' },
  { title: 'Retail Operations Platform', type: 'Software Project', text: 'Multi-branch sales, stock transfer, supplier management, and profitability dashboards.' },
  { title: 'Healthcare Workflow Automation', type: 'Case Study', text: 'Digitized billing, HR, inventory, and management reporting for faster back-office decisions.' }
];

export const values = [
  { title: 'Business First', text: 'Every technical decision must improve operational clarity, revenue, compliance, or efficiency.' },
  { title: 'Reliable Delivery', text: 'We favor transparent milestones, maintainable architecture, and disciplined deployment.' },
  { title: 'Security Mindset', text: 'Authentication, authorization, audit trails, and data protection are designed from the beginning.' },
  { title: 'Long-Term Partnership', text: 'ERP succeeds through iteration, support, training, and continuous improvement.' }
];

export const milestones = [
  'Founded with a focus on practical business software',
  'Expanded into modular ERP implementation',
  'Introduced cloud-ready deployment and API integrations',
  'Built a lead-focused delivery model for local and international clients'
];

export const whyChoose = [
  { title: 'Clean Architecture', icon: FileCode2, text: 'Maintainable systems with clear domain, application, infrastructure, and API boundaries.' },
  { title: 'Enterprise Security', icon: LockKeyhole, text: 'JWT, refresh tokens, role authorization, validation, logging, and audit trail patterns.' },
  { title: 'Conversion Focus', icon: Rocket, text: 'Web and software experiences designed to generate leads and shorten decision cycles.' },
  { title: 'Local Insight, Global Standard', icon: Globe2, text: 'Bangladesh market understanding with international SaaS and ERP delivery expectations.' }
];
