import type { Treatment } from "@/types/treatment";

export const TREATMENTS: Treatment[] = [
  // treatemnt kepala
  {
    kode: "A1",
    nama: "Totok & Pijat Kepala",
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
    nama: "Aromaterapi Kulit Kepala",
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
    nama: "Relaksasi Kepala & Leher",
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
    nama: "Terapi Reda Migrain",
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
    nama: "Refleksi Kaki",
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
    nama: "Pijat Kaki & Betis",
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
    nama: "Kombinasi Kaki & Refleksi",
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
    nama: "Terapi Otot Kaki Sport",
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
    nama: "Relaksasi Tangan & Lengan",
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
    nama: "Pijat Lengan & Bahu",
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
    nama: "Kombinasi Lengan & Leher",
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
    nama: "Tekanan Dalam Lengan & Bahu",
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
    nama: "Relaksasi Punggung",
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
    nama: "Pijat Punggung & Pinggang",
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
    nama: "Kombinasi Punggung & Bahu",
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
    nama: "Kerokan & Pijat Dalam Punggung",
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
    kode: "M1",
    nama: "Relaksasi Upper Body",
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
    kode: "M2",
    nama: "Aromaterapi Upper Body",
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
    kode: "N1",
    nama: "Pemulihan Upper Body",
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
    kode: "N2",
    nama: "Kombinasi Kepala Punggung Bahu",
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
    kode: "O1",
    nama: "Terapi Deep Tissue Upper",
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
    kode: "O2",
    nama: "Tekanan Pemulihan Otot Upper",
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
    kode: "P1",
    nama: "Aromaterapi Full Body",
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
    kode: "Q1",
    nama: "Pijat & Scrub Full Body",
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
    kode: "R1",
    nama: "Deep Massage & Kerokan Full Body",
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