<script setup>

const item = {
  halaman: 'Profil Perusahaan',
  to: '/profil',
  title: 'Tata Kelola Clipan Finance',
  description: 'Ingin mengetahui tentang Clipan? Ini adalah halaman yang menampilkan informasi tentang Clipan. lengap dari sejarah dan pengembangan Clipan.',
  gambar: 'https://clipan-v3.netlify.app/slider-1.png',
  konten: [
    {
      tag: 'Pedoman Perusahaan',
      tagto: '#tahunan',
      title: 'Pedoman Perusahaan Clipan',
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
      tag: 'Profesi Penunjang',
      tagto: '#keuangan',
      title: 'Lihat Profesi Penunjang Clipan',
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
      tag: 'Anggaran Dasar',
      tagto: '#rups',
      title: 'Anggaran Dasar Clipan',
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
      tag: 'Whitsleblowing',
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

    <section id="#keuangan" class="grid  mt-2">
      <div class="grid sm:grid-cols-3 rounded-lg grid-cols-2 bg-white p-6 gap-2">
        <div class="text-left pr-6 p-6">
          <UiTitleSatu :tag="item.konten[0].tag" :title="item.konten[0].title" subtitle="" grid="" />
        </div>
        <div v-for="item in 5" :key="item"
          class="grid border h-72 p-6 hover:bg-primary hover:text-white content-between bg-base-100  group w-full hover:shadow-xl rounded-lg">
          <div class="card-actions">
            <button class="btn btn-circle bg-white scale-50 group-hover:-rotate-45 group-hover:scale-100">
              <Icon name="solar:arrow-right-broken" class="w-16 h-8 duration-150 " />
            </button>
          </div>
          <div>
            <h5 class="mb-2 group-hover:text-white text-primary font-medium leading-7 line-clamp-2">Pedoman dan Tata
              Tertib Kerja Dewan Komisaris dan
              Direksi</h5>
          </div>
        </div>
      </div>
    </section>

    <section id="#tahunan" class="grid grid-cols-1 md:grid-cols-6 gap-2 mt-2">
      <div class="col-span-3 bg-white p-6 rounded-lg grid content-between">
        <UiTitleSatu :tag="item.konten[1].tag" :title="item.konten[1].title" :subtitle="item.konten[1].subtitle"
          grid="" />
        <div class="gap-2">
          <div v-for="item in 2" :key="item" class="flex gap-2 py-4 hover:bg-primary hover:text-white rounded-lg">
            <Icon name="solar:arrow-right-broken" class="w-16 h-8  " />
            <div>
              <h5>Judulnya</h5>
              <p>deskripsinnya dsisinini</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex col-span-3 gap-2 bg-white p-6 rounded-lg overflow-x-scroll">
        <div>
          <h5>Judulnya</h5>
          <p>deskripsinnya dsisinini</p>
        </div>
      </div>
    </section>

    <section id="#anggaran" class="grid grid-cols-1 gap-2 mt-2">
      <div class=" bg-white text-center pt-24 pb-0 p-6 rounded-lg  ">
        <UiTitleSatu :tag="item.konten[2].tag" :title="item.konten[2].title" :subtitle="item.konten[2].subtitle"
          grid="mx-auto" />
        <div class="flex overflow-x-auto gap-2">
          <div v-for="item in 5" :key="item"
            class="grid border w-64 shrink-0 h-72 p-6 hover:bg-primary hover:text-white content-between bg-base-100  group  hover:shadow-xl rounded-lg">
            <div class="card-actions justify-end">
              <button class="btn btn-circle bg-white scale-50 group-hover:-rotate-45 group-hover:scale-100">
                <Icon name="solar:arrow-right-broken" class="w-16 h-8 duration-150 " />
              </button>
            </div>
            <div>
              <h5 class="text-left group-hover:text-white text-primary font-semibold leading-7 line-clamp-3">Pedoman dan
                Tata
                Tertib Kerja Dewan Komisaris dan
                Direksi</h5>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section id="#tahunan" class="grid grid-cols-1 md:grid-cols-6 gap-2 mt-2">

      <div class="flex col-span-2 gap-2 bg-white p-6 rounded-lg overflow-x-scroll">
        <div>
          <h5>gambar</h5>
          <p>deskripsinnya dsisinini</p>
        </div>
      </div>
      <div class="col-span-4 bg-white p-6 rounded-lg grid content-between">
        <UiTitleSatu :tag="item.konten[1].tag" :title="item.konten[1].title" :subtitle="item.konten[1].subtitle"
          grid="" />
        <div class="gap-2">
          <div v-for="item in 3" :key="item" class="flex gap-2 py-4 hover:bg-primary hover:text-white rounded-lg">
            <Icon name="fluent-color:camera-24" class="filter-red w-16 h-8  " />
            <div>
              <h5>Judulnya</h5>
              <p>deskripsinnya dsisinini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.filter-red {
  filter: hue-rotate(100deg)saturate(1.4) brightness(1.1);
}
</style>
