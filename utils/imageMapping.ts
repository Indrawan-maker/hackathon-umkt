import abu from '@/public/images/anatomy/default.webp'
import kepala from '@/public/images/anatomy/kepala.webp'
import punggung from '@/public/images/anatomy/punggung.webp'
import lengan from '@/public/images/anatomy/lengan.webp'
import kaki from '@/public/images/anatomy/kaki.webp'
// Combo images
import kepalaDanPunggung from '@/public/images/anatomy/kepaladanpunggung.webp'
import kepalaDanLengan from '@/public/images/anatomy/kepaladanlengan.webp'
import kepalaDanKaki from '@/public/images/anatomy/kepaladankaki.webp'
import kepalaDanPunggungDanLengan from '@/public/images/anatomy/kepaladanpunggungdanlengan.webp'
import kepalaDanPunggungDanKaki from '@/public/images/anatomy/kepaladanpunggungdankaki.webp'
import kepalaDanLenganDanKaki from '@/public/images/anatomy/kepaladanlengandankaki.webp'
import punggungDanLengan from '@/public/images/anatomy/punggungdanlengan.webp'
import punggungDanKaki from '@/public/images/anatomy/punggungdankaki.webp'
import kepalaDanPunggungDanLenganDanKaki from '@/public/images/anatomy/full-badan.webp'

export const imageMapping = {
  'kepala': kepala,
  'kaki': kaki,
  'punggung': punggung,
  'tangan': lengan,
  // Combo 2 area
  'kaki-punggung': punggungDanKaki,
  'kaki-tangan': kepalaDanLengan,
  'kepala-kaki': kepalaDanKaki,
  'kepala-punggung': kepalaDanPunggung,
  'kepala-tangan': kepalaDanLengan,
  'punggung-tangan': punggungDanLengan,
  // Combo 3 area
  'kaki-kepala-punggung': kepalaDanPunggungDanKaki,
  'kaki-kepala-tangan': kepalaDanLenganDanKaki,
  'kaki-punggung-tangan': punggungDanKaki,  // Reuse punggungDanKaki
  'kepala-punggung-tangan': kepalaDanPunggungDanLengan,
  // Combo 4 area
  'kaki-kepala-punggung-tangan': kepalaDanPunggungDanLenganDanKaki,
}