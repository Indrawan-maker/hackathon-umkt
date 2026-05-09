import type { Treatment } from "@/types/treatment";

export const TREATMENTS: Treatment[] = [
  // treatemnt kepala
  {
    kode: "A1",
    nama: "Totok & Head Massage",
    area: "Kepala",
    level: "Lembut",
    harga: {
      30: 90000,
      60: 130000,
      90: 160000,
      120: 200000,
    },
  },
  {
    kode: "A2",
    nama: "Scalp Aromatherapy",
    area: "Kepala",
    level: "Lembut",
    harga: {
      30: 85000,
      60: 120000,
      90: 160000,
      120: 190000,
    },
  },
  {
    kode: "B1",
    nama: "Head & Neck Relief",
    area: "Kepala",
    level: "Normal",
    harga: {
      30: 95000,
      60: 135000,
      90: 150000,
      120: 185000,
    },
  },
  {
    kode: "C1",
    nama: "Migraine Relief Therapy",
    area: "Kepala",
    level: "Keras",
    harga: {
      30: 100000,
      60: 140000,
      90: 170000,
      120: 205000,
    },
  },

  // treatement kaki
  {
    kode: "D1",
    nama: "Foot Reflexology",
    area: "Kaki",
    level: "Lembut",
    harga: {
      30: 80000,
      60: 120000,
      90: 150000,
      120: 185000,
    },
  },
  {
    kode: "E1",
    nama: "Leg & Foot Massage",
    area: "Kaki",
    level: "Normal",
    harga: {
      30: 95000,
      60: 135000,
      90: 160000,
      120: 200000,
    },
  },
  {
    kode: "E2",
    nama: "Leg & Refleksi Combo",
    area: "Kaki",
    level: "Normal",
    harga: {
      30: 100000,
      60: 145000,
      90: 165000,
      120: 205000,
    },
  },
  {
    kode: "F1",
    nama: "Sport Leg Therapy",
    area: "Kaki",
    level: "Keras",
    harga: {
      30: 110000,
      60: 150000,
      90: 170000,
      120: 210000,
    },
  },

  // treatment tangan
  {
    kode: "G1",
    nama: "Hand & Arm Relaxation",
    area: "Tangan",
    level: "Lembut",
    harga: {
      30: 75000,
      60: 110000,
      90: 140000,
      120: 175000,
    },
  },
  {
    kode: "H1",
    nama: "Arm & Shoulder Massage",
    area: "Tangan",
    level: "Normal",
    harga: {
      30: 85000,
      60: 120000,
      90: 150000,
      120: 185000,
    },
  },
  {
    kode: "H2",
    nama: "Arm & Neck Combo",
    area: "Tangan",
    level: "Normal",
    harga: {
      30: 95000,
      60: 135000,
      90: 155000,
      120: 190000,
    },
  },
  {
    kode: "I1",
    nama: "Deep Arm & Shoulder Press",
    area: "Tangan",
    level: "Keras",
    harga: {
      30: 100000,
      60: 135000,
      90: 165000,
      120: 200000,
    },
  },

  // punggung
  {
    kode: "J1",
    nama: "Back Relaxation Massage",
    area: "Punggung",
    level: "Lembut",
    harga: {
      30: 95000,
      60: 125000,
      90: 140000,
      120: 180000,
    },
  },
  {
    kode: "K1",
    nama: "Back & Waist Massage",
    area: "Punggung",
    level: "Normal",
    harga: {
      30: 105000,
      60: 140000,
      90: 150000,
      120: 190000,
    },
  },
  {
    kode: "K2",
    nama: "Back & Shoulder Combo",
    area: "Punggung",
    level: "Normal",
    harga: {
      30: 115000,
      60: 150000,
      90: 165000,
      120: 205000,
    },
  },
  {
    kode: "L1",
    nama: "Deep Tissue & Bekam",
    area: "Punggung",
    level: "Keras",
    harga: {
      30: 150000,
      60: 220000,
      90: 285000,
      120: 315000,
    },
  },
  {
    kode: "L2",
    nama: "Back Kerokan & Deep Massage",
    area: "Punggung",
    level: "Keras",
    harga: {
      30: 120000,
      60: 160000,
      90: 190000,
      120: 230000,
    },
  },

  // treatment upper
  {
    kode: "P1",
    nama: "Upper Body Relaxation",
    area: "Upper",
    level: "Lembut",
    harga: {
      30: 120000,
      60: 160000,
      90: 185000,
      120: 225000,
    },
  },
  {
    kode: "P2",
    nama: "Upper Aromatherapy Care",
    area: "Upper",
    level: "Lembut",
    harga: {
      30: 125000,
      60: 170000,
      90: 195000,
      120: 235000,
    },
  },
  {
    kode: "Q1",
    nama: "Upper Body Recovery",
    area: "Upper",
    level: "Normal",
    harga: {
      30: 135000,
      60: 180000,
      90: 210000,
      120: 250000,
    },
  },
  {
    kode: "Q2",
    nama: "Neck Back Shoulder Combo",
    area: "Upper",
    level: "Normal",
    harga: {
      30: 145000,
      60: 190000,
      90: 220000,
      120: 260000,
    },
  },
  {
    kode: "R1",
    nama: "Upper Deep Tissue Therapy",
    area: "Upper",
    level: "Keras",
    harga: {
      30: 160000,
      60: 210000,
      90: 250000,
      120: 290000,
    },
  },
  {
    kode: "R2",
    nama: "Upper Muscle Recovery Press",
    area: "Upper",
    level: "Keras",
    harga: {
      30: 170000,
      60: 225000,
      90: 265000,
      120: 305000,
    },
  },

  // tretment full badan
  {
    kode: "M1",
    nama: "Aromatherapy Full Body",
    area: "Full Badan",
    level: "Lembut",
    harga: {
      30: 120000,
      60: 150000,
      90: 160000,
      120: 200000,
    },
  },
  {
    kode: "N1",
    nama: "Full Body Massage & Scrub",
    area: "Full Badan",
    level: "Normal",
    harga: {
      30: 130000,
      60: 160000,
      90: 180000,
      120: 220000,
    },
  },
  {
    kode: "O1",
    nama: "Full Body Deep & Kerokan",
    area: "Full Badan",
    level: "Keras",
    harga: {
      30: 150000,
      60: 190000,
      90: 230000,
      120: 270000,
    },
  },
];