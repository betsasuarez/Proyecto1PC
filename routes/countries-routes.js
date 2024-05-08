const express = require('express');
const router = express.Router();

const COUNTRIES = [
    {
        id: 'c1',
        name: 'United States',
        cities: ['New York', 'Los Angeles', 'Chicago']
    },
    {
        id: 'c2',
        name: 'United Kingdom',
        cities: ['London', 'Manchester', 'Birmingham']
    },
    {
        id: 'c3',
        name: 'France',
        cities: ['Paris', 'Marseille', 'Lyon']
    }
];

router.get('/', (req, res, next) => {
    res.json(COUNTRIES);
});

router.get('/:cid', (req, res, next) => {
    const countryId = req.params.cid;
    const country = COUNTRIES.find(c => c.id === countryId);

    if (!country) {
        return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
});

router.get('/:cid/cities', (req, res, next) => {
    const countryId = req.params.cid;
    const country = COUNTRIES.find(c => c.id === countryId);

    if (!country) {
        return res.status(404).json({ message: "Country not found" });
    }

    res.json(country.cities);
});

module.exports = router;
