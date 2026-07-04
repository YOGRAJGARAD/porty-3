import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const dashboards = [
  {
    title: "Amazon Sales Analysis Dashboard",
    description: "Interactive Power BI dashboard analyzing Amazon sales performance with KPIs, trends, category analysis and customer insights.",
    tags: ["Power BI", "SQL", "DAX"],
    tagColors: ["text-accent", "text-primary", "text-primary"],
    banner: "assets/amazon.png",
    github: "https://github.com/YOGRAJGARAD",
    metrics: [
      { label: "YTD Sales", value: "$1.94M" },
      { label: "QTD Sales", value: "$719.73K" },
      { label: "Products Sold", value: "24.37K" },
      { label: "YTD Reviews", value: "19.04M" },
    ],
  },
  {
    title: "Fitness Analytics Dashboard",
    description: "Comprehensive Power BI fitness dashboard tracking members, revenue, expenses, BMI, memberships and performance metrics.",
    tags: ["Power BI", "DAX", "Excel"],
    tagColors: ["text-accent", "text-primary", "text-primary"],
    banner: "assets/gym.png",
    github: "https://github.com/YOGRAJGARAD",
    metrics: [
      { label: "Revenue", value: "1.7M" },
      { label: "Expenses", value: "1.2M" },
      { label: "Profit", value: "535.5K" },
      { label: "Active Members", value: "44+" },
    ],
  },
];

export function DashboardsSection() {
  return (
    <section id="dashboards" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Power BI Dashboards</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
              Interactive Dashboards
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            </h2>
          </div>
          <span className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
            Power BI · DAX · SQL
          </span>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {dashboards.map((dash, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Banner image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={dash.banner}
                  alt={dash.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Metrics overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 flex-wrap">
                  {dash.metrics.map((m) => (
                    <div key={m.label} className="bg-black/60 backdrop-blur rounded-lg px-2.5 py-1.5 text-white">
                      <div className="text-xs font-bold leading-none">{m.value}</div>
                      <div className="text-[10px] text-white/60 mt-0.5 leading-none">{m.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={dash.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-xl bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{dash.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{dash.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dash.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/8 ${dash.tagColors[ti]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
