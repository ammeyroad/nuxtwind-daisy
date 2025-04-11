<script setup>

const item = {
  halaman: 'Profil Perusahaan',
  to: '/profil',
  title: 'Hubungan Investor Clipan Finance',
  description: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
  gambar: 'https://clipan-v3.netlify.app/slider-1.png',
  konten: [
    {
      tag: 'Laporan Tahunan',
      tagto: '#tahunan',
      title: 'Laporan tahunan Clipan',
      subtitle: 'Laporan tahunan yang menampilkan hasil dari perusahaan Clipan',
      gambar: '/about',
      isi: [
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          gambar: 'https://clipan-v3.netlify.app/slider-1.png',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          gambar: 'https://clipan-v3.netlify.app/slider-1.png',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          gambar: 'https://clipan-v3.netlify.app/slider-1.png',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          gambar: 'https://clipan-v3.netlify.app/slider-1.png',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
      ],
    },
    {
      tag: 'Laporan Keuangan',
      tagto: '#keuangan',
      title: 'Lihat Laporan Keuangan Clipan',
      subtitle: 'Laporan tahunan yang perusahaan Clipan',
      gambar: '/about',
      isi: [
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2022',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'judul tahun keduia',
          tahun: '2021',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
      ],
    },
    {
      tag: 'RUPS Kegiatan',
      tagto: '#rups',
      title: 'Lihat kegiatan RUPS Clipan',
      subtitle: 'Informasi RUPS tahunan yang perusahaan Clipan',
      isi: [
        {
          group: 'rups-lb-2023',
          nama: 'RUPS Luar Biasa',
          tahun: '2023',
          jenis: 'judul',
        },
        {
          group: 'rups-lb-2023',
          judul: 'Pengumuman RUPS',
          jenis: 'konten',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-lb-2023',
          judul: 'Deviden',
          jenis: 'konten',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2022',
          nama: 'RUPS Luar Biasa',
          tahun: '2022',
          jenis: 'judul',
        },
        {
          group: 'rups-2022',
          jenis: 'konten',
          judul: 'Pengumuman RUPS',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2021',
          jenis: 'konten',
          judul: 'Pemanggilan',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2021',
          nama: 'RUPS 2021b',
          tahun: '2021',
          jenis: 'judul',
        },
        {
          group: 'rups-2021',
          jenis: 'konten',
          judul: 'Pemanggilan',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2021a',
          jenis: 'konten',
          judul: 'Pemanggilan',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2021a',
          nama: 'RUPS 2021a',
          tahun: '2021',
          jenis: 'judul',
        },
        {
          group: 'rups-2021a',
          jenis: 'konten',
          judul: 'Pemanggilan',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          group: 'rups-2021a',
          jenis: 'konten',
          judul: 'Pemanggilan',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
      ],
    },
    {
      tag: 'Prospektus Saham',
      tagto: '#prospektus',
      title: 'ini Prospektus RUPS Clipan',
      subtitle: 'Informasi RUPS tahunan yang perusahaan Clipan',
      isi: [
        {
          judul: 'judul tahun keduia',
          tahun: '2023',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'Prospektus tahun keduia',
          tahun: '2013',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
      ],
      button: [
        {
          judul: 'google',
          tahun: '2023',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'trading view',
          tahun: '2013',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'idx',
          tahun: '2023',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
        {
          judul: 'yahoo',
          tahun: '2013',
          icon: 'solar:airbuds-case-bold-duotone',
          to: 'https://clipan-v3.netlify.app/slider-1.png',
        },
      ],
    },
  ],
};

const isi = computed(() => item.konten[1].isi); // Ambil isi dari Laporan Keuangan
const tahunList = computed(() => [...new Set(isi.value.map(i => i.tahun))]);
const activeTahun = ref(tahunList.value[0]);
const filteredIsi = computed(() =>
  isi.value.filter(i => i.tahun === activeTahun.value));

const rups = item.konten[2].isi; // Ambil dari "RUPS Kegiatan"

const groupedRUPS = computed(() => {
  const groups = {};

  for (const item of rups) {
    if (!groups[item.group]) {
      groups[item.group] = {
        tahun: '',
        nama: '',
        konten: [],
      };
    }

    if (item.jenis === 'judul') {
      groups[item.group].nama = item.nama;
      groups[item.group].tahun = item.tahun;
    }

    if (item.jenis === 'konten') {
      groups[item.group].konten.push(item);
    }
  }

  return groups;
});

</script>

<template>
  <div>
    <UiBreadcrumb :halaman="item.halaman" :to="item.to" :title="item.title" :subtitle="item.description"
      :gambar="item.gambar" />

    <UiMiniNavigator :konten="item.konten" />

    <section id="#tahunan" class="grid grid-cols-1 md:grid-cols-6 gap-2 mt-2">
      <div class="col-span-2 bg-white p-6 rounded-lg grid content-between">
        <UiTitleSatu :tag="item.konten[0].tag" :title="item.konten[0].title" :subtitle="item.konten[0].subtitle"
          grid="" />
        <div class="flex justify-end gap-2">
          <button class="btn btn-circle btn-outline">
            <Icon name="solar:arrow-left-line-duotone" class="w-8 h-8" />
          </button>
          <button class="btn btn-circle">
            <Icon name="solar:arrow-right-line-duotone" class="w-8 h-8" />
          </button>
        </div>
      </div>
      <div class="flex col-span-4 gap-2 bg-white p-6 rounded-lg overflow-x-scroll">
        <div v-for="item in 6" :key="item"
          class="group h-[420px] relative flex items-end overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg w-80 shrink-0">
          <img src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" loading="lazy"
            alt="Photo by Minh Pham"
            class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          <Icon name="solar:arrow-right-broken"
            class="w-12 h-12 top-0 right-0 m-4 duration-150 absolute scale-0 group-hover:-rotate-45 group-hover:scale-100" />
          <div class="m-2 p-4 w-full rounded bg-white/30 backdrop-blur-sm group-hover:bg-white relative">
            <p>Komisaris Utama</p>
            <h5 class="text-primary">Bhindawati Gunawan</h5>

          </div>
        </div>
      </div>
    </section>

    <section id="#keuangan" class="grid grid-cols-1 gap-2 mt-2">
      <div class=" bg-white text-center pt-24 pb-0 p-6 rounded-lg  ">
        <UiTitleSatu :tag="item.konten[0].tag" :title="item.konten[0].title" :subtitle="item.konten[0].subtitle"
          grid="mx-auto" />
        <div class="grid grid-cols-3 max-w-screen-md mx-auto gap-2">
          <UiTabs v-for="tahun in tahunList" :key="tahun" :label="tahun" :isActive="activeTahun === tahun"
            @click="activeTahun = tahun" />
        </div>
      </div>
      <div class="flex gap-2 bg-white p-6 rounded-lg overflow-x-scroll">
        <div class="mt-4 grid gap-4">
          <a v-for="item in filteredIsi" :key="item.to" :href="item.to" class="block underline text-blue-600">
            {{ item.judul }} - {{ item.tahun }}
          </a>
        </div>
      </div>
    </section>

    <section id="#tahunan" class="grid grid-cols-1 md:grid-cols-6 gap-2 mt-2">
      <div class="col-span-2 bg-white p-6 rounded-lg grid content-between">
        <UiTitleSatu :tag="item.konten[2].tag" :title="item.konten[2].title" :subtitle="item.konten[0].subtitle"
          grid="" />
        <div class="flex justify-end gap-2">
          <button class="btn btn-circle btn-outline">
            <Icon name="solar:arrow-left-line-duotone" class="w-8 h-8" />
          </button>
          <button class="btn btn-circle">
            <Icon name="solar:arrow-right-line-duotone" class="w-8 h-8" />
          </button>
        </div>
      </div>
      <div class="flex col-span-4 gap-6 bg-white p-6 rounded-lg overflow-x-scroll">
        <div v-for="(group, groupKey) in groupedRUPS" :key="groupKey" class="w-64">
          <div class="divider divider-start">{{ group.tahun }}</div>
          <h5 class="mb-0 text-left font-semibold">{{ group.nama }}</h5>
          <ul class="space-y-3 mt-2">
            <li v-for="(item, i) in group.konten" :key="i" class="flex items-start">
              <Icon name="solar:arrow-right-broken" class="w-5 h-5 mt-1 text-primary" />
              <a :href="item.to" class="ml-3 underline text-blue-600 hover:text-blue-800">
                {{ item.judul }}
              </a>
            </li>
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>
