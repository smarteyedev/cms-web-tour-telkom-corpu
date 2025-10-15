# 🚀 Panduan Menjalankan Project Strapi di Local

Dokumentasi ini menjelaskan langkah-langkah untuk men-setup dan menjalankan project **Strapi** setelah melakukan _clone_ dari repository Git.

## 📁 1. Clone Repository

Clone repository Strapi ke local menggunakan perintah berikut:

```bash
git clone <url-repository>
cd <nama-folder-project>
```

## 🧩 2. Prasyarat

Sebelum menjalankan project, pastikan sistem kamu sudah memiliki:

| Komponen    | Versi Disarankan | Perintah untuk Cek |
| ----------- | ---------------- | ------------------ |
| **Node.js** | v20.18.0         | `node -v`          |
| **npm**     | v10.8.2 ke atas  | `npm -v`           |
| **Git**     | Terinstal        | `git --version`    |

> 💡 Jika belum terinstal Node.js, unduh versi LTS di [https://nodejs.org](https://nodejs.org).

## ⚙️ 3. Instalasi Dependencies

Jalankan perintah berikut untuk menginstal seluruh dependencies yang diperlukan:

```bash
npm install
```

Atau jika project menggunakan **yarn**:

```bash
yarn install
```

## 🔑 4. Konfigurasi Environment

Periksa apakah terdapat file `.env.example` pada root folder project.
Jika ada, buat salinannya menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian sesuaikan isi `.env` sesuai dengan konfigurasi environment lokal kamu, terutama bagian koneksi database dan security keys.

Contoh konfigurasi `.env` :

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=/QZjzgZbiCdj/e1A13odVA==,lCyaKGE5mjnjIX8bTeNvOg==,gTaW98k4nmJKr5pUQyHekQ==,fdXxLpztSI/6gNnvYj+3Gw==
API_TOKEN_SALT=zXuixXm9TdNZf2M2UpY51A==
ADMIN_JWT_SECRET=cZxs84oMVWK/gPSz2f8CsQ==
TRANSFER_TOKEN_SALT=xma0h4DcqWYLGKcUwN6rLA==
ENCRYPTION_KEY=JO1dhKTnfxJa2NKYB/jp4g==

# Database
DATABASE_CLIENT=sqlite
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=false
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=qBr8A8qPhVTo5mabMXLGBg==
```

## 🧱 5. Build Project

Untuk mempersiapkan project sebelum dijalankan dalam mode production:

```bash
npm run build
```

## 🚀 6. Menjalankan Project

### Mode Development (auto reload)

```bash
npm run develop
```

### Mode Production

```bash
npm run start
```

## 🌐 7. Akses Aplikasi

Setelah berhasil dijalankan, buka URL berikut di browser:

```
http://localhost:1337/admin
```

Jika ini pertama kali dijalankan, kamu akan diminta membuat akun **admin Strapi**.

## 🧰 8. Troubleshooting

Jika muncul error seperti `Cannot find module` atau `Missing dependencies`, coba hapus cache dan lakukan instalasi ulang:

```bash
rm -rf node_modules package-lock.json
npm install
```

Jika error masih muncul, periksa versi Node.js apakah sesuai dengan versi Strapi yang digunakan (biasanya Strapi v4/v5 membutuhkan Node.js ≥ 18).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi).
Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Chat with the Strapi community and core team.
- [Forum](https://forum.strapi.io/) - Discuss, ask questions, and get feedback from other developers.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

**Dibuat oleh:** _Tim Developer_
**Tanggal:** _15 Oktober 2025_
