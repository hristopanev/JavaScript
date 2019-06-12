function grade(examPoint, completedHW, totalHW) {

    if (examPoint >= 400) {
        let grade = 6;
        console.log(grade.toFixed(2));

    } else {
        let maxPoint = 100;
        let totalBonus = 0;

        if (totalHW > 0) {
            totalBonus = ((completedHW / totalHW) * 100) / 10;
        }
        let totalPoints = ((examPoint / 4) * 0.9) + totalBonus;
        let grade = 3 + 2 * (totalPoints - maxPoint / 5) / (maxPoint / 2);

        if (grade < 3) {
            grade = 2;
            console.log(grade.toFixed(2))
        } else {
            console.log(grade.toFixed(2));
        }
    }
}

grade(0, 0, 0);