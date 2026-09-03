// =========================
// DATA BUKU
// =========================

const buku = {

    laskar: {

        judul: "Laskar Pelangi",

        penulis: "Andrea Hirata",

        kategori: "Novel",

        cerita:
            "Laskar Pelangi menceritakan perjuangan "
            + "sekelompok anak di Belitung yang memiliki "
            + "semangat besar untuk mendapatkan pendidikan. "
            + "Walaupun belajar dengan fasilitas sederhana, "
            + "mereka tetap memiliki impian dan saling "
            + "mendukung satu sama lain.",

        pesan:
            "Cerita ini mengajarkan pentingnya pendidikan, "
            + "persahabatan, semangat, dan tidak menyerah "
            + "dalam menghadapi keterbatasan."
    },


    bumi: {

        judul: "Bumi Manusia",

        penulis: "Pramoedya Ananta Toer",

        kategori: "Novel",

        cerita:
            "Bumi Manusia menceritakan kehidupan Minke, "
            + "seorang pemuda pribumi yang hidup pada masa "
            + "kolonial. Ia menghadapi berbagai persoalan "
            + "tentang pendidikan, kehidupan sosial, "
            + "ketidakadilan, dan perjuangan menentukan "
            + "jalan hidupnya.",

        pesan:
            "Cerita ini menggambarkan pentingnya pendidikan, "
            + "keberanian berpikir, dan perjuangan menghadapi "
            + "ketidakadilan."
    },


    html: {

        judul: "Belajar HTML & CSS",

        penulis: "Web Developer",

        kategori: "Pendidikan",

        cerita:
            "Buku ini memperkenalkan dasar-dasar pembuatan "
            + "website menggunakan HTML dan CSS. Pembaca "
            + "diajak mengenal struktur halaman, teks, gambar, "
            + "warna, tombol, serta cara membuat tampilan "
            + "website menjadi lebih menarik.",

        pesan:
            "Belajar membuat website membutuhkan latihan "
            + "dan ketekunan. Mulailah dari dasar dan "
            + "kembangkan kemampuan secara bertahap."
    },


    sejarah: {

        judul: "Sejarah Indonesia",

        penulis: "R. Soekmono",

        kategori: "Sejarah",

        cerita:
            "Buku ini membahas perjalanan sejarah Indonesia "
            + "dari masa lampau hingga perkembangan masyarakat "
            + "Indonesia. Pembaca dapat mengenal berbagai "
            + "peristiwa penting yang membentuk perjalanan "
            + "bangsa Indonesia.",

        pesan:
            "Dengan mempelajari sejarah, kita dapat memahami "
            + "peristiwa masa lalu dan mengambil pelajaran "
            + "untuk masa depan."
    },


    matematika: {

        judul: "Matematika Dasar",

        penulis: "Tim Edukasi",

        kategori: "Pendidikan",

        cerita:
            "Buku ini membantu pembaca memahami konsep dasar "
            + "matematika seperti operasi hitung, pecahan, "
            + "persamaan, dan berbagai contoh soal sederhana. "
            + "Materi disusun secara bertahap agar lebih mudah "
            + "dipahami.",

        pesan:
            "Matematika akan menjadi lebih mudah jika dipelajari "
            + "secara bertahap dan sering berlatih."
    },


    menara: {

        judul: "Negeri 5 Menara",

        penulis: "Ahmad Fuadi",

        kategori: "Novel",

        cerita:
            "Negeri 5 Menara menceritakan perjalanan Alif, "
            + "seorang anak yang belajar di sebuah pesantren. "
            + "Di sana ia bertemu dengan teman-teman dari "
            + "berbagai daerah dan bersama-sama mengejar "
            + "impian mereka.",

        pesan:
            "Cerita ini mengajarkan bahwa impian membutuhkan "
            + "usaha, kesabaran, disiplin, dan keyakinan."
    }

};


// =========================
// MENAMPILKAN DETAIL
// =========================

function detailBuku(id) {

    const data = buku[id];

    const detailSection =
        document.getElementById(
            "detailSection"
        );

    const detailContent =
        document.getElementById(
            "detailContent"
        );


    detailContent.innerHTML = `

        <h2>
            📖 ${data.judul}
        </h2>

        <p class="detail-penulis">

            Penulis:
            ${data.penulis}

            <br>

            Kategori:
            ${data.kategori}

        </p>


        <h3>
            📚 Cerita / Sinopsis
        </h3>

        <p>
            ${data.cerita}
        </p>


        <h3>
            💡 Pesan Cerita
        </h3>

        <p>
            ${data.pesan}
        </p>


        <button
            class="pinjam-btn"
            onclick="pinjamBuku('${data.judul}')">

            📚 Pinjam Buku

        </button>

    `;


    // Tampilkan popup

    detailSection.style.display = "flex";

}


// =========================
// MENUTUP DETAIL
// =========================

function tutupDetail() {

    document.getElementById(
        "detailSection"
    ).style.display = "none";

}


// =========================
// TOMBOL PINJAM
// =========================

function pinjamBuku(judul) {

    alert(
        "📚 Permintaan Peminjaman\n\n"
        + "Buku: "
        + judul
        + "\n\n"
        + "Silakan hubungi petugas "
        + "perpustakaan."
    );

}


// =========================
// PENCARIAN
// =========================

function cariBuku() {

    let input =
        document
        .getElementById(
            "searchInput"
        )
        .value
        .toLowerCase();


    let cards =
        document.querySelectorAll(
            ".book-card"
        );


    cards.forEach(function(card) {

        let judul =
            card
            .querySelector("h3")
            .textContent
            .toLowerCase();


        let penulis =
            card
            .querySelector("p")
            .textContent
            .toLowerCase();


        if (
            judul.includes(input) ||
            penulis.includes(input)
        ) {

            card.style.display =
                "block";

        } else {

            card.style.display =
                "none";

        }

    });

}


// =========================
// FILTER KATEGORI
// =========================

function filterBuku(kategori) {

    let cards =
        document.querySelectorAll(
            ".book-card"
        );


    cards.forEach(function(card) {

        if (
            kategori === "semua" ||
            card.dataset.kategori === kategori
        ) {

            card.style.display =
                "block";

        } else {

            card.style.display =
                "none";

        }

    });


    // Bersihkan pencarian

    document.getElementById(
        "searchInput"
    ).value = "";

}


// =========================
// KLIK LATAR POPUP
// =========================

document.getElementById(
    "detailSection"
).addEventListener(
    "click",
    function(event) {

        if (
            event.target === this
        ) {

            tutupDetail();

        }

    }
);