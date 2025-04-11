<script setup>

const pages = ref([
  {
    title: 'Tentang Clipan Finance',
    description: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
    gambar: 'https://clipan-v3.netlify.app/slider-1.png',
    menu: [
      { title: 'Profil', to: '/about' },
      { title: 'Informasi Clipan', to: '/about/information' },
    ],
  },
]);

const titles = ref([
  {
    tag: 'Informasi Umum',
    title: 'Kenalan dengan Clipan Finance',
    subtitle: 'Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982',
    grid: 'grid md:grid-cols-2 gap-4',
  },
  {
    tag: 'Produk Kami',
    title: 'Temukan Solusi Pembiayaan Tepat',
    subtitle: 'Beragam pilihan pembiayaan yang fleksibel sesuai kebutuhan Anda.',
    grid: 'grid md:grid-cols-2 gap-6',
  },
])

const section = ref([
  {
    id: 1,
    to: '#info',
    badge: 'Informasi Umum',
    title: 'Tentang Clipan Finance',
    description: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
    konten: [
      { angka: '42', judul: 'Telah berdiri', icon: '/about' },
      { angka: '62', judul: 'Kantor Cabang', icon: '/about' },
      { angka: '06', judul: 'Produk Utama', icon: '/about' },
      { angka: '12', judul: 'About Clipan', icon: '/about' },
    ],
    gambar: 'https://clipan-v3.netlify.app/slider-1.png',
    gambardua: 'https://clipan-v3.netlify.app/slider-1.png',
  },
  {
    id: 2,
    to: '#visimisi',
    badge: 'Visi Misi, dan Budaya',
    title: 'Tujuan kita dan cara kita bekerja',
    visi: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
    budaya: [
      { angka: '42', judul: 'Telah berdiri', icon: '/about' },
      { angka: '62', judul: 'Kantor Cabang', icon: '/about' },
      { angka: '06', judul: 'Produk Utama', icon: '/about' },
      { angka: '12', judul: 'About Clipan', icon: '/about' },
    ],
    gambar: 'https://clipan-v3.netlify.app/slider-1.png',
    gambardua: 'https://clipan-v3.netlify.app/slider-1.png',
  },
  {
    id: 3,
    to: '#manajemen',
    badge: 'Manajemen dan Struktur',
    title: 'Siapa yang dibelakan kita bekerja',
    visi: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
    budaya: [
      { angka: '42', judul: 'Telah berdiri', icon: '/about' },
      { angka: '62', judul: 'Kantor Cabang', icon: '/about' },
      { angka: '06', judul: 'Produk Utama', icon: '/about' },
      { angka: '12', judul: 'About Clipan', icon: '/about' },
    ],
    gambar: 'https://clipan-v3.netlify.app/slider-1.png',
    gambardua: 'https://clipan-v3.netlify.app/slider-1.png',
  },
  {
    id: 4,
    to: '#saham',
    badge: 'Komposisi Saham',
    title: 'ini pemegang saham kita',
    visi: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
    budaya: [
      { angka: '42', judul: 'Telah berdiri', icon: '/about' },
      { angka: '62', judul: 'Kantor Cabang', icon: '/about' },
      { angka: '06', judul: 'Produk Utama', icon: '/about' },
      { angka: '12', judul: 'About Clipan', icon: '/about' },
    ],
    gambar: 'https://clipan-v3.netlify.app/slider-1.png',
    gambardua: 'https://clipan-v3.netlify.app/slider-1.png',
  },
]);

</script>

<template>

  <!-- breadchum -->
  <div class="h-max content-center bg-primary rounded-lg">
    <div class="flex py-16 items-center max-w-screen-lg mx-auto justify-between">
      <div class="max-w-xl text-white ">
        <div class="flex gap-2 fb font-semibold text-white/70 mb-8">
          <NuxtLink to="/" class=" hover:text-white ">
            <Icon name="solar:home-smile-bold-duotone" class="w-6 h-6 hover:text-white" />
          </NuxtLink>
          <div v-for="item in pages[0].menu" :key="item.to">
            / <NuxtLink :to="item.to" class="hover:underline hover:text-white pl-1">{{ item.title }}
            </NuxtLink>
          </div>
        </div>
        <h3 class="uppercase mb-2">
          {{ pages[0].title }}
        </h3>
        <p class="fb">
          {{ pages[0].description }}
        </p>
      </div>
      <div class=" justify-end">
        <NuxtImg src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" class="h-52 justify-end"
          alt="Slider" />
      </div>
    </div>
  </div>

  <!-- mini nav -->
  <section
    class="mx-auto bg-blue-50/50 sticky top-16 z-40 max-w-screen-xl overflow-auto justify-center  py-3 pb-2 backdrop-blur-md flex">
    <NuxtLink v-for="item in section" :key="item.id" :to="item.to" class="btn bg-white scale-90  hover:btn-primary ">
      {{ item.badge }}
    </NuxtLink>
  </section>

  <UiTitleSatu :tag="titles[1].tag" :title="titles[1].title" :subtitle="titles[1].subtitle" :grid="titles[1].grid" />
  <section class="mt-2">
    <div class="grid grid-cols-5 gap-2">
      <div class="col-span-5 py-32 pb-6 bg-white rounded-lg grid w-full text-center">
        <button class="btn btn-sm btn-outline w-max btn-primary bg-primary/10 rounded-full  mx-auto">
          <Icon name="solar:round-alt-arrow-right-bold" class="w-3 h-3" />
          <span class="text-sm">Informasi Umum</span>
        </button>
        <h3>Kenalan dengan Clipan Finance</h3>
        <p class="fb">Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982
        </p>
      </div>
      <div class="grid col-span-3 p-6 bg-white rounded-lg h-">
        <div>
          <p class="text-pretty mb-2 indent-8 ">Clipan Finance bukan nama baru di dunia pembiayaan Indonesia. Berdiri
            sejak tahun 1982, kami sudah lebih dari 40 tahun jadi teman setia masyarakat dalam urusan keuangan. Dulu
            kami dikenal sebagai PT Clipan Leasing Corporation, dan sejak 1990 resmi tercatat di Bursa Efek Indonesia
            sebagai perusahaan pembiayaan pertama yang go public.
            <br>
            Seiring waktu, kami terus berkembang. Kini, PT Clipan Finance Indonesia Tbk hadir dengan semangat baru dan
            layanan yang makin lengkap. Kami siap bantu kamu dalam berbagai kebutuhan finansial, mulai dari pembiayaan
            investasi, modal kerja, multiguna, sampai sewa operasi.
            <br>
            Buat kami, kepercayaan itu segalanya. Makanya, kami terus berkomitmen untuk memberikan layanan yang aman,
            transparan, dan pastinya mengutamakan kepuasan nasabah. Jadi, kalau kamu butuh solusi pembiayaan yang
            terpercaya dan berpengalaman, Clipan Finance jawabannya.
          </p>
        </div>
      </div>
      <div class="grid col-span-2 gap-2 grid-cols-2 bg-primary rounded-lg">
        <div v-for="item in 4" :key="item" class="p-4 bg-secondary rounded-lg text-center content-center">
          <h2>12</h2>
          <p class="fb text-lg leading-6">
            Susunan acara
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-2">
    <div class="grid grid-cols-2 gap-2">
      <div class="grid p-6 bg-white rounded-lg content-between">
        <div class="">
          <button class="btn btn-sm btn-outline w-max btn-primary bg-primary/10 rounded-full">
            <Icon name="solar:round-alt-arrow-right-bold" class="w-3 h-3" />
            <span class="text-sm">Informasi Umum</span>
          </button>
          <h3>Kenalan dengan Clipan Finance</h3>
          <p class="fb">Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982
          </p>
        </div>
        <div>
          <h4>Visi</h4>
          <p>Menjadi perusahaan pembiayaan terkemuka yang mengedepankan nilai tambah bagi pemangku kepentingan dan
            berperan aktif dalam pertumbuhan industri pembiayaan nasional.</p>
          <br>
          <h4>Misi</h4>
          <ul class="list-disc list-outside pl-4">
            <li>Menyediakan produk dan jasa keuangan yang inovatif didukung sumber daya manusia yang handal dan
              teknologi terkini.</li>
            <li>Mempertahankan dan meningkatkan kinerja keuangan yang sehat dan berkelanjutan.</li>
            <li>Menjalankan perusahaan sesuai dengan prinsip-prinsip tata kelola perusahaan yang baik.</li>
          </ul>

        </div>
      </div>
      <div class="grid p-6 gap-2 bg-white rounded-lg">
        <h4>Visi</h4>
        <p>Menjadi perusahaan pembiayaan terkemuka yang mengedepankan nilai tambah bagi pemangku kepentingan dan
          berperan aktif dalam pertumbuhan industri pembiayaan nasional.</p>

        <div v-for="item in 5" :key="item" class="flex items-start gap-4 py-2">
          <div class=" text-2xl font-bold bg-primary rounded-lg w-20 h-16 text-center content-center text-white">FUN
          </div>
          <div class="">
            <h4 class="uppercase mb-2">Creative</h4>
            <p>Menyediakan produk dan jasa keuangan yang inovatif didukung sumber daya manusia yang handal dan</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-2">
    <div class="grid grid-cols-6 gap-2">
      <div class="grid col-span-2 bg-white p-6 rounded-lg">
        <div class="mb-10" :class="grid">
          <div class="btn btn-sm btn-outline w-max btn-primary bg-primary/10 rounded-full">
            <Icon name="solar:round-alt-arrow-right-bold" class="w-3 h-3" />
            <span class="text-sm">Informasi Umum</span>
          </div>
          <div>
            <h3 class="mb-2 py-3">Kenalan dengan Clipan Finance</h3>
            <p class="fb">Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982
            </p>
          </div>
        </div>
        <div>
          <button class="btn btn-block text-left justify-between mb-2 btn-lg group hover:btn-primary">
            <div class="flex items-center gap-2">
              <Icon name="solar:round-alt-arrow-right-bold" class="w-6 h-6 group-hover:block hidden" />Komisaris
            </div>
            <Icon name="solar:round-alt-arrow-right-bold" class="w-6 h-6 group-hover:hidden " />
          </button>
          <button class="btn btn-block text-left justify-start mb-2 btn-lg ">Direksi</button>
          <button class="btn btn-block text-left justify-start mb-2 btn-lg ">Struktur Organisasi</button>
        </div>
      </div>
      <div class="flex col-span-4 gap-2 bg-white p-6 rounded-lg overflow-x-scroll">
        <div v-for="item in 3" :key="item"
          class="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg md:h-full w-80 shrink-0">
          <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" loading="lazy"
            alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <Icon name="solar:arrow-right-broken"
            class="w-12 h-12 top-0 right-0 m-4 duration-150 absolute scale-0 group-hover:-rotate-45 group-hover:scale-100" />
          <div class="m-2 p-4 w-full text-center rounded bg-white/30 backdrop-blur-sm group-hover:bg-white relative">
            <h5 class="text-primary">Bhindawati Gunawan</h5>
            <p>Komisaris Utama</p>
          </div>
        </div>
      </div>
      <div class="grid col-span-6 grid-cols-3 gap-2">
        <NuxtLink to="/about/information">
          <div
            class="flex group bg-white border p-1 hover:bg-primary hover:shadow-lg  rounded-lg flex-col items-center gap-4 md:flex-row lg:gap-6 hover:text-white">
            <div
              class=" relative block h-56 w-full shrink-0 self-start overflow-hidden rounded bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
              <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy" alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </div>
            <div class="flex flex-col gap-2 pr-2">
              <h5 class="text-primary group-hover:text-white">
                Panin Bank
              </h5>
              <p class="line-clamp-4">This is a section of some simple filler text, also known as placeholder text. is
                a
                section of some simple filler</p>
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </section>

  <section class="mt-2">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 py-32 pb-6 bg-white rounded-lg grid w-full text-center">
        <button class="btn btn-sm btn-outline w-max btn-primary bg-primary/10 rounded-full  mx-auto">
          <Icon name="solar:round-alt-arrow-right-bold" class="w-3 h-3" />
          <span class="text-sm">Informasi Umum</span>
        </button>
        <h3>Kenalan dengan Clipan Finance</h3>
        <p class="fb">Solusi Pembiayaan Mobil baru, mobil bekas, multiguna, dan alat berat Tepercaya Sejak 1982
        </p>
        <div class=" justify-center flex gap-2">
          <button v-for="item in 5" :key="item"
            class="btn border text-gray-700 hover:text-white bg-white group duration-200 hover:btn-primary rounded-full hover:shadow-lg hover:shadow-blue-600/60">
            Button
            <Icon name="solar:arrow-right-broken"
              class="w-6 h-6 -m-2 group-hover:m-0 scale-75 group-hover:-rotate-45 group-hover:scale-100 duration-150" />
          </button>
        </div>
      </div>
      <div class="bg-primary col-span-4 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
          class="h-full w-full object-cover object-center" />
      </div>
      <div class=" col-span-2 grid grid-cols-2 gap-2">
        <div class="p-6 col-span-2 bg-white rounded-lg">
          <h4 class="mb-4">Top 3 Daftar Pemegang saham</h4>
          <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" />
          <div class="divide-y grid">
            <div v-for="item in 3" :key="item" class="flex items-center justify-between py-2">
              <div class="">
                <h5 class="">2,051,431,264</h5>
                <p>Bank Pan Indonesia</p>
              </div>
              <h4 class="">51,49%</h4>
            </div>
          </div>
        </div>
        <div
          class="grid h-52 p-6 hover:bg-primary hover:text-white content-between bg-base-100  group w-full hover:shadow-xl rounded-lg">
          <div class="card-actions justify-end">
            <button class="btn btn-circle bg-white scale-0 group-hover:-rotate-45 group-hover:scale-100">
              <Icon name="solar:arrow-right-broken" class="w-16 h-8 duration-150 " />
            </button>
          </div>
          <div>
            <h5 class="mb-2 group-hover:text-white text-primary">Card title!</h5>
            <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div
          class="grid p-6 hover:bg-primary hover:text-white content-between bg-base-100  group w-full hover:shadow-xl rounded-lg">
          <div class="card-actions justify-end">
            <button class="btn btn-circle bg-white scale-0 group-hover:-rotate-45 group-hover:scale-100">
              <Icon name="solar:arrow-right-broken" class="w-16 h-8 duration-150 " />
            </button>
          </div>
          <div>
            <h5 class="mb-2 group-hover:text-white text-primary">Card title!</h5>
            <p class="text-xs">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
