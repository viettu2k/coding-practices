const daysOfYear = (day, month, year) => {
    if (day <= 0 || month <= 0 || year < 0) {
        console.log("Oh god, What the fuck!!!");
        return;
    }

    const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
    const thirtyDays = [4, 6, 9, 11];

    if (month === 2) {
        if (day > 28) {
            month += Math.floor(day / 28);
            day = day % 28;
            if (day === 0) day = 1;
        }
    }

    if (thirtyOneDays.includes(month)) {
        if (day > 31) {
            month += Math.floor(day / 31);
            day = day % 31;
            if (day === 0) day = 1;
        }
    }

    if (thirtyDays.includes(month)) {
        if (day > 30) {
            month += Math.floor(day / 30);
            day = day % 30;
            if (day === 0) day = 1;
        }
    }

    if (month > 12) {
        year += Math.floor(month / 12);
        month = month % 12;
        if (month === 0) month = 1;
    }

    console.log(`${day}/${month}/${year}`);
};

daysOfYear(32, 12, 2010);