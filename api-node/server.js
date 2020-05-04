drivers = [

    {
        id: 1,
        driverName: "Esapekka LAPPI",
        country: "🇫🇮 FIN",
        team: "M-Sport Ford WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Esapekka-Lappi-2020_sq_6f276_x_0x0.jpg",
        codriver: "Janne FERM"
    },
    {
        id: 2,
        driverName: "Teemu SUNINEN",
        country: "🇫🇮 FIN",
        team: "M-Sport Ford WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Teemu-Suninen-2020_sq2_fe282_x_0x0.jpg",
        codriver: "Jarmo LEHTINEN"
    },
    {
        id: 3,
        driverName: "Gus GREENSMITH",
        country: "🇬🇧 GBR",
        team: "M-Sport Ford WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/gus-greensmith-2020_sq_6cfdd_x_0x0.jpg",
        codriver: "Elliott EDMONSON"
    },
    {
        id: 4,
        driverName: "Ott TÄNAK",
        country: "🇪🇪 EST",
        team: "Hyundai Shell Mobis WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Ott-Tanak-2020_215d0_x_0x0.jpg",
        codriver: "Martin JÄRVEOJA"
    },
    {
        id: 5,
        driverName: "Thierry NEUVILLE",
        country: "🇧🇪 BEL",
        team: "Hyundai Shell Mobis WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Thierry-Neuville-2020_7c3d0_x_0x0.jpg",
        codriver: "Nicolas GILSOUL"
    },
    {
        id: 6,
        driverName: "Sébastien LOEB",
        country: "🇫🇷 FRA",
        team: "Hyundai Shell Mobis WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Sebastien-Loeb-2020_250b2_x_0x0.jpg",
        codriver: "Daniel ELENA"
    },
    {
        id: 7,
        driverName: "Dani SORDO",
        country: "🇪🇸 ESP",
        team: "Hyundai Shell Mobis WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Dani-Sordo-2020_b10fa_x_0x0.jpg",
        codriver: "Carlos DEL BARRIO"
    },
    {
        id: 8,
        driverName: "Craig BREEN",
        country: "🇮🇪 IRL",
        team: "Hyundai Shell Mobis WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Craig-Breen-2020_sq-_44d04_x_0x0.jpg",
        codriver: "Paul NAGLE"
    },
    {
        id: 9,
        driverName: "Sébastien OGIER",
        country: "🇫🇷 FRA",
        team: "Toyota Gazoo Racing WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Sebastien-Ogier-2020_sq_620da_x_0x0.jpg",
        codriver: "Julien INGRASSIA"
    },
    {
        id: 10,
        driverName: "Elfyn EVANS",
        country: "🇬🇧 GBR",
        team: "Toyota Gazoo Racing WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Elfyn-Evans-2020_sq_bc7c4_x_0x0.jpg",
        codriver: "Scott MARTIN"
    },
    {
        id: 11,
        driverName: "Kalle ROVANPERÄ",
        country: "🇫🇮 FIN",
        team: "Toyota Gazoo Racing WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Kalle-Rovanpera-2020_sq2_f495b_x_0x0.jpg",
        codriver: "Jonne HALTTUNEN"
    },
    {
        id: 12,
        driverName: "Takamoto KATSUTA",
        country: "🇯🇵 JPN",
        team: "Toyota Gazoo Racing WRT",
        driverPic: "https://www.wrc.com/images/redaktion/Web-2020/Drivers-CoDrivers-Teams/Drivers/square-format/Takamoto-Katsuta-2020_3_da7f2_x_0x0.jpg",
        codriver: "Dan BARRITT"
    },
];

const express = require('express');
const app = express();
const cors = require('cors');
let corsOptions = { origin: "*" };

app.use(cors(corsOptions));

app.listen(3000);
app.get('/drivers', function (req, res) {
    res.send(drivers);
});

// Requête sur la route /drivers/:id
app.get('/drivers/:id', function (req, res) {

    let id = req.params.id // On récupère le paramètre passé en bout de route (ici id)

    for (let i = 0; i < drivers.length; i++) { // On boucle sur le tableau drivers
        let currentDriver = drivers[i]; // On récupère à chaque itération un des pilotes du tableau drivers
        if (currentDriver.id == id) { // Si l'id du pilote est identique à l'id passé en bout de route dans la requête...
            res.send(currentDriver) // ...On envoie la réponse (l'objet pilote)
            break; // On quitte la boucle ( on peut aussi mettre return OU return(currentDriver.id))
        }
    }

    res.statusMessage = "Driver not found"; // message d'erreur envoyé au client
    res.status(404).end(); // On envoie la réponse avec l'erreur 404 et le message d'erreur défini à la ligne précédente

});
