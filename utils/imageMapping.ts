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
    'kepala-lengan': kepalaDanLengan,
    'kepala-punggung': kepalaDanPunggung,
    //   tidak terpakai karena mengurutakn dari alphabet start
    'kepala-kaki': kepalaDanKaki,
    //   tidak terpakai karena mengurutakn dari alphabet end
    'kepala-punggung-lengan': kepalaDanPunggungDanLengan,
    'kepala-punggung-kaki': kepalaDanPunggungDanKaki,
    'kepala-lengan-punggung': kepalaDanPunggungDanLengan,
    'kepala-lengan-kaki': kepalaDanLenganDanKaki,
        //   tidak terpakai karena mengurutakn dari alphabet start
        'kepala-lengan-punggung-kaki': kepalaDanPunggungDanLenganDanKaki,
        //   tidak terpakai karena mengurutakn dari alphabet end

    'kaki': kaki,
    'punggung': punggung,
    'lengan': lengan,
    'punggung-lengan': punggungDanLengan,
    'kaki-kepala-punggung': kepalaDanPunggungDanKaki,
    'kaki-kepala-lengan': kepalaDanLenganDanKaki,
    'kaki-punggung-lengan': punggungDanKaki,
    'kaki-punggung': punggungDanKaki,
    'kaki-lengan': kepalaDanLengan,
    'kaki-kepala-punggung-lengan': kepalaDanPunggungDanLenganDanKaki,

    'kaki-kepala': kepalaDanKaki,

}