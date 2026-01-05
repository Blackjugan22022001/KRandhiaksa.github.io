// Data informasi file
const fileInfoData = {
    'modul-atur': {
        title: 'Modul Atur-Atur',
        content: `
            <h4>Deskripsi:</h4>
            <p>Modul ini berisi panduan lengkap tentang tradisi "Atur-Atur" dalam masyarakat Jawa, yaitu cara mengundang (ngaturi) yang sarat dengan nilai kesopanan dan penghormatan.</p>
            
            <h4>Isi Materi:</h4>
            <ul>
                <li>Pengertian dan tujuan atur-atur</li>
                <li>Tata krama (unggah-ungguh) dalam atur-atur</li>
                <li>Cara melakukan atur-atur secara lisan dan tertulis</li>
                <li>Contoh dialog atur-atur</li>
                <li>Kerangka surat undangan (Layang Ulem)</li>
            </ul>
            
            <h4>Penggunaan:</h4>
            <p>Modul ini cocok untuk pelatihan generasi muda dalam memahami dan melestarikan tradisi Jawa, khususnya dalam konteks organisasi pemuda seperti Karang Taruna.</p>
            
            <p><strong>Halaman:</strong> 13 halaman</p>
            <p><strong>Format:</strong> PDF</p>
            <p><strong>Ukuran:</strong> ≈ 2 MB</p>
        `
    },
    'modul-kepemimpinan': {
        title: 'Modul Kepemimpinan',
        content: `
            <h4>Deskripsi:</h4>
            <p>Modul pelatihan kepemimpinan untuk generasi muda dengan pendekatan komprehensif yang mencakup aspek kognitif, afektif, dan psikomotorik.</p>
            
            <h4>Isi Materi:</h4>
            <ul>
                <li>Metodologi pelatihan kepemimpinan</li>
                <li>Aspek pentingnya kepemimpinan</li>
                <li>Implementasi jangka pendek, menengah, dan panjang</li>
                <li>Contoh modul pelatihan dasar</li>
                <li>Program kaderisasi kepemimpinan</li>
            </ul>
            
            <h4>Penggunaan:</h4>
            <p>Modul ini dapat digunakan sebagai panduan dalam menyelenggarakan pelatihan kepemimpinan untuk pengurus dan anggota Karang Taruna.</p>
            
            <p><strong>Halaman:</strong> 14 halaman (halaman 13-26)</p>
            <p><strong>Format:</strong> PDF</p>
            <p><strong>Ukuran:</strong> ≈ 2 MB</p>
        `
    },
    'modul-nyinom': {
        title: 'Modul Tata Cara Nyinom',
        content: `
            <h4>Deskripsi:</h4>
            <p>Modul tentang tradisi "Nyinom" atau "Sinoman" yaitu kegiatan gotong royong dalam membantu hajatan masyarakat Jawa.</p>
            
            <h4>Isi Materi:</h4>
            <ul>
                <li>Definisi dan manfaat nyinom</li>
                <li>Tugas dan metode sinoman</li>
                <li>Etiket dan tata cara teknis pelayanan</li>
                <li>Ketentuan pakaian sinoman</li>
                <li>Rekomendasi pelestarian tradisi</li>
            </ul>
            
            <h4>Penggunaan:</h4>
            <p>Modul ini berguna untuk melatih anggota Karang Taruna dalam melaksanakan tugas sinoman secara benar dan penuh penghormatan.</p>
            
            <p><strong>Halaman:</strong> 6 halaman (halaman 26-32)</p>
            <p><strong>Format:</strong> PDF</p>
            <p><strong>Ukuran:</strong> ≈ 1.5 MB</p>
        `
    },
    'sk-pengurus': {
        title: 'SK Pembentukan Pengurus',
        content: `
            <h4>Deskripsi:</h4>
            <p>Surat Keputusan tentang pembentukan pengurus Karang Taruna "Andhiaksa" untuk masa bakti 2026-2031.</p>
            
            <h4>Isi Dokumen:</h4>
            <ul>
                <li>Pertimbangan dan dasar hukum pembentukan</li>
                <li>Keputusan tentang pengukuhan pengurus</li>
                <li>Lampiran susunan organisasi</li>
                <li>Penandatanganan oleh Ketua RT dan RW</li>
            </ul>
            
            <h4>Struktur Organisasi:</h4>
            <p>Dokumen ini memuat struktur lengkap pengurus Karang Taruna "Andhiaksa" termasuk Ketua, Sekretaris, Bendahara, dan berbagai bidang seperti Humas, Media Kreatif, Sosial-Keagamaan, dll.</p>
            
            <p><strong>Nomor:</strong> 20</p>
            <p><strong>Tanggal:</strong> November 2025</p>
            <p><strong>Format:</strong> PDF</p>
        `
    },
    'peraturan-mensos': {
        title: 'Peraturan Menteri Sosial',
        content: `
            <h4>Deskripsi:</h4>
            <p>Peraturan Menteri Sosial Republik Indonesia Nomor 25 Tahun 2019 tentang Karang Taruna beserta perubahan terbaru (Permensos No. 9 Tahun 2025).</p>
            
            <h4>Isi Pokok:</h4>
            <ul>
                <li>Ketentuan umum tentang Karang Taruna</li>
                <li>Status, kedudukan, tugas, dan fungsi</li>
                <li>Keanggotaan dan kepengurusan</li>
                <li>Pemberdayaan Karang Taruna</li>
                <li>Identitas Karang Taruna (lambang, seragam, bendera)</li>
            </ul>
            
            <h4>Pentingnya:</h4>
            <p>Dokumen ini merupakan pedoman resmi pemerintah dalam pengelolaan Karang Taruna di seluruh Indonesia.</p>
            
            <p><strong>Nomor:</strong> 25 Tahun 2019</p>
            <p><strong>Perubahan:</strong> Permensos No. 9 Tahun 2025</p>
            <p><strong>Halaman:</strong> 40 halaman</p>
            <p><strong>Format:</strong> PDF</p>
        `
    },
    'amplop-mui': {
        title: 'Contoh Amplop Surat Resmi',
        content: `
            <h4>Deskripsi:</h4>
            <p>Contoh format amplop surat resmi dari Majelis Ulama Indonesia (MUI) Kecamatan Wonosari, Kabupaten Klaten.</p>
            
            <h4>Fitur Format:</h4>
            <ul>
                <li>Logo dan kop surat resmi MUI</li>
                <li>Alamat lengkap instansi</li>
                <li>Format penulisan alamat tujuan</li>
                <li>Penggunaan bahasa yang formal dan sopan</li>
            </ul>
            
            <h4>Penggunaan:</h4>
            <p>Dapat dijadikan template untuk membuat amplop surat resmi organisasi dengan penyesuaian logo dan data instansi.</p>
            
            <p><strong>Format:</strong> DOCX (Microsoft Word)</p>
            <p><strong>Ukuran:</strong> ≈ 50 KB</p>
            <p><strong>Dapat diedit:</strong> Ya</p>
        `
    },
    'izin-muspika': {
        title: 'Surat Izin Muspika',
        content: `
            <h4>Deskripsi:</h4>
            <p>Contoh surat permohonan izin kegiatan sosial kepada Muspika (Kepolisian Sektor) untuk acara penggalangan dana.</p>
            
            <h4>Struktur Surat:</h4>
            <ul>
                <li>Kop surat organisasi</li>
                <li>Nomor, lampiran, dan perihal</li>
                <li>Detail kegiatan (nama, tanggal, waktu, tempat)</li>
                <li>Tujuan dan jumlah peserta</li>
                <li>Penandatanganan pengurus</li>
            </ul>
            
            <h4>Penggunaan:</h4>
            <p>Template ini dapat digunakan organisasi pemuda untuk mengajukan permohonan izin kegiatan sosial kepada pihak berwenang.</p>
            
            <p><strong>Kegiatan:</strong> Penggalangan Dana Korban Banjir</p>
            <p><strong>Tanggal:</strong> 13 September 2025</p>
            <p><strong>Format:</strong> DOCX (Microsoft Word)</p>
            <p><strong>Dapat diedit:</strong> Ya</p>
        `
    },
    'undangan-basmahi': {
        title: 'Surat Undangan & Izin',
        content: `
            <h4>Deskripsi:</h4>
            <p>Contoh lengkap surat undangan dan permohonan izin untuk acara pengajian akbar dan bakti sosial.</p>
            
            <h4>Isi Dokumen:</h4>
            <ul>
                <li>Surat undangan kepada Wakil Bupati</li>
                <li>Permohonan izin kepada Kodim</li>
                <li>Permohonan izin kepada Kapolres</li>
                <li>Struktur surat yang lengkap dan formal</li>
            </ul>
            
            <h4>Acara:</h4>
            <p>Milad Basmahi ke-5 dengan kegiatan Pengajian Akbar dan Bakti Sosial berupa Santunan Anak Yatim dan Jompo.</p>
            
            <p><strong>Tanggal:</strong> 27 Desember 2025</p>
            <p><strong>Tempat:</strong> Joglo Cokro Rakyat Bakungan</p>
            <p><strong>Format:</strong> DOCX (Multi-halaman)</p>
            <p><strong>Dapat diedit:</strong> Ya</p>
        `
    },
    'laporan-keuangan': {
        title: 'Laporan Keuangan Template',
        content: `
            <h4>Deskripsi:</h4>
            <p>Template laporan keuangan organisasi dengan format Excel yang rapi dan mudah digunakan.</p>
            
            <h4>Fitur Template:</h4>
            <ul>
                <li>Format tabel yang terstruktur</li>
                <li>Kolom tanggal, keterangan, pemasukan, pengeluaran</li>
                <li>Rumus otomatis untuk perhitungan saldo</li>
                <li>Contoh data transaksi nyata</li>
                <li>Format tanggal yang konsisten</li>
            </ul>
            
            <h4>Cara Penggunaan:</h4>
            <ol>
                <li>Ganti data contoh dengan transaksi organisasi Anda</li>
                <li>Isi kolom sesuai dengan transaksi yang terjadi</li>
                <li>Saldo akan terhitung otomatis</li>
                <li>Simpan file secara berkala (bulanan/tahunan)</li>
            </ol>
            
            <p><strong>Format:</strong> Excel (XLSX)</p>
            <p><strong>Periode:</strong> Januari - Desember 2025</p>
            <p><strong>Dapat diedit:</strong> Ya, lengkap dengan rumus</p>
        `
    }
};

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const modal = document.getElementById('fileInfoModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Tutup mobile menu jika terbuka
            mobileMenu.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efek scroll untuk header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        header.style.padding = '0.7rem 0';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.padding = '1rem 0';
    }
    
    // Highlight menu aktif
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"], .mobile-menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// File info modal function
function showFileInfo(fileId) {
    if (fileInfoData[fileId]) {
        modalTitle.textContent = fileInfoData[fileId].title;
        modalBody.innerHTML = fileInfoData[fileId].content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Download tracking (opsional)
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', function(e) {
        const fileName = this.getAttribute('href').split('/').pop();
        console.log(`File diunduh: ${fileName}`);
        
        // Di sini bisa ditambahkan tracking analytics
        // Contoh: sendDownloadEvent(fileName);
    });
});

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Animasi fade in untuk konten
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Inisialisasi tooltip (jika diperlukan)
    const infoButtons = document.querySelectorAll('.btn-info');
    infoButtons.forEach(button => {
        button.title = 'Lihat informasi file';
    });
});