const HolidayPackage = require('../holidayPackage');
const {assert} = require('chai');

describe('HolidayPackage', function () {

    let holiday;
    beforeEach(function () {
        holiday = new HolidayPackage('Bulgaria', 'Winter');
    });

    describe('showVacationers', function () {

        it('should if dont have vacantion', function () {
            let newHoliday = new HolidayPackage();
            assert.equal(newHoliday.showVacationers(), 'No vacationers are added yet')
        });

        it('should if incorrect input', function () {
            assert.throw(() => holiday.insuranceIncluded = 23 , 'Insurance status must be a boolean');
        });

        it('should if vacationer pass', function () {
            holiday.addVacationer('Hristo Panev');
            assert.equal(holiday.showVacationers(), 'Vacationers:\nHristo Panev')
        });
    });

    describe('addVacationer', function () {
        it('should if invalid vacationer', function () {
            assert.throw(() => holiday.addVacationer(34, " " ), 'Vacationer name must be a non-empty string');
            assert.throw(() => holiday.addVacationer(" ", " " ), 'Vacationer name must be a non-empty string');

        });

        it('should if missing first oder second name ', function () {
            assert.throw(() => holiday.addVacationer("Peter"), 'Name must consist of first name and last name');
        });

        it('should if pass', function () {
            assert.equal(holiday.addVacationer('Hristo Panev'))
        });
    });

    describe('generateHolidayPackage', function () {
        it('should if vacation les than 1', function () {
            assert.throw(() => holiday.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });
    })

    it('should vacation', function () {
        holiday.addVacationer('Hristo Panev');

        assert.equal(holiday.generateHolidayPackage(),
            "Holiday Package Generated\n" +
            "Destination: " + "Bulgaria" + "\n" +
            "Vacationers:\n" + "Hristo Panev" + "\n" +
            "Price: " + "600");

    });


    it('should vacation with insuranceIncluded', function () {
        holiday.addVacationer('Hristo Panev');
        holiday.insuranceIncluded = true;

        assert.equal(holiday.generateHolidayPackage(),
            "Holiday Package Generated\n" +
            "Destination: " + "Bulgaria" + "\n" +
            "Vacationers:\n" + "Hristo Panev" + "\n" +
            "Price: " + "700");
    });
});