function coursesPrices(fundamental, advanced, apps, form) {


    const courses = {
        'JS Fundamentals': 170,
        'JS Advanced': 180,
        'JS Apps': 190
    };

    let total = 0;

    if (fundamental){
        total += courses["JS Fundamentals"];
    }

    if (advanced === true) {
        total += courses["JS Advanced"];
    }

    if (apps){
        total += courses["JS Apps"];
    }

    if (fundamental && advanced) {
        total -= courses["JS Advanced"] * 0.1;
    }
    if (fundamental && advanced && apps) {
        total -= total * 0.06;
    }

    if (form === "online") {
        total -= total * 0.06;
    }

    console.log(Math.round(total));
}

coursesPrices(true, false, false, "online");