const http = require('http');
const url = require('url');

const kulis = [
    {
        Name: "Udin",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name: "Ucup",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name: "Eko",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name: "Joko",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name: "Joni",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name: "Jaka",
        Description: "Kuli profesional dengan pengalaman lebih dari 10 tahun.",
        ProfessionTags: ["Kuli", "Buruh", "Pembantu", "Tukang", "Servis"],
        ImageBanner: "https://source.unsplash.com/random/1200x600",
        ImageProfile: "https://source.unsplash.com/random/400x400",
        Rating: 4.5,
        RentalCount: 100,
    },
    {
        Name:           "Budi",
        Description:    "Tukang kayu handal dengan keahlian dalam pembuatan furnitur.",
        ProfessionTags: ["Tukang Kayu", "Pembuat Furnitur", "Ahli Kerajinan Kayu"],
        ImageBanner:    "https://source.unsplash.com/random/1200x600",
        ImageProfile:   "https://source.unsplash.com/random/400x400",
        Rating:         4.2,
        RentalCount:    70,
    },
    {
        Name:           "Budi",
        Description:    "Tukang kayu handal dengan keahlian dalam pembuatan furnitur.",
        ProfessionTags: ["Tukang Kayu", "Pembuat Furnitur", "Ahli Kerajinan Kayu"],
        ImageBanner:    "https://source.unsplash.com/random/1200x600",
        ImageProfile:   "https://source.unsplash.com/random/400x400",
        Rating:         4.2,
        RentalCount:    70,
    },
    {
        Name:           "Agus",
        Description:    "Ahli konstruksi dengan pengalaman bertahun-tahun.",
        ProfessionTags: ["Kontraktor", "Tukang Bangunan", "Pembuat"],
        ImageBanner:    "https://source.unsplash.com/random/1200x600",
        ImageProfile:   "https://source.unsplash.com/random/400x400",
        Rating:         4.8,
        RentalCount:    120,
    },
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/kuli' && req.method === 'GET') {
        const randomKulis = [];
        for (let i = 0; i < 4; i++) {
            const randomKuli = kulis[Math.floor(Math.random() * kulis.length)];
            randomKulis.push(randomKuli);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(randomKulis));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
