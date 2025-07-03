import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Calendar,
  Camera,
  Music,
  Tent,
  CheckCircle,
  MessageCircle,imag
  Award,
  Clock,
  Shield,
  Heart,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LintasTendaLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tent className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">lintas_tenda</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#layanan" className="text-gray-600 hover:text-blue-600 transition-colors">
              Layanan
            </Link>
            <Link href="#galeri" className="text-gray-600 hover:text-blue-600 transition-colors">
              Galeri
            </Link>
            <Link href="#testimoni" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimoni
            </Link>
            <Link href="#kontak" className="text-gray-600 hover:text-blue-600 transition-colors">
              Kontak
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                🎉 Party Entertainment Service Terpercaya
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wujudkan Acara
                  <span className="text-blue-600"> Impian</span> Anda
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Layanan lengkap penyewaan tenda, dekorasi, sound system, dan dokumentasi profesional untuk membuat
                  acara Anda tak terlupakan.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                  <Calendar className="h-5 w-5 mr-2" />
                  Lihat Galeri
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Acara Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5★</div>
                  <div className="text-sm text-gray-600">Rating Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Acara pernikahan dengan tenda dan dekorasi elegan"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Garansi Kepuasan</div>
                    <div className="text-sm text-gray-600">100% Terjamin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kesulitan Mengorganisir Acara Besar?</h2>
            <p className="text-xl text-gray-600">
              Kami memahami betapa rumitnya merencanakan acara yang sempurna. Dari mencari vendor terpercaya hingga
              koordinasi hari-H yang stresful.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Waktu Terbatas</h3>
                  <p className="text-gray-600">Sulit mencari dan koordinasi banyak vendor dalam waktu singkat</p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-6 text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kualitas Tidak Pasti</h3>
                  <p className="text-gray-600">Khawatir dengan kualitas layanan yang tidak sesuai ekspektasi</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Stres Berlebihan</h3>
                  <p className="text-gray-600">Koordinasi yang rumit membuat acara jadi tidak menyenangkan</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Solusi Terbaik: One-Stop Event Solution!</h3>
              <p className="text-lg opacity-90">
                Dengan lintas_tenda, Anda cukup satu vendor untuk semua kebutuhan acara. Dari tenda, dekorasi, sound
                system, hingga dokumentasi profesional - semuanya dalam satu paket lengkap!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-blue-100 text-blue-800">Layanan Lengkap</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Semua Kebutuhan Acara dalam Satu Tempat</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Paket lengkap untuk membuat acara Anda berkesan dan tak terlupakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Tent className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Penyewaan Tenda</h3>
                <p className="text-gray-600 mb-4">Berbagai ukuran tenda berkualitas untuk segala jenis acara</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Tenda Pesta 6x6m - 12x12m</li>
                  <li>• Tenda Dekorasi Premium</li>
                  <li>• Tenda Outdoor & Indoor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <Star className="h-8 w-8 text-purple-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dekorasi</h3>
                <p className="text-gray-600 mb-4">Dekorasi elegan sesuai tema dan konsep acara Anda</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Dekorasi Pernikahan</li>
                  <li>• Dekorasi Ulang Tahun</li>
                  <li>• Dekorasi Corporate Event</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Music className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sound System</h3>
                <p className="text-gray-600 mb-4">Sistem audio berkualitas tinggi dengan operator berpengalaman</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Sound System Premium</li>
                  <li>• Orgen Tunggal</li>
                  <li>• Operator Profesional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                  <Camera className="h-8 w-8 text-orange-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dokumentasi</h3>
                <p className="text-gray-600 mb-4">Foto dan video profesional untuk mengabadikan momen berharga</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Fotografer Profesional</li>
                  <li>• Videografi HD/4K</li>
                  <li>• Editing Premium</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Mengapa Memilih lintas_tenda?</h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tim Berpengalaman</h3>
                <p className="text-gray-600">
                  Lebih dari 5 tahun pengalaman menangani berbagai jenis acara dengan tim profesional
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Kualitas Terjamin</h3>
                <p className="text-gray-600">
                  Peralatan berkualitas tinggi dan layanan premium dengan garansi kepuasan 100%
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">One-Stop Solution</h3>
                <p className="text-gray-600">
                  Semua kebutuhan acara dalam satu vendor - hemat waktu, tenaga, dan biaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-purple-100 text-purple-800">Portfolio Kami</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Galeri Acara yang Telah Kami Tangani</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat dokumentasi acara-acara spektakuler yang telah kami wujudkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Acara ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">Pernikahan Elegant</h3>
                    <p className="text-sm opacity-90">Jakarta, 2024</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
              Lihat Semua Galeri
              <ChevronDown className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge className="bg-yellow-400 text-yellow-900 text-lg px-4 py-2">🔥 Penawaran Terbatas!</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">Diskon 20% untuk Pemesanan Bulan Ini!</h2>
            <p className="text-xl opacity-90">
              Dapatkan paket lengkap dengan harga spesial. Promo berlaku hingga akhir bulan untuk 10 klien pertama!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                Klaim Diskon Sekarang
              </Button>
              <div className="text-sm opacity-75">⏰ Tersisa 7 slot lagi!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-green-100 text-green-800">Kata Mereka</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Testimoni Klien yang Puas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Kepuasan klien adalah prioritas utama kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Dimas",
                event: "Pernikahan",
                rating: 5,
                text: "Pelayanan luar biasa! Tim lintas_tenda sangat profesional dan detail. Acara pernikahan kami berjalan sempurna sesuai impian.",
              },
              {
                name: "PT. Maju Bersama",
                event: "Corporate Event",
                rating: 5,
                text: "Sudah 3 kali menggunakan jasa lintas_tenda untuk acara perusahaan. Selalu memuaskan dan tepat waktu!",
              },
              {
                name: "Keluarga Budi",
                event: "Ulang Tahun",
                rating: 5,
                text: "Dekorasi dan sound system-nya bagus banget. Anak saya senang sekali dengan pesta ulang tahunnya. Terima kasih!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.event}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-orange-100 text-orange-800">FAQ</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Pertanyaan yang Sering Diajukan</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Berapa lama sebelumnya harus booking?",
                  a: "Kami merekomendasikan booking minimal 2 minggu sebelum acara untuk memastikan ketersediaan. Namun untuk acara mendadak, silakan hubungi kami untuk cek ketersediaan.",
                },
                {
                  q: "Apakah ada paket bundling untuk semua layanan?",
                  a: "Ya! Kami menyediakan paket lengkap yang mencakup tenda, dekorasi, sound system, dan dokumentasi dengan harga yang lebih hemat.",
                },
                {
                  q: "Bagaimana sistem pembayaran?",
                  a: "Pembayaran bisa dilakukan dengan DP 50% saat booking, dan pelunasan sebelum hari H. Kami menerima transfer bank dan pembayaran tunai.",
                },
                {
                  q: "Apakah melayani acara di luar kota?",
                  a: "Ya, kami melayani acara di luar kota dengan tambahan biaya transportasi sesuai jarak lokasi.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Siap Wujudkan Acara Impian Anda?</h2>
            <p className="text-xl text-gray-600">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Chat langsung dengan tim kami</p>
                  <Button className="bg-green-600 hover:bg-green-700 w-full">Chat Sekarang</Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telepon</h3>
                  <p className="text-gray-600 mb-4">Hubungi langsung via telepon</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    0812-3456-7890
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Kirim detail acara via email</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    info@lintastenda.com
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis!</h3>
              <p className="text-lg opacity-90 mb-6">
                Ceritakan konsep acara impian Anda, dan kami akan berikan solusi terbaik dengan harga yang kompetitif.
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                Mulai Konsultasi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Tent className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">lintas_tenda</span>
              </div>
              <p className="text-gray-400">
                Party Entertainment Service terpercaya untuk mewujudkan acara impian Anda.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Penyewaan Tenda</li>
                <li>Dekorasi</li>
                <li>Sound System</li>
                <li>Dokumentasi</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@lintastenda.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Jakarta, Indonesia</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Jam Operasional</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Senin - Jumat: 08:00 - 17:00</li>
                <li>Sabtu: 08:00 - 15:00</li>
                <li>Minggu: Emergency Only</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 lintas_tenda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
