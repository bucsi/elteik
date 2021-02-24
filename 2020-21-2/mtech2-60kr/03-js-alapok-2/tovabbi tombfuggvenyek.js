const ebed = {
    eloetelek: [
        {
            nev: "Libamáj",
            evoeszkoz: "villa",
            kaloria: 100,
        },
        {
            nev: "Tepertő",
            evoeszkoz: "kéz",
            kaloria: 50,
        },
        {
            nev: "egy pohár víz",
        },
    ],
    foetelek: [
        {
            nev: "Húsleves",
            evoszekoz: "kanál",
            kaloria: 150,
        },
        {
            nev: "Nagy BigMac Menü zéró kólával, borsos krumplival",
            evoeszkoz: "kéz",
            kaloria: 300,
        },
    ],
    desszertek: [
        {
            nev: "Gyümölcssaláta",
            evoeszkoz: "kanál",
            kaloria: 100,
        },
    ],
}

//1. feladat: Adjuk össze az előételek kalória-értékét!
console.log(
    ebed.eloetelek.reduce((s, etel) => {
        return etel.kaloria ? s + etel.kaloria : s
    }, 0)
)

//2. f: az ebédben szereplő átelek neveit soroljuk fel, vesszővel elválasztva!
let menu = ""
for (const kulcs in ebed) {
    menu += ebed[kulcs].reduce((s, etel) => s + etel.nev + "; ", "")
}
console.log(menu)

const cinemas = [
    {
        name: "Allee",
        company: "CinemaCity",
        movies: [
            {
                title: "Tenet",
                student: 2500,
                adult: 3400,
            },
            {
                title: "Mulan",
                student: 1700,
                adult: 2800,
            },
            {
                title: "Almafa",
                student: 1800,
                adult: 500,
            },
            {
                title: "Körtefa",
                student: 150,
                adult: 450,
            },
        ],
    },
    {
        name: "Aréna",
        company: "CinemaCity",
        movies: [
            {
                title: "Tenet",
                student: 3500,
                adult: 4500,
            },
            {
                title: "Mulan",
                student: 2200,
                adult: 3400,
            },
            {
                title: "Almafa",
                student: 2100,
                adult: 700,
            },
            {
                title: "Barackfa",
                student: 4600,
                adult: 6800,
            },
            {
                title: "Körtefa",
                student: 150,
                adult: 450,
            },
        ],
    },
    {
        name: "Mammut",
        company: "CinemaPink",
        movies: [
            {
                title: "Tenet",
                student: 1700,
                adult: 3000,
            },
            {
                title: "Mulan",
                student: 1600,
                adult: 2400,
            },
            {
                title: "Körtefa",
                student: 200,
                adult: 500,
            },
        ],
    },
    {
        name: "Corvin",
        company: "Corvin Mozi",
        movies: [
            {
                title: "Almafa",
                student: 100,
                adult: 300,
            },
            {
                title: "Körtefa",
                student: 130,
                adult: 270,
            },
        ],
    },
]

//3. feladat: keressünk olyan mozikat, ahol legalább 4 filmet vetítenek

function legalabbNegy(mozi) {
    return mozi.movies.length >= 4
}

console.log(cinemas.find(m => legalabbNegy(m)).name)
//cinemas.forEach(m => (legalabbNegy(m) ? console.log(m.name) : 0))
//cinemas.filter(m => legalabbNegy(m)).forEach(m => console.log(m.name))
console.log(cinemas.filter(m => legalabbNegy(m)).length)

//4. feladat: Egy mozi, ahol adják a Mulant

function vanMulan(mozi) {
    return mozi.movies.some(f => f.title === "Mulan")
}

console.log(cinemas.find(m => vanMulan(m)).name)
//console.log(cinemas.find(m => m.movies.some(f => f.title === "Mulan")).name)
