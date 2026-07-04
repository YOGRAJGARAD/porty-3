export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
  highlight?: 'success' | 'danger';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  status: string;
  category: string;
  technologies: string[];
  banner: string;
  /** 'cover' (default) fills the banner area; 'contain' shows the full image with padding */
  bannerFit?: 'cover' | 'contain';
  /** CSS background-color for the banner wrapper when bannerFit is 'contain' */
  bannerBg?: string;
  problemStatement: string;
  features: string[];
  results?: string[];
  goal?: string;
  architectureFlow?: string[];
  metrics: ProjectMetric[];
  screenshots: string[];
  github: string;
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
  // Card 1 — FYP
  {
    id: "fyp-causal-semantic",
    title: "Learning Causal Semantic Representations for Robust OOD Prediction",
    subtitle: "An Empirical Investigation on Correlated MNIST Data",
    shortDescription: "A CSG framework that achieves 89.3% OOD accuracy vs 11.2% for standard classifiers — disentangling invariant semantic factors from spurious correlations.",
    status: "Final Year Project | 2025–2026",
    category: "Causal ML • Generative Models",
    technologies: ["Python", "PyTorch", "TensorFlow", "Causal Inference", "Generative Models", "Latent Factor Analysis", "MNIST"],
    banner: "assets/causal-network.png",
    problemStatement: "Deep learning models fail catastrophically on Out-of-Distribution (OOD) testing environments because they exploit superficial, spurious correlations within training data instead of discovering invariant causal structural mechanisms.",
    goal: "To design a comprehensive Causal Semantic Generative (CSG) framework capable of disentangling invariant semantic factors from volatile structural variants, ensuring accurate and stable cross-domain generalizability.",
    architectureFlow: [
      "Step 1 — Prior Distribution: Captures training environment correlations and domain dynamics.",
      "Step 2 — Decoder Network: Generates complex structural observations from distinct latent factors.",
      "Step 3 — Causal Predictor: Predicts labels strictly using invariant, robust semantic features.",
      "Step 4 — OOD Deployment: Evaluates stability against severe, unseen environment shifts."
    ],
    features: [
      "Disentangled Latent Space",
      "Eliminates Spurious Correlation",
      "Strict Invariant Prediction Loop",
      "Cross-domain generalization"
    ],
    metrics: [
      { label: "Standard ERM", value: "11.2%", description: "Accuracy on OOD — Catastrophic Failure", highlight: "danger" },
      { label: "CSG Model (Ours)", value: "89.3%", description: "Accuracy on OOD — Highly Robust", highlight: "success" },
      { label: "Improvement", value: "+78.1pp", description: "Accuracy gain over baseline" }
    ],
    screenshots: ["assets/causal-network.png", "assets/causal_math.png", "assets/causal.png"],
    github: "https://github.com/YOGRAJGARAD",
    isFeatured: true
  },

  // Card 2 — Walmart
  {
    id: "walmart-sales",
    title: "Walmart Sales Analysis",
    subtitle: "End-to-end retail data pipeline using Python and SQL.",
    shortDescription: "Engineered a full ETL pipeline with Python and SQL (MySQL + PostgreSQL) to extract, clean, and analyze 10K+ Walmart sales records and surface actionable business insights.",
    status: "Completed",
    category: "Data Engineering • SQL",
    technologies: ["Python", "SQL", "MySQL", "PostgreSQL", "Pandas", "NumPy", "SQLAlchemy", "Jupyter Notebook"],
    banner: "assets/walmart_Walmart Project.png",
    problemStatement: "Retail teams needed a structured analytical framework to understand revenue trends, identify best-selling categories, and analyse customer buying behaviour across branches.",
    goal: "Build an end-to-end data analysis pipeline extracting critical business insights from Walmart sales data using Python for data processing and SQL for complex querying.",
    architectureFlow: [
      "Step 1 — Data Ingestion: Pulled 10K+ records via Kaggle API and loaded into Pandas.",
      "Step 2 — Data Cleaning: Removed duplicates, handled missing values, fixed data types and currency formatting.",
      "Step 3 — Feature Engineering: Calculated Total Amount per transaction and enriched the dataset.",
      "Step 4 — SQL Analysis: Loaded into MySQL & PostgreSQL; executed complex queries for business insights."
    ],
    features: [
      "Revenue trends across branches and categories",
      "Best-selling product category identification",
      "Sales performance by time, city & payment method",
      "Profit margin analysis by branch",
      "Peak sales period and customer buying pattern analysis"
    ],
    results: [
      "Identified top revenue-generating branches and categories",
      "Surfaced preferred payment methods and peak shopping hours",
      "Delivered structured documentation in Jupyter Notebook"
    ],
    metrics: [
      { label: "Dataset", value: "10K+", description: "Walmart sales records processed" },
      { label: "Databases", value: "2", description: "MySQL and PostgreSQL dual-pipeline" },
      { label: "Business Queries", value: "15+", description: "Complex SQL queries answered" },
      { label: "Pipeline", value: "100%", description: "End-to-end automated ETL" }
    ],
    screenshots: ["assets/walmart_Walmart Project.png", "assets/walmart_walmart_project-piplelines.png"],
    github: "https://github.com/YOGRAJGARAD"
  },

  // Card 3 — Netflix SQL
  {
    id: "netflix-sql",
    title: "Netflix Movies & TV Shows Data Analysis",
    subtitle: "Comprehensive SQL analysis of Netflix content to extract business insights.",
    shortDescription: "Solved 15 real-world business problems on a Netflix dataset using advanced SQL — analysing content distribution, ratings, countries, durations, and keyword-based categorisation.",
    status: "Completed",
    category: "SQL • Data Analysis",
    technologies: ["SQL", "PostgreSQL", "Analytics"],
    banner: "assets/netflix-logo.png",
    bannerFit: "contain",
    bannerBg: "#141414",
    problemStatement: "Streaming platforms accumulate vast content libraries with no clear picture of content distribution, rating patterns, or regional gaps — making strategic decisions hard to justify with data.",
    goal: "Perform a comprehensive SQL-driven analysis of Netflix's movie and TV show catalogue to answer 15 structured business questions and extract actionable content insights.",
    architectureFlow: [
      "Step 1 — Schema Design: Created Netflix table with 12 columns covering type, title, director, cast, country, rating, and duration.",
      "Step 2 — Data Exploration: Analysed content distribution across movies vs TV shows and identified common rating patterns.",
      "Step 3 — Business Queries: Solved 15 business problems using JOINs, CTEs, window functions, and aggregations.",
      "Step 4 — Insights & Reporting: Categorised content by keywords, geography, and duration for strategic conclusions."
    ],
    features: [
      "Movies vs TV shows distribution analysis",
      "Most common ratings by content type",
      "Top 5 countries by content volume",
      "Longest movies and multi-season shows",
      "Content categorisation by keywords (violence, kill, etc.)"
    ],
    results: [
      "Identified top content-producing countries and dominant rating categories",
      "Discovered seasonal addition trends and director-wise content patterns",
      "Categorised all content as 'Good' or 'Bad' based on description keywords"
    ],
    metrics: [
      { label: "Business Problems", value: "15", description: "SQL queries solving real business questions" },
      { label: "Dataset", value: "Kaggle", description: "Netflix shows dataset (8,800+ titles)" },
      { label: "SQL Techniques", value: "CTEs, Windows", description: "Advanced SQL: CTEs, window functions, aggregations" },
      { label: "Content Types", value: "2", description: "Movies and TV Shows analysed" }
    ],
    screenshots: ["assets/netflix-logo.png"],
    github: "https://github.com/YOGRAJGARAD/NETFLIX_SQL_PROJECT"
  },

  // Card 4 — SQL Retail Sales
  {
    id: "sql-retail-sales",
    title: "SQL Retail Sales Analysis",
    subtitle: "Beginner to intermediate SQL project on a structured retail sales database.",
    shortDescription: "Set up a retail sales database from scratch, performed EDA, cleaned data, and solved real business questions using SQL queries covering customer demographics, category performance, and time-based trends.",
    status: "Completed",
    category: "SQL • EDA",
    technologies: ["SQL", "PostgreSQL", "EDA", "Data Cleaning"],
    banner: "assets/email_workflow.png",
    problemStatement: "Raw retail transaction data had missing values, inconsistent types, and no analytical structure — making it impossible to answer business questions about customer behaviour and category performance.",
    goal: "Set up a clean retail sales database (p1_retail_db), perform thorough EDA and data cleaning, then answer 10 business questions through structured SQL queries.",
    architectureFlow: [
      "Step 1 — Database Setup: Created p1_retail_db with a retail_sales table covering transactions, demographics, and sales amounts.",
      "Step 2 — Data Cleaning: Identified and removed null records across all key columns.",
      "Step 3 — EDA: Counted records, unique customers, and distinct product categories.",
      "Step 4 — Business Analysis: Wrote 10 SQL queries to uncover trends in sales, customers, and time-based shifts."
    ],
    features: [
      "Sales filtered by date, category, and quantity thresholds",
      "Total sales aggregation per category",
      "Top 5 customers by total purchase amount",
      "Unique customer count per product category",
      "Shift-based order analysis (Morning / Afternoon / Evening)"
    ],
    results: [
      "Identified high-value transactions (total sale > 1000) and premium buyers",
      "Revealed peak shopping shifts and monthly sales variations",
      "Produced a clean, analysis-ready dataset with documented EDA workflow"
    ],
    metrics: [
      { label: "Business Queries", value: "10+", description: "SQL questions answered end-to-end" },
      { label: "Database", value: "p1_retail_db", description: "Custom retail sales database built from scratch" },
      { label: "Techniques", value: "EDA + SQL", description: "Data cleaning, EDA, aggregations, CTEs" },
      { label: "Categories", value: "3+", description: "Clothing, Beauty, and more" }
    ],
    screenshots: ["assets/email_workflow.png"],
    github: "https://github.com/YOGRAJGARAD"
  }
];
