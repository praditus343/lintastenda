import { motion } from "framer-motion";

const TeamInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#C49061] mb-6">Kelompok Pengembang</h1>
            <div className="border-b-2 border-[#C49061] w-24 mx-auto mb-6"></div>
            <ul className="space-y-2 mb-8">
              <li>Rachmasari Annisa Rida (22.11.4624)</li>
              <li>Praditus Egi Danuarta (22.11.4662)</li>
              <li>Muhamad Syamsul Hidayat (22.11.4664)</li>
            </ul>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-[#C49061]">1. Ide Proyek</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Membangun website untuk usaha "lintas_tenda" yang bergerak dalam bidang Party
              Entertainment Service. Website ini akan menjadi platform online untuk mempromosikan jasa
              "lintas_tenda", yang mencakup penyewaan tenda dan dekorasi, orgen tunggal dan sound
              system, serta jasa photo dan video.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Website akan memberikan informasi lengkap tentang layanan yang ditawarkan, harga, 
              testimoni, kontak untuk pemesanan, serta galeri yang berisi dokumentasi yang pernah 
              "lintas_tenda" kerjakan. Selain itu, website juga akan menampilkan galeri foto dan 
              video dari acara yang telah dilakukan oleh "lintas_tenda".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#C49061]">2. Anatomi Landing Page</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">a. Page Fold</h3>
                <p className="text-gray-700">
                  Informasi penting mengenai usaha "lintas_tenda" akan ditampilkan pada bagian atas
                  halaman yang terlihat tanpa perlu scroll ke bawah, sehingga akan lebih menarik perhatian.
                </p>
              </div>

              <div>
                <h3 className="font-bold">b. Featured Section Design</h3>
                <p className="text-gray-700">
                  Keunggulan produk dari usaha "lintas_tenda" akan ditampilkan dengan visual yang
                  menarik berupa gambar. Bagian ini akan ditampilkan pada bagian galeri yang akan
                  menampilkan foto dan video dari acara yang telah dilakukan.
                </p>
              </div>

              <div>
                <h3 className="font-bold">c. Powerful Copywriting</h3>
                <p className="text-gray-700">
                  Berisi teks yang bersifat persuasif yang akan membangkitkan rasa penasaran
                  audiens, sehingga audiens akan terdorong untuk membaca hingga melakukan suatu
                  aksi (dalam hal ini menggunakan jasa dari "lintas_tenda").
                </p>
              </div>

              <div>
                <h3 className="font-bold">d. Unique Selling Proposition (USP)</h3>
                <p className="text-gray-700">
                  Pernyataan singkat yang akan menjelaskan mengapa jasa "lintas_tenda" berbeda
                  dari kompetitor.
                </p>
              </div>

              <div>
                <h3 className="font-bold">e. Headline</h3>
                <p className="text-gray-700">
                  Judul utama yang akan menarik perhatian pengunjung website sehingga audiens
                  akan tertarik untuk melanjutkan scroll membaca ke bagian selanjutnya.
                </p>
              </div>

              <div>
                <h3 className="font-bold">f. Hero Images</h3>
                <p className="text-gray-700">
                  Pada bagian atas halaman akan terdapat gambar besar yang mencolok sebagai
                  bentuk visual yang mewakili jasa "lintas_tenda".
                </p>
              </div>

              <div>
                <h3 className="font-bold">g. Problem & Solution</h3>
                <p className="text-gray-700">
                  Menjelaskan masalah utama yang umumnya dihadapi oleh audiens serta solusi yang
                  akan diberikan oleh penyedia jasa "lintas_tenda".
                </p>
              </div>

              <div>
                <h3 className="font-bold">h. Benefit/Reason</h3>
                <p className="text-gray-700">
                  Penjelasan mengenai manfaat yang akan didapat oleh audiens jika memilih
                  "lintas_tenda" sebagai vendor mereka, tentunya dengan menonjolkan usaha
                  "lintas_tenda" dibanding penyedia jasa lainnya.
                </p>
              </div>

              <div>
                <h3 className="font-bold">i. Call to Action (CTA)</h3>
                <p className="text-gray-700">
                  Tombol ini akan meneruskan halaman ke kontak WhatsApp dari "lintas_tenda",
                  sehingga jika audiens tertarik untuk menggunakan jasa dari "lintas_tenda" mereka
                  dapat langsung berdiskusi dan memesan melalui WhatsApp.
                </p>
              </div>

              <div>
                <h3 className="font-bold">j. Social Proof/Testimoni</h3>
                <p className="text-gray-700">
                  Sebagai bukti bahwa jasa "lintas_tenda" memang terpercaya, akan ada bagian "Kata
                  Mereka" yang berupa testimoni dari pelanggan yang pernah menggunakan jasa dari
                  "lintas_tenda", sehingga akan meningkatkan kepercayaan audiens terhadap usaha
                  jasa "lintas_tenda".
                </p>
              </div>

              <div>
                <h3 className="font-bold">k. Trust Element</h3>
                <p className="text-gray-700">
                  Elemen yang akan menambah kredibilitas usaha "lintas_tenda" berupa logo usaha.
                </p>
              </div>

              <div>
                <h3 className="font-bold">l. Deskripsi Singkat</h3>
                <p className="text-gray-700">
                  Ringkasan tentang layanan apa saja yang tersedia di "lintas_tenda". Meski singkat,
                  akan mencakup keseluruhan garis besar informasi mengenai layanan "lintas_tenda".
                </p>
              </div>

              <div>
                <h3 className="font-bold">m. Foto/Video</h3>
                <p className="text-gray-700">
                  Konten visual yang akan menjelaskan layanan secara lebih jelas, akan ditampilkan di
                  bagian galeri.
                </p>
              </div>

              <div>
                <h3 className="font-bold">n. Special Offer</h3>
                <p className="text-gray-700">
                  Penawaran terbatas berupa diskon yang akan menciptakan rasa "tidak ingin
                  ketinggalan diskon" sehingga mempercepat audiens dalam mengambil keputusan.
                </p>
              </div>

              <div>
                <h3 className="font-bold">o. FAQ</h3>
                <p className="text-gray-700">
                  Bagian yang berisi pertanyaan yang umum ditanyakan oleh audiens yang sudah
                  terdapat jawabannya untuk membantu audiens lebih memahami layanan
                  "lintas_tenda" sebelum mereka mengambil keputusan.
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamInfo;