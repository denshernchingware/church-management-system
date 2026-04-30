import { Head } from '@inertiajs/react';

import { dashboard } from '@/routes';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <main className="  min-h-screen">
  <div className="p-10 max-w-7xl mx-auto space-y-8">

    {/* Dashboard Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        <p className="text-base text-slate-500">Overview of church activities and performance</p>
      </div>
      <div className="w-full md:max-w-sm">
        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Search data, members, or events..." type="text" />
      </div>
      <div className="inline-flex p-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
        <button className="px-4 py-2 text-xs font-medium rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">Today</button>
        <button className="px-4 py-2 text-xs font-medium rounded-lg bg-blue-600 text-white shadow-sm">Weekly</button>
        <button className="px-4 py-2 text-xs font-medium rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">Monthly</button>
      </div>
    </div>

    {/* Summary Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Attendance Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-semibold">Attendance</span>
          <span className="material-symbols-outlined text-blue-500">groups</span>
        </div>
        <div className="flex items-end gap-2 mb-6">
          <span className="text-3xl font-bold">428</span>
          <span className="text-sm font-medium text-emerald-600 pb-1 flex items-center">
            <span className="material-symbols-outlined text-sm">trending_up</span> 4%
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Present</span>
            <span className="font-bold">75%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-300"></span> Absent</span>
            <span className="font-bold">15%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400"></span> Apology</span>
            <span className="font-bold">10%</span>
          </div>
        </div>
      </div>

      {/* Testimonials Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-semibold">Testimonials</span>
          <span className="material-symbols-outlined text-purple-500">chat_bubble</span>
        </div>
        <div className="flex items-end gap-2 mb-4">
          <span className="text-3xl font-bold">42 Total</span>
          <span className="text-sm font-medium text-emerald-600 pb-1 flex items-center">
            <span className="material-symbols-outlined text-sm">trending_up</span> 12%
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-6">Increased engagement since new series launch.</p>
        <div className="flex -space-x-2">
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb3gNRiT_5e2KM-v669yxHvWV96vgq4-w9Uy6Blo4WuPeHD0HMr3v658bWNkjwh5R3vjjltoQ12Yn4Qg7_Hw5om-Mdmtsqf1ywBW9jaA2Hhp3zDerS0815bUIxHXt2w96BOmts4lV1yUSM6fT4EXYpnzHxNYA9SRtPbS0T5Gf_ceCCJclkS5bo40w8oPPmjby5D9jHZG0XlIWW3f7Hv00O_6wWpOLcfNItPdP73GsAOoK07UWd0-6t4bi6SaTYt12whdx5rf8Htzqi" alt=""/>
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd7VoHwAzFeo9zvfzGgdKa15A3S0MfPCYKryGQxA7JCaqh9cfZu98ZVqriP-toCQTMJFTUsHRKmUDVHF-mGbgVu3vG7k6Q4OT-i5yZ8TJRsph9v6QraeWRXEXtdoI5SAiM4QruP9ZKONSKN6jXp6LVLkoT94F25LcSairCtkIBYEqs_hvsXdoZPDtecmB8vFR-zFx44uJcerGCirvAGR3wXApaxOrZVYAjQsM9cawv91SfUhTNEK6p0iltBPdrAdlV4cXNSJQzpDYO" alt=""/>
          <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+8</div>
        </div>
      </div>

      {/* Offerings Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-semibold">Offerings</span>
          <span className="material-symbols-outlined text-emerald-500">payments</span>
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-end mb-1">
            <span className="text-2xl font-bold">$8,500</span>
            <span className="text-xs text-slate-400">Target: $10k</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full w-4/5" ></div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-50">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Balance</span>
            <span className="text-lg font-bold text-slate-700">$1,500</span>
          </div>
        </div>
      </div>

      {/* Suggestions Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-500 text-sm font-semibold">Suggestions</span>
          <span className="material-symbols-outlined text-orange-500">lightbulb</span>
        </div>
        <div className="flex-1">
          <span className="text-3xl font-bold block">15</span>
          <span className="text-sm font-medium text-slate-500">Pending Submissions</span>
        </div>
        <button className="w-full mt-6 py-2 text-blue-600 text-sm font-medium border border-blue-200 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          View Suggestions
        </button>
      </div>
    </div>

    {/* Middle Section */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Financial Analysis Chart */}
      <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Financial Analysis</h3>
            <p className="text-sm text-slate-500">Income vs Projected Budget</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-100 rounded-md">Monthly</button>
            <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-50 rounded-md">Yearly</button>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-64 relative w-full flex items-end justify-between px-2 overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-between py-2 text-[10px] text-slate-300 pointer-events-none">
            <div className="border-t border-slate-50 w-full pt-1">$12,000</div>
            <div className="border-t border-slate-50 w-full pt-1">$9,000</div>
            <div className="border-t border-slate-50 w-full pt-1">$6,000</div>
            <div className="border-t border-slate-50 w-full pt-1">$3,000</div>
            <div className="border-t border-slate-50 w-full pt-1">$0</div>
          </div>
          <svg className="absolute bottom-6 left-0 w-full h-40 opacity-70" preserveAspectRatio="none" viewBox="0 0 400 100">
            <path d="M0,80 C50,70 100,90 150,60 C200,30 250,50 300,20 C350,-10 400,30 400,30 L400,100 L0,100 Z" fill="url(#chart-grad)"></path>
            <defs>
              <linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.2"></stop>
                <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="relative w-full h-full pt-12 flex items-end justify-between px-4">
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-32 bg-blue-200 rounded-full"></div><span className="text-[10px] text-slate-400">Jan</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-40 bg-blue-200 rounded-full"></div><span className="text-[10px] text-slate-400">Feb</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-24 bg-blue-600 rounded-full"></div><span className="text-[10px] text-slate-400">Mar</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-48 bg-blue-200 rounded-full"></div><span className="text-[10px] text-slate-400">Apr</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-36 bg-blue-200 rounded-full"></div><span className="text-[10px] text-slate-400">May</span></div>
            <div className="flex flex-col items-center gap-2"><div className="w-1.5 h-44 bg-blue-200 rounded-full"></div><span className="text-[10px] text-slate-400">Jun</span></div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="text-xs text-slate-600 font-medium">Actual Paid</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-200"></span>
            <span className="text-xs text-slate-600 font-medium">Expected Goal</span>
          </div>
        </div>
      </div>

      {/* Submit Suggestion Form */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 mb-1">Submit Suggestion</h3>
        <p className="text-sm text-slate-500 mb-6">Share your ideas for community growth.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Your Name</label>
            <input className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" type="text"/>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Message</label>
            <textarea className="w-full border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-blue-500 focus:border-blue-500 resize-none" placeholder="How can we improve..."></textarea>
          </div>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all active:scale-95" type="submit">
            Submit Suggestion
          </button>
        </form>
      </div>
    </div>

    {/* Quick Reports Section */}
    <section>
      <h3 className="text-xl font-semibold mb-6 text-slate-900">Quick Reports</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Attendance Report */}
        <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">assignment_turned_in</span>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Attendance Report</h4>
          <p className="text-sm text-slate-500 mb-6">Detailed breakdown of weekly service turnout.</p>
          <button className="flex items-center gap-2 text-blue-600 text-xs font-medium group-hover:gap-3 transition-all">
            View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Financial Report */}
        <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 hover:border-emerald-100 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Financial Report</h4>
          <p className="text-sm text-slate-500 mb-6">Revenue insights and stewardship auditing.</p>
          <button className="flex items-center gap-2 text-blue-600 text-xs font-medium group-hover:gap-3 transition-all">
            View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Testimonials Report */}
        <div className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 hover:border-purple-100 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">volunteer_activism</span>
          </div>
          <h4 className="font-bold text-slate-900 mb-1">Testimonials Report</h4>
          <p className="text-sm text-slate-500 mb-6">Community stories and impact metrics.</p>
          <button className="flex items-center gap-2 text-blue-600 text-xs font-medium group-hover:gap-3 transition-all">
            View Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

      </div>
    </section>

  </div>
</main>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },

    ],
};
