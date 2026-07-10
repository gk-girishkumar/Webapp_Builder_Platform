/*
UNDERSTANDING:
Building a premium internal equipment management dashboard called "AssetTrack Pro" using React + Vite + Tailwind CSS. The experience should feel like a modern SaaS admin dashboard with a sticky navigation header, operational KPI cards, analytics visualizations, searchable inventory tables, assignment tracking, maintenance alerts, departmental allocation insights, activity logs, quick administrative actions, and a support footer.

The dashboard is single-page and all sections from the plan must render sequentially with proper section ids. Navigation links must use smooth scrolling handlers instead of anchor navigation. The design direction uses Inter font with a clean enterprise UI aesthetic using the provided color palette:
- Primary: #2563EB
- Secondary: #0F172A
- Accent: #14B8A6
- Background: #F8FAFC
- Text: #111827

The UI must include:
- Sticky top navigation with search, notifications, CTA, and profile
- KPI overview cards
- Lightweight custom chart visuals using Tailwind and div-based charts
- Data tables with status badges
- Employee assignment cards
- Maintenance alerts and timelines
- Department allocation cards and heatmap
- Activity feed
- Quick action buttons
- Footer resources

PRESERVATION CHECKLIST:
- Implement all provided sections with exact ids
- Include headings/subheadings/cta labels from content_hints
- Use premium hover/active states
- Use Lucide icons only for icons
- Use Tailwind exclusively
- Include data tables and status badges
- Include chart summaries and visual analytics
- Sticky navbar with mobile menu
- Smooth scrolling interactions for nav and CTA buttons
- Responsive layouts for desktop and mobile
- Single-file App.jsx with subcomponents

CHANGE PLAN:
1. Import React hooks and Lucide icons
2. Create reusable utility components (SectionHeader, StatusBadge)
3. Define mock dashboard datasets
4. Build navbar with smooth scrolling and mobile support
5. Build overview metric cards
6. Build analytics cards and lightweight charts
7. Build inventory table with search UI
8. Build employee assignment section
9. Build maintenance alert center
10. Build department breakdown section
11. Build activity timeline
12. Build quick actions CTA area
13. Build footer support section
14. Compose all sections inside App export

LUCIDE CONSTRAINT:
Lucide Icons does NOT contain brand/social media icons like Facebook, Twitter, Instagram, LinkedIn, GitHub, or YouTube. Use only valid Lucide icons. Do not import nonexistent brand icons from lucide-react.

THIRD-PARTY PACKAGES:
No third-party packages are required. Use React and lucide-react only.

NAME COLLISION WARNING:
Avoid naming custom components the same as Lucide icons. If chart-related helper names are used, ensure imported icon aliases do not conflict.
*/

import React, { useMemo, useState } from 'react'
import {
  Bell,
  Search,
  Plus,
  ChevronDown,
  Menu,
  X,
  Laptop,
  Monitor,
  ShieldAlert,
  Clock3,
  ArrowRight,
  Download,
  Filter,
  Wrench,
  Building2,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Users,
  Package,
  Calendar,
  BarChart3,
  FileSpreadsheet,
  Send,
  ClipboardCheck,
} from 'lucide-react'

const navItems = [
  { id: 'dashboard_overview', label: 'Overview' },
  { id: 'asset_status_analytics', label: 'Analytics' },
  { id: 'equipment_inventory_table', label: 'Inventory' },
  { id: 'employee_assignments', label: 'Assignments' },
  { id: 'maintenance_and_alerts', label: 'Alerts' },
  { id: 'department_breakdown', label: 'Departments' },
  { id: 'audit_activity_feed', label: 'Activity' },
]

const inventoryData = [
  {
    id: 'AST-1042',
    serial: 'SN-LT-8832',
    employee: 'Maya Chen',
    category: 'Laptop',
    status: 'Assigned',
    warranty: 'Jan 2027',
    location: 'New York',
  },
  {
    id: 'AST-1188',
    serial: 'SN-MN-2921',
    employee: 'Unassigned',
    category: 'Monitor',
    status: 'Available',
    warranty: 'Sep 2026',
    location: 'Austin',
  },
  {
    id: 'AST-1291',
    serial: 'SN-PH-4422',
    employee: 'Daniel Ortiz',
    category: 'Phone',
    status: 'Maintenance',
    warranty: 'Jun 2025',
    location: 'Remote',
  },
  {
    id: 'AST-1305',
    serial: 'SN-TB-9901',
    employee: 'Alicia Moore',
    category: 'Tablet',
    status: 'Overdue',
    warranty: 'Mar 2026',
    location: 'Seattle',
  },
]

const assignmentCards = [
  {
    employee: 'Jordan Lee',
    assets: 'MacBook Pro + Dock',
    due: 'Return review in 12 days',
    status: 'Acknowledged',
  },
  {
    employee: 'Priya Raman',
    assets: 'Dell XPS + Dual Monitors',
    due: 'Recently assigned',
    status: 'Pending',
  },
  {
    employee: 'Marcus Hill',
    assets: 'iPhone 15 + Headset',
    due: 'Overdue by 3 days',
    status: 'Escalated',
  },
]

const alerts = [
  {
    title: 'Warranty expiring in 30 days',
    level: 'Medium',
    detail: '18 Lenovo laptops require coverage review.',
  },
  {
    title: 'Devices flagged as damaged',
    level: 'Critical',
    detail: '5 field devices reported cracked displays.',
  },
  {
    title: 'Unreturned equipment',
    level: 'High',
    detail: '17 employees have overdue return requests.',
  },
]

const activities = [
  'Asset reassigned to employee in Engineering',
  'Maintenance completed for conference room equipment',
  'Inventory imported from quarterly procurement sheet',
  'Return overdue notification sent to remote contractor',
]

function scrollToSection(e, id, closeMenu) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  closeMenu?.()
}

function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#0F172A]">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
      </div>
      {action}
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    Assigned: 'bg-blue-100 text-blue-700',
    Available: 'bg-emerald-100 text-emerald-700',
    Maintenance: 'bg-amber-100 text-amber-700',
    Overdue: 'bg-rose-100 text-rose-700',
    Pending: 'bg-amber-100 text-amber-700',
    Escalated: 'bg-rose-100 text-rose-700',
    Acknowledged: 'bg-emerald-100 text-emerald-700',
    Critical: 'bg-rose-100 text-rose-700',
    High: 'bg-orange-100 text-orange-700',
    Medium: 'bg-blue-100 text-blue-700',
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || 'bg-slate-100 text-slate-700'}`}
    >
      {status}
    </span>
  )
}

function MiniBarChart() {
  const values = [48, 72, 64, 81, 58, 91, 77]
  return (
    <div className="flex h-48 items-end gap-3">
      {values.map((v, index) => (
        <div key={index} className="flex flex-1 flex-col items-center gap-2">
          <div
            style={{ height: `${v}%` }}
            className="w-full rounded-t-2xl bg-gradient-to-t from-[#2563EB] to-[#60A5FA] transition-all duration-300 hover:scale-[1.02]"
          />
          <span className="text-xs text-slate-400">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
          </span>
        </div>
      ))}
    </div>
  )
}

function DonutVisual() {
  return (
    <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-[conic-gradient(#2563EB_0_68%,#14B8A6_68%_88%,#E2E8F0_88%_100%)]">
      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-inner">
        <span className="text-3xl font-bold text-[#0F172A]">81%</span>
        <span className="text-xs text-slate-500">Utilization</span>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [search, setSearch] = useState('')

  const filteredInventory = useMemo(() => {
    return inventoryData.filter(
      (item) =>
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.employee.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">
      <header
        id="top_navigation"
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#2563EB] p-2 text-white shadow-lg shadow-blue-200">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-bold text-[#0F172A]">AssetTrack Pro</h1>
                <p className="text-xs text-slate-500">
                  Centralized equipment assignment and inventory visibility
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-sm font-medium text-slate-600 transition-all duration-200 hover:scale-[1.02] hover:text-[#2563EB] active:scale-[0.98]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                placeholder="Global equipment search"
                className="w-72 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-white"
              />
            </div>

            <button className="relative rounded-xl border border-slate-200 p-2 transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98]">
              <Bell className="h-5 w-5 text-slate-700" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-rose-500" />
            </button>

            <button className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]">
              <Plus className="h-4 w-4" />
              Add Asset
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F172A] text-sm font-bold text-white">
                AM
              </div>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-xl border border-slate-200 p-2 lg:hidden"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id, () => setMobileMenu(false))}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-8">
        <section id="dashboard_overview">
          <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#2563EB] p-8 text-white shadow-2xl">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  <Activity className="h-4 w-4 text-[#14B8A6]" />
                  Real-time operational monitoring
                </div>

                <h2 className="text-4xl font-bold leading-tight">
                  Company Equipment Overview
                </h2>
                <p className="mt-4 text-slate-300">
                  Track inventory health, employee assignments, and maintenance
                  status in real time.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={(e) =>
                      scrollToSection(e, 'equipment_inventory_table')
                    }
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#0F172A] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                  >
                    View Full Inventory
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98]">
                    Last 30 Days
                  </button>
                </div>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-4">
                {[
                  {
                    title: '2,450 Total Assets',
                    icon: Package,
                    color: 'from-blue-500 to-blue-600',
                  },
                  {
                    title: '1,980 Assigned Devices',
                    icon: Laptop,
                    color: 'from-emerald-500 to-teal-500',
                  },
                  {
                    title: '42 Assets Under Maintenance',
                    icon: Wrench,
                    color: 'from-amber-500 to-orange-500',
                  },
                  {
                    title: '17 Overdue Returns',
                    icon: Clock3,
                    color: 'from-rose-500 to-red-500',
                  },
                ].map((card, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
                  >
                    <div
                      className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${card.color} p-3`}
                    >
                      <card.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-slate-300">{card.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="asset_status_analytics">
          <SectionHeader
            title="Asset Utilization & Status Trends"
            subtitle="Monitor equipment allocation efficiency across departments and locations."
            action={
              <button className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]">
                <Download className="h-4 w-4" />
                Export Reports
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#0F172A]">
                    Assigned vs Available Assets
                  </h3>
                  <p className="text-sm text-slate-500">
                    Current inventory allocation
                  </p>
                </div>
                <BarChart3 className="h-5 w-5 text-[#2563EB]" />
              </div>
              <DonutVisual />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#0F172A]">
                    Monthly Maintenance Trends
                  </h3>
                  <p className="text-sm text-slate-500">
                    Hardware repair and service activity
                  </p>
                </div>
                <Calendar className="h-5 w-5 text-[#14B8A6]" />
              </div>
              <MiniBarChart />
            </div>
          </div>
        </section>

        <section id="equipment_inventory_table">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <SectionHeader
              title="Equipment Inventory"
              subtitle="Manage devices, accessories, and office hardware from one centralized inventory table."
              action={
                <button className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:scale-[1.02] hover:bg-slate-100 active:scale-[0.98]">
                  <FileSpreadsheet className="h-4 w-4" />
                  Import Inventory CSV
                </button>
              }
            />

            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search asset ID, employee, or category"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98]">
                  <Filter className="h-4 w-4" />
                  Filters
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl bg-[#14B8A6] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-teal-600 active:scale-[0.98]">
                  Bulk Actions
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50">
                    <tr className="text-left text-sm text-slate-500">
                      {[
                        'Asset ID',
                        'Serial Number',
                        'Assigned Employee',
                        'Category',
                        'Condition Status',
                        'Warranty',
                        'Office Location',
                      ].map((head) => (
                        <th key={head} className="px-6 py-4 font-semibold">
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {filteredInventory.map((item, index) => (
                      <tr
                        key={index}
                        className="border-t border-slate-100 transition-all duration-200 hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-semibold text-[#0F172A]">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.serial}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.employee}
                        </td>
                        <td className="px-6 py-4">
                          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm">
                            {item.category === 'Laptop' && (
                              <Laptop className="h-4 w-4" />
                            )}
                            {item.category === 'Monitor' && (
                              <Monitor className="h-4 w-4" />
                            )}
                            {item.category}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={item.status} />
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.warranty}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {item.location}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="employee_assignments">
          <SectionHeader
            title="Employee Equipment Assignments"
            subtitle="Track ownership history and simplify onboarding or offboarding asset allocation."
            action={
              <button className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]">
                <Users className="h-4 w-4" />
                Assign New Asset
              </button>
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {assignmentCards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">
                      {card.employee}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {card.assets}
                    </p>
                  </div>
                  <StatusBadge status={card.status} />
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-[#14B8A6]" />
                    <p className="text-sm font-medium text-slate-700">
                      {card.due}
                    </p>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98]">
                  View Assignment History
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="maintenance_and_alerts">
          <SectionHeader
            title="Maintenance & Compliance Monitoring"
            subtitle="Prevent asset downtime with proactive issue tracking and automated reminders."
            action={
              <button className="group inline-flex items-center gap-2 rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-rose-600 active:scale-[0.98]">
                <ShieldAlert className="h-4 w-4" />
                Review Critical Alerts
              </button>
            }
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-2xl bg-rose-50 p-3 text-rose-600">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <StatusBadge status={alert.level} />
                </div>

                <h3 className="font-semibold text-[#0F172A]">
                  {alert.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {alert.detail}
                </p>

                <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition-all duration-200 hover:gap-3">
                  Open alert
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="department_breakdown">
          <SectionHeader
            title="Department Allocation Insights"
            subtitle="Identify resource gaps and optimize equipment distribution across teams."
            action={
              <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 active:scale-[0.98]">
                Compare Departments
              </button>
            }
          />

          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                dept: 'Engineering',
                count: '612 Active Devices',
                usage: '92%',
              },
              {
                dept: 'Operations',
                count: '280 Active Devices',
                usage: '74%',
              },
              {
                dept: 'Executive',
                count: '88 Premium Devices',
                usage: '81%',
              },
              {
                dept: 'Remote Teams',
                count: '344 Distributed Assets',
                usage: '89%',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-50 p-3 text-[#2563EB]">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-[#14B8A6]">
                    {item.usage}
                  </span>
                </div>

                <h3 className="font-semibold text-[#0F172A]">
                  {item.dept}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{item.count}</p>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]"
                    style={{ width: item.usage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="audit_activity_feed">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <SectionHeader
              title="Recent Asset Activity"
              subtitle="Maintain transparent operational records for compliance and IT auditing."
              action={
                <button className="group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98]">
                  <Download className="h-4 w-4" />
                  Download Audit Logs
                </button>
              }
            />

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 p-5 transition-all duration-200 hover:bg-slate-50"
                >
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-[#0F172A]">
                      {activity}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Logged automatically by AssetTrack Pro activity engine.
                    </p>
                  </div>

                  <span className="text-xs text-slate-400">
                    {index + 1}h ago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quick_actions_panel">
          <div className="rounded-3xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold">
                  Administrative Quick Actions
                </h2>
                <p className="mt-3 text-blue-50">
                  Speed up recurring equipment management workflows with
                  one-click tools.
                </p>
              </div>

              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-semibold text-[#0F172A] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]">
                Generate Asset Report
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {[
                {
                  label: 'Add equipment',
                  icon: Plus,
                },
                {
                  label: 'Bulk assign devices',
                  icon: ClipboardCheck,
                },
                {
                  label: 'Send return reminders',
                  icon: Send,
                },
                {
                  label: 'Export inventory data',
                  icon: Download,
                },
              ].map((action, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-[0.98]"
                >
                  <div className="rounded-xl bg-white/20 p-3">
                    <action.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer
        id="support_and_footer"
        className="mt-10 border-t border-slate-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-[#0F172A]">
              Internal IT Resources
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Access support documentation and equipment handling policies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A]">Policies</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <p>Asset request policy</p>
              <p>Equipment return guidelines</p>
              <p>Compliance review procedures</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#0F172A]">Support</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <p>Help desk contact</p>
              <p>Incident escalation</p>
              <p>Maintenance scheduling</p>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-emerald-50 p-5">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-emerald-500" />
                <p className="font-semibold text-emerald-700">
                  System uptime status
                </p>
              </div>
              <p className="mt-2 text-sm text-emerald-600">
                All systems operational · v4.2.1
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}