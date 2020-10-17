import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      drawer:false
    }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Barang.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/karyawan',
    name: 'Karyawan',
    component: () => import('../views/Karyawan.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/daftarBarang',
    name: 'Barang',
    component: () => import('../views/Barang.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/kartuStock',
    name: 'KartuStock',
    component: () => import('../views/KartuStock.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/searchBarang',
    name: 'BarangSearch',
    component: () => import('../views/BarangSearch.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/suratJalan',
    name: 'SuratJalan',
    component: () => import('../views/SuratJalan.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/stockOpname',
    name: 'StockOpname',
    component: () => import('../views/StockOpname.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/kelolaKaryawan',
    name: 'KelolaKaryawan',
    component: () => import('../views/KaryawanKelola.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/divisi',
    name: 'Divisi',
    component: () => import('../views/Divisi.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/kelolaBarang',
    name: 'KelolaBarang',
    component: () => import('../views/BarangKelola.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/kategori',
    name: 'Kategori',
    component: () => import('../views/Kategori.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/satuan',
    name: 'Satuan',
    component: () => import('../views/Satuan.vue'),
    meta: {
      drawer: true
    }
  },
  {
    path: '/importBarang',
    name: 'ImportBarang',
    component: () => import('../views/ImportBarang.vue'),
    meta: {
      drawer: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
