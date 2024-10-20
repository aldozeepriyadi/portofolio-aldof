<template>
  <div class="container py-5">
    <h2 class="text-center mb-5 animate__animated animate__fadeInUp">
      My Projects
    </h2>
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="project in projects"
        :key="project.title"
      >
        <div class="card h-100 animate__animated animate__fadeIn">
         
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          title: "Aplikasi Priangan Rental",
          description: "Rental mobil dengan C.",
          link: "https://github.com/aldozeepriyadi/PrianganRental.git",
         
        },
        {
          title: "Aplikasi Sembako Barokah",
          description: "Toko sembako dengan C#, Java dan SQL Server.",
          link: "https://github.com/aldozeepriyadi/TokoSembakoBarokahJavaGUI.git",
          
        },
        {
          title: "Sistem Informasi Conference",
          description: "Aplikasi manajemen call for paper dengan menggunakan Codeigniter 3,ASP.NET adan SQL Server",
          link: "https://github.com/aldozeepriyadi/Sistem-Informasi-Conference-Codeigniter3.git",
          
        },
        {
          title:
            "Sistem Infromasi Preventif Maintanance Program Studi Alat Berat (Android)",
          description:
            "Aplikasi Preventive Maintenance ini dirancang untuk mendukung pemantauan dan pencatatan layanan pemeliharaan preventif pada unit mesin atau peralatan yang digunakan dalam suatu organisasi atau perusahaan.",
          link: "https://github.com/aldozeepriyadi/Sistem-Monitoring-Android-Program-Studi-Alat-Berat-AstraTech.git",
        
        },
        {
          title:
            "Sistem Infromasi Preventif Maintanance Program Studi Alat Berat (Backend Spring Boot) ",
          description:
            "Aplikasi Preventive Maintenance ini dirancang untuk mendukung pemantauan dan pencatatan layanan pemeliharaan preventif pada unit mesin atau peralatan yang digunakan dalam suatu organisasi atau perusahaan.",
          link: "https://github.com/aldozeepriyadi/Sistem-Monitoring-API-Spring-boot-Program-Studi-Alat-Berat.git",
          
        },
        {
          title: "Aplikasi Verify Actual at Customer Site PT Kayaba Indonesia ",
          description:
            "Aplikasi ini merupakan solusi inovatif untuk memastikan bahwa setiap pengiriman produk sampai ke tujuan pelanggan sesuai dengan waktu yang telah dijadwalkan. Dengan memanfaatkan teknologi terkini, perusahaan bertujuan untuk meningkatkan kontrol dan transparansi atas proses pengiriman, mengoptimalkan operasional ke pelanggan, serta memberikan pengalaman pelanggan yang lebih baik dengan menggunakan PHP dan Mysql.",
          link: "https://github.com/aldozeepriyadi/Verify-Actual-At-Customer-Site.git",
          
        },
        {
          title: "Dashboard Skillmap Manpower PT Kayaba Indonesia ",
          description:
            "Pengembangan dan implementasi dashboard yang digunakan untuk memetakan dan memonitor keahlian serta keterampilan karyawan, memastikan informasi tersebut terorganisir dengan baik dan mudah diakses oleh manajemen untuk pengambilan keputusan yang lebih efektif dengan menggunakan PHP dan Mysql.",
          link: "https://github.com/aldozeepriyadi/Dashboard-skillmap-manpower.git",
          
        },
        {
          title: "Migrasi AHMAS Absensi Kedatangan Truk PT Astra Honda Motor",
          description:
           " Absensi Kedatangan Truck adalah form yang dipergunakan oleh Shipping untuk melakukan absensi terhadap truck-truck yang akan datang membawa unit motor dengan menggunakan Spring boot dan oracle(Data Confidential)",
          link: "",
          
        },
        {
          title: "Sistem Informasi Artikel Penghobby.ID",
          description:
           "Penghoby.id adalah suatu web yang mengulas hobi-hobi yang digandrungi masyarakat luas, mulai hobi yang sudah dulu ada maupun hobi-hobi yang ngetren baru-baru ini dengan menggunakan Laravel 11 dan Mysql.",
          link: "https://github.com/aldozeepriyadi/PenhobyID-Artikel.git",
          
        }
      ],
    };
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
