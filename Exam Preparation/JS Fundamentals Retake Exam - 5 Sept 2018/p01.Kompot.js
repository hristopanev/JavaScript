function kompot(array) {

    let cherryKg = 0;
    let peachKg = 0;
    let plumKg = 0;
    let anotherFruits = 0;

    for (let line of array) {
        let [fruit, kg] = line.split(/\s+/gm);

        switch (fruit) {
            case 'cherry':
                cherryKg += +kg;
                break;
            case  'peach':
                peachKg += +kg;
                break;
            case 'plum':
                plumKg += +kg;
                break;
            default:
                anotherFruits += +kg;
                break;
        }
    }

    let cherryKompots = Math.floor(((cherryKg * 1000) / 9) / 25);
    let peachKompots = Math.floor(((peachKg * 1000) / 140) / 2.5);
    let plumKompots = Math.floor(((plumKg * 1000) / 20) / 10);
    let rakia = anotherFruits * 0.2;


    console.log(`Cherry kompots: ${cherryKompots}\nPeach kompots: ${peachKompots}\nPlum kompots: ${plumKompots}\nRakiya liters: ${rakia.toFixed(2)}
`)

}

kompot(['cherry 1.2',
    'peach 2.2',
    'plum  5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20']
);