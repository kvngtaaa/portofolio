# PRD: Personal Portfolio Website (Kevin Genta Alexander)

**Versi:** 1.1 (disesuaikan dengan CV) | **Tanggal:** 6 Oktober 2026 | **Status:** Draft

---

## 1. Ringkasan

Website portofolio satu halaman (single-page, scroll sections) berbahasa Inggris untuk memperkenalkan Kevin Genta Alexander sebagai **Full-Stack Developer & Certified System Analyst** kepada recruiter dan hiring manager. Fokus: menonjolkan proyek AGA dan AgriNova (smart farming + IoT + LLM/RAG), pengalaman kerja, sertifikasi BNSP, serta memudahkan kontak dan unduh CV.

**Tujuan utama:** Mendapatkan pekerjaan full-time.

## 2. Target Pengguna

| Persona | Kebutuhan | Waktu yang dimiliki |
|---|---|---|
| Recruiter | Lihat peran, skill, sertifikasi, dan CV dengan cepat | 30-60 detik |
| Hiring Manager | Menilai kedalaman proyek, arsitektur, dan tech stack | 2-3 menit |
| Sesama developer | Melihat kualitas kode dan pendekatan teknis | Bebas |

## 3. Tujuan & Metrik Keberhasilan

- Recruiter dapat menemukan CV dan kontak dalam maksimal 2 klik dari halaman utama.
- Klik "Download CV" dan "Contact" menjadi konversi utama (dilacak via analytics).
- Skor Lighthouse: Performance, Accessibility, Best Practices, SEO masing-masing >= 90.
- Tampil rapi di mobile (360px) hingga desktop (1440px+).

## 4. Ruang Lingkup

**Termasuk:** Hero, Professional Summary, Work Experiences, Education, Certificates, Skills, Contact, footer, unduh CV, animasi halus, responsif.

**Tidak termasuk:** Blog, CMS/admin panel, autentikasi, backend khusus, multi-bahasa.

## 5. Arsitektur Informasi

Urutan section (satu halaman, navbar dengan anchor link):

1. Hero
2. Professional Summary
3. Work Experiences
4. Education
5. Certificates
6. Skills
7. Contact (footer gelap)

## 6. Kebutuhan Per Section

### 6.1 Hero
- Nama "KEVIN GENTA ALEXANDER" dalam tipografi sangat besar (fluid, `clamp()`), sebagai fokus visual utama.
- Judul peran: **Full-Stack Developer & Certified System Analyst**.
- Tagline satu kalimat, usulan: *"I build smart farming and IoT systems powered by LLM and RAG."*
- CTA: **Download CV** (primer) dan **Contact** (sekunder).
- Ikon tautan: LinkedIn (`linkedin.com/in/kevingenta`), Email, GitHub `[TODO: URL]`.
- Lokasi: Bandung, Indonesia. Label status: "Open to full-time roles".

### 6.2 Professional Summary
Berdasarkan CV, versi ringkas untuk web:

> Certified System Analyst (BNSP) and Full-Stack Developer experienced in designing, building, testing, and optimizing scalable web systems with Laravel, React.js, PHP, and MySQL. Focused on system architecture, API integration, and database security, with hands-on experience in Smart Farming and IoT solutions that connect microcontrollers to AI-assisted (LLM/RAG) decision support platforms.

Highlight angka (kartu kecil):
- 4 peran/proyek profesional (2024-2026)
- 2+ tahun pengalaman (Jul 2024 - sekarang)
- 1 sertifikasi BNSP (System Analyst, 2025)
- GPA 3.60 (Diploma, Cum Laude) dan 3.50 (Bachelor)

### 6.3 Work Experiences
Urutan terbaru ke terlama. Kartu bergaya grid/minimalis; AGA dan AgriNova diberi label **Featured** dan ukuran lebih besar. Tiap kartu: judul, peran, lokasi, periode, 2-3 poin hasil, chip stack, tautan.

| Item | Peran & Periode | Poin utama | Stack |
|---|---|---|---|
| **Asisten Generatif Agrikultur (AGA)** (Featured) | Full-Stack Developer, Thesis Project. Bandung, Jan 2026 - Aug 2026 | Merancang dan membangun sendiri platform smart farming full-stack; fitur multi-land management, logbook harian, dan pemantauan data lingkungan; integrasi LLM + RAG untuk rekomendasi pertanian berdasarkan kondisi lahan dan dokumen referensi; desain skema MySQL dan RESTful API | Laravel, React.js, Tailwind CSS, MySQL, LLM/RAG |
| **AgriNova Solutions** (Featured) | Full-Stack Developer, Independent Project. Bandung, Dec 2025 - Mar 2026 | Membangun arsitektur front-end aplikasi smart farming; integrasi data sensor ESP32 ke dashboard real-time; antarmuka rekomendasi LLM berbasis data sensor; kolaborasi tim lintas fungsi | ESP32, LLM, `[TODO: stack front-end]` |
| **PT Trigobalindo Id** | Full-Stack Developer. Bekasi, Aug 2025 - Oct 2025 | Mendesain, membangun, dan men-deploy website company profile responsif dari nol; menerjemahkan kebutuhan bisnis ke UI; mengelola siklus pengembangan dari brief hingga deployment | `[TODO: stack]` |
| **Transtrack.id** | Quality Assurance. Bandung, Jul 2024 - Aug 2025 | Pengujian manual dan otomatis aplikasi web; mendokumentasikan dan melacak bug hingga selesai sebelum rilis; kolaborasi dengan developer untuk kualitas kode dan konsistensi UI/UX | Perusahaan fleet telematics dan supply chain; `[TODO: tools QA]` |

Opsional: sub-bagian **Technical Highlights** di bawah Work Experiences (Service Layer + Dependency Injection di Laravel; REST API untuk payload sensor ESP32: kelembapan tanah, pH, suhu; integrasi Laravel dengan LLM/RAG; optimasi query MySQL, PostgreSQL, MongoDB; Docker dan Docker Compose).

### 6.4 Education

| Institusi | Program | Periode | Nilai |
|---|---|---|---|
| Universitas Telkom, Bandung | Bachelor of Information Systems | Aug 2024 - Aug 2026 | 3.50 / 4.00 |
| Universitas Telkom, Bandung | Diploma in Information Systems | Aug 2021 - Aug 2024 | 3.60 / 4.00, Cum Laude |

### 6.5 Certificates
- **Certified System Analyst (BNSP), 2025.** Sertifikasi resmi Badan Nasional Sertifikasi Profesi: analisis kebutuhan sistem, perancangan arsitektur TI, dan penyelarasan kebutuhan bisnis dengan solusi teknis yang scalable. Tampilkan sebagai kartu menonjol dengan tautan/gambar sertifikat `[TODO: file sertifikat]`.
- Layout dibuat grid agar mudah menambah sertifikat baru.

### 6.6 Skills
Dikelompokkan sesuai CV:
- **Backend:** PHP, Laravel, Node.js, Express.js, Python
- **Frontend:** JavaScript, React.js, Alpine.js, HTML5, CSS3, Tailwind CSS, Bootstrap, Blade
- **Database:** MySQL, PostgreSQL, MongoDB, Redis
- **API & Integration:** RESTful API, IoT Integration, Sensor Payload Processing
- **AI & Emerging Tech:** LLM, RAG, AI Integration, IoT, ESP32
- **Tools & Development:** Git, Docker, Docker Compose, Postman, Visual Paradigm
- **Soft skills** (satu baris ringkas): Adaptability, Teamwork, Communication, Problem Solving, Attention to Detail, Time Management

### 6.7 Contact (Footer gelap)
- Email: kevingenta17@gmail.com (tombol `mailto:` dan salin).
- LinkedIn: linkedin.com/in/kevingenta
- Tombol Download CV.
- Lokasi: Bandung, West Java, Indonesia.
- Telepon dan alamat lengkap: lihat bagian 11.

## 7. Kebutuhan Desain

- **Gaya:** Clean, terstruktur, banyak ruang kosong; tipografi besar pada Hero (terinspirasi referensi Syahril Arfian Almazril dan portofolio Samuel, tanpa menyalin langsung).
- **Warna:** Latar solid netral, teks kontras tinggi, **aksen hijau neon** (mis. `#39FF14` atau varian lebih lembut `#4ADE80`) hanya untuk elemen penting (CTA, hover, label Featured). Footer kontak berlatar gelap. Tema hijau juga selaras dengan fokus agritech.
- **Tipografi:** Satu font display tebal untuk judul besar dan satu font sans bersih untuk isi `[TODO: pilih, mis. Inter / Space Grotesk]`.
- **Animasi:** Transisi halus saja: fade/slide-in saat scroll, hover kartu, smooth scroll. Hormati `prefers-reduced-motion`.
- **Responsif:** Mobile-first; grid kartu 1 kolom (mobile), 2 (tablet), 2-3 (desktop).

## 8. Kebutuhan Fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| F1 | Navbar sticky dengan anchor scroll ke tiap section dan indikator section aktif | Must |
| F2 | Tombol Download CV (file PDF statis) | Must |
| F3 | Kartu pengalaman dengan label Featured, chip stack, dan tautan | Must |
| F4 | Tautan kontak (mailto, LinkedIn) | Must |
| F5 | Animasi reveal saat scroll | Should |
| F6 | Tombol salin email dengan umpan balik "Copied" | Should |
| F7 | Meta tag SEO dan Open Graph (judul, deskripsi, gambar pratinjau) | Must |
| F8 | Halaman 404 sederhana | Could |

## 9. Kebutuhan Non-Fungsional

- **Performa:** LCP < 2,5 dtk; gambar dioptimalkan (WebP, lazy loading); bundle kecil.
- **Aksesibilitas:** HTML semantik, kontras WCAG AA, navigasi keyboard, `alt` pada gambar, focus state jelas.
- **SEO:** Judul dan deskripsi unik, `sitemap.xml`, `robots.txt`, favicon.
- **Kompatibilitas:** Dua versi terbaru Chrome, Safari, Firefox, Edge.

## 10. Spesifikasi Teknis

- **Framework:** React.js + Vite (`[TODO: TypeScript atau JavaScript]`)
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion (opsional; alternatif CSS murni)
- **Ikon:** lucide-react atau react-icons
- **Konten:** Disimpan di file data (`src/data/*.js`) agar mudah diubah tanpa menyentuh komponen
- **Analytics:** Vercel Analytics atau Plausible `[TODO]`
- **Hosting:** Vercel atau Netlify, deploy otomatis dari GitHub; domain kustom opsional

Struktur folder yang disarankan:

```
src/
  components/   (Navbar, Hero, Summary, ExperienceCard, EducationItem, CertificateCard, SkillGroup, Contact, Footer)
  sections/     (komposisi tiap section)
  data/         (profile.js, experiences.js, education.js, certificates.js, skills.js)
  assets/       (gambar, ikon)
public/
  cv-kevin-genta-alexander.pdf, og-image.png, favicon
```

## 11. Catatan Privasi (perlu keputusan)

CV memuat nomor HP dan alamat rumah lengkap. Website portofolio bersifat publik dan mudah di-scrape, sehingga menampilkan keduanya meningkatkan risiko spam, penipuan, dan masalah keamanan pribadi. Rekomendasi:
- Tampilkan lokasi hanya tingkat kota: "Bandung, West Java, Indonesia".
- Pada **CV PDF yang diunduh dari website**, gunakan versi tanpa alamat rumah (cukup kota), dan nomor HP hanya bila diperlukan.
- Recruiter umumnya cukup dengan email dan LinkedIn.

**Keputusan:** `[TODO: pilih tampilkan / sembunyikan telepon dan alamat; siapkan versi CV publik]`

## 12. Milestone

| Tahap | Isi | Estimasi |
|---|---|---|
| 1. Persiapan | Finalisasi konten, CV publik, aset, pilihan font dan warna | 2-3 hari |
| 2. Setup & Layout | Inisialisasi Vite + Tailwind, navbar, Hero, kerangka section | 2 hari |
| 3. Konten | Experiences, Education, Certificates, Skills, Contact | 3-4 hari |
| 4. Polish | Animasi, responsif, aksesibilitas, SEO | 2-3 hari |
| 5. Rilis | Deploy, domain, pengujian lintas perangkat, Lighthouse | 1 hari |

## 13. Data yang Masih Dibutuhkan

- URL GitHub dan tautan demo/repo tiap proyek (jika boleh dipublikasikan)
- Stack front-end AgriNova dan stack PT Trigobalindo; tools QA di Transtrack.id
- File sertifikat BNSP (gambar/PDF) dan versi CV publik
- Keputusan privasi (bagian 11)
- Pilihan font dan warna aksen final
- Screenshot proyek (opsional, memperkuat kartu Featured)
