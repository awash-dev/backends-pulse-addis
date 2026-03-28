"use strict";

const categoryImagePool = {
  Medicines: [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1576071804486-b8bc22106dbf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1471864190281-ad5f9f81ce4c?auto=format&fit=crop&w=1200&q=80",
  ],
  "Personal Care": [
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&w=1200&q=80",
  ],
  Supplements: [
    "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550573105-df2672460e34?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
  ],
  "Baby & Mother": [
    "https://images.unsplash.com/photo-1515023115689-589c39d22c4f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516549297317-05c0d8470187?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1587854680352-936b22b91030?auto=format&fit=crop&w=1200&q=80",
  ],
  "Medical Equipment": [
    "https://images.unsplash.com/photo-1576091160550-2173bdd99625?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584362946444-1e6677443190?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
  ],
};

const pharmacyCategories = [
  { title: "Medicines", image: categoryImagePool.Medicines[0] },
  { title: "Personal Care", image: categoryImagePool["Personal Care"][0] },
  { title: "Supplements", image: categoryImagePool.Supplements[0] },
  { title: "Baby & Mother", image: categoryImagePool["Baby & Mother"][0] },
  { title: "Medical Equipment", image: categoryImagePool["Medical Equipment"][0] },
];

const pharmacySubcategories = [
  { title: "Pain Relief", category: "Medicines", image: categoryImagePool.Medicines[1] },
  { title: "Antibiotics", category: "Medicines", image: categoryImagePool.Medicines[2] },
  { title: "Cold & Flu", category: "Medicines", image: categoryImagePool.Medicines[3] },
  { title: "Digestive Care", category: "Medicines", image: categoryImagePool.Medicines[0] },
  { title: "Oral Care", category: "Personal Care", image: categoryImagePool["Personal Care"][1] },
  { title: "Skin Care", category: "Personal Care", image: categoryImagePool["Personal Care"][0] },
  { title: "Hygiene Essentials", category: "Personal Care", image: categoryImagePool["Personal Care"][2] },
  { title: "Multivitamins", category: "Supplements", image: categoryImagePool.Supplements[0] },
  { title: "Minerals & Iron", category: "Supplements", image: categoryImagePool.Supplements[1] },
  { title: "Immunity Support", category: "Supplements", image: categoryImagePool.Supplements[2] },
  { title: "Infant Formula", category: "Baby & Mother", image: categoryImagePool["Baby & Mother"][0] },
  { title: "Baby Diapers", category: "Baby & Mother", image: categoryImagePool["Baby & Mother"][1] },
  { title: "Maternal Care", category: "Baby & Mother", image: categoryImagePool["Baby & Mother"][2] },
  { title: "Diagnostics", category: "Medical Equipment", image: categoryImagePool["Medical Equipment"][0] },
  { title: "Home Monitoring", category: "Medical Equipment", image: categoryImagePool["Medical Equipment"][1] },
  { title: "First Aid", category: "Medical Equipment", image: categoryImagePool["Medical Equipment"][2] },
];

const pharmacyBrands = [
  "Addis Pharmaceutical Factory",
  "EPHARM",
  "Julphar",
  "Bayer",
  "GSK",
  "Himalaya",
];

const pharmacyColorTitles = [
  "Standard Pack",
  "Family Pack",
  "Hospital Pack",
];

const pharmacyProducts = [
  {
    title: "Paracetamol 500mg Tablets",
    description: "Trusted pain and fever relief tablets suitable for everyday pharmacy use.",
    price: 160,
    category: "Medicines",
    subcategory: "Pain Relief",
    brand: "Addis Pharmaceutical Factory",
    quantity: 320,
    tags: ["ethiopia", "essential", "pain-relief"],
  },
  {
    title: "Ibuprofen 400mg Tablets",
    description: "Anti-inflammatory tablet for pain, headache, and body ache management.",
    price: 240,
    category: "Medicines",
    subcategory: "Pain Relief",
    brand: "Bayer",
    quantity: 260,
    tags: ["ethiopia", "essential", "anti-inflammatory"],
  },
  {
    title: "Amoxicillin 500mg Capsules",
    description: "Broad-spectrum antibiotic capsule for physician-guided infection treatment.",
    price: 430,
    category: "Medicines",
    subcategory: "Antibiotics",
    brand: "Julphar",
    quantity: 180,
    tags: ["ethiopia", "rx", "antibiotic"],
  },
  {
    title: "Azithromycin 500mg Tablets",
    description: "Convenient once-daily antibiotic tablet for doctor-prescribed therapies.",
    price: 680,
    category: "Medicines",
    subcategory: "Antibiotics",
    brand: "EPHARM",
    quantity: 140,
    tags: ["ethiopia", "rx", "antibiotic"],
  },
  {
    title: "Cough Syrup Honey Formula",
    description: "Soothing cough syrup blend for dry and irritated throat support.",
    price: 290,
    category: "Medicines",
    subcategory: "Cold & Flu",
    brand: "GSK",
    quantity: 210,
    tags: ["ethiopia", "cold-flu", "popular"],
  },
  {
    title: "ORS Rehydration Salts",
    description: "Oral rehydration sachets for dehydration support during diarrhea and heat.",
    price: 95,
    category: "Medicines",
    subcategory: "Digestive Care",
    brand: "Addis Pharmaceutical Factory",
    quantity: 500,
    tags: ["ethiopia", "essential", "digestive-care"],
  },
  {
    title: "Omeprazole 20mg Capsules",
    description: "Acid control capsule to help reduce gastric discomfort and reflux symptoms.",
    price: 310,
    category: "Medicines",
    subcategory: "Digestive Care",
    brand: "Julphar",
    quantity: 240,
    tags: ["ethiopia", "digestive-care"],
  },
  {
    title: "Chlorhexidine Mouthwash",
    description: "Antibacterial mouthwash for gum health and fresh breath protection.",
    price: 360,
    category: "Personal Care",
    subcategory: "Oral Care",
    brand: "GSK",
    quantity: 190,
    tags: ["ethiopia", "personal-care", "oral-care"],
  },
  {
    title: "Sensitive Fluoride Toothpaste",
    description: "Daily care toothpaste designed for sensitive teeth and enamel support.",
    price: 145,
    category: "Personal Care",
    subcategory: "Oral Care",
    brand: "Himalaya",
    quantity: 420,
    tags: ["ethiopia", "personal-care", "oral-care"],
  },
  {
    title: "Antiseptic Hand Sanitizer 70%",
    description: "Quick-dry hand sanitizer for daily hygiene in home, office, and travel.",
    price: 220,
    category: "Personal Care",
    subcategory: "Hygiene Essentials",
    brand: "EPHARM",
    quantity: 350,
    tags: ["ethiopia", "hygiene", "personal-care"],
  },
  {
    title: "Moisturizing Skin Cream",
    description: "Gentle daily moisturizer for dry and sensitive skin care routines.",
    price: 280,
    category: "Personal Care",
    subcategory: "Skin Care",
    brand: "Himalaya",
    quantity: 260,
    tags: ["ethiopia", "personal-care", "skin-care"],
  },
  {
    title: "Vitamin C 1000mg Effervescent",
    description: "High-strength Vitamin C tablet to support immunity and daily wellness.",
    price: 390,
    category: "Supplements",
    subcategory: "Immunity Support",
    brand: "Bayer",
    quantity: 240,
    tags: ["ethiopia", "supplement", "immunity"],
  },
  {
    title: "Multivitamin Complete A-Z",
    description: "Balanced multivitamin formula for daily nutritional support.",
    price: 520,
    category: "Supplements",
    subcategory: "Multivitamins",
    brand: "GSK",
    quantity: 210,
    tags: ["ethiopia", "supplement", "daily-health"],
  },
  {
    title: "Ferrous Sulfate + Folic Acid",
    description: "Iron and folate supplement often used to support blood health needs.",
    price: 260,
    category: "Supplements",
    subcategory: "Minerals & Iron",
    brand: "Addis Pharmaceutical Factory",
    quantity: 260,
    tags: ["ethiopia", "supplement", "iron"],
  },
  {
    title: "Zinc + Vitamin D Tablets",
    description: "Dual-nutrient supplement for immune and bone support.",
    price: 340,
    category: "Supplements",
    subcategory: "Immunity Support",
    brand: "EPHARM",
    quantity: 230,
    tags: ["ethiopia", "supplement", "immunity"],
  },
  {
    title: "Infant Formula Stage 1",
    description: "Nutritionally balanced formula designed for infants from birth.",
    price: 1450,
    category: "Baby & Mother",
    subcategory: "Infant Formula",
    brand: "Julphar",
    quantity: 120,
    tags: ["ethiopia", "baby", "mother-care"],
  },
  {
    title: "Baby Diapers Small Pack",
    description: "Comfort-fit diapers with high absorbency for newborn daily use.",
    price: 530,
    category: "Baby & Mother",
    subcategory: "Baby Diapers",
    brand: "Himalaya",
    quantity: 220,
    tags: ["ethiopia", "baby", "daily-need"],
  },
  {
    title: "Prenatal Care Capsules",
    description: "Prenatal vitamin support capsules for maternal wellness.",
    price: 610,
    category: "Baby & Mother",
    subcategory: "Maternal Care",
    brand: "GSK",
    quantity: 180,
    tags: ["ethiopia", "mother-care", "supplement"],
  },
  {
    title: "Digital Thermometer",
    description: "Fast reading digital thermometer for home temperature monitoring.",
    price: 480,
    category: "Medical Equipment",
    subcategory: "Home Monitoring",
    brand: "EPHARM",
    quantity: 140,
    tags: ["ethiopia", "equipment", "home-monitoring"],
  },
  {
    title: "Upper Arm Blood Pressure Monitor",
    description: "Reliable digital blood pressure monitor for home healthcare tracking.",
    price: 2850,
    category: "Medical Equipment",
    subcategory: "Home Monitoring",
    brand: "Bayer",
    quantity: 70,
    tags: ["ethiopia", "equipment", "home-monitoring"],
  },
  {
    title: "Glucometer Starter Kit",
    description: "Blood glucose monitoring kit with strips and lancets included.",
    price: 2350,
    category: "Medical Equipment",
    subcategory: "Diagnostics",
    brand: "Julphar",
    quantity: 85,
    tags: ["ethiopia", "equipment", "diagnostics"],
  },
  {
    title: "Family First Aid Kit",
    description: "Ready-to-use first aid kit with bandages, gauze, and essentials.",
    price: 990,
    category: "Medical Equipment",
    subcategory: "First Aid",
    brand: "Addis Pharmaceutical Factory",
    quantity: 130,
    tags: ["ethiopia", "equipment", "first-aid"],
  },
];

const pharmacyAds = [
  "/assets/img/banner/eth1.jpg",
  "/assets/img/banner/eth2.jpg",
  "/assets/img/banner/eth3.jpg",
  "/assets/img/banner/eth1.png",
];

const safeId = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getProductImageSetByCategory = (category, index = 0) => {
  const pool = categoryImagePool[category] || categoryImagePool.Medicines;
  const first = pool[index % pool.length];
  const second = pool[(index + 1) % pool.length];
  return [
    {
      public_id: `seed/${safeId(category)}-${index}-1`,
      secure_url: first,
    },
    {
      public_id: `seed/${safeId(category)}-${index}-2`,
      secure_url: second,
    },
  ];
};

module.exports = {
  pharmacyAds,
  pharmacyBrands,
  pharmacyCategories,
  pharmacyColorTitles,
  pharmacyProducts,
  pharmacySubcategories,
  getProductImageSetByCategory,
};
