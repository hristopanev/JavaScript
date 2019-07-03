const AutoService = require('../autoService');
const {assert} = require('chai');

describe('AutoService', function () {
    let autoService;

    beforeEach(function () {
        autoService = new AutoService(1);
    });

    it('should if no clients', function () {
        assert.equal(autoService.repairCar(), "No clients, we are just chilling...");
    });

    it('should free place', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        assert.equal(autoService.workInProgress.length, 1);
        assert.equal(autoService.backlogWork.length, 0)
    });

    it('should dont free place', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        assert.equal(autoService.workInProgress.length, 1);
        assert.equal(autoService.backlogWork.length, 1)
    });

    it('should carInfo no exist', function () {
        assert.equal(autoService.carInfo('CA1234CA', 'Gosho'), 'There is no car with platenumber CA1234CA and owner Gosho.')
    });

    // it('should if carInfo exist', function () {
    //     autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
    //
    //
    //     assert.equal(autoService.carInfo('CA1234CA', 'Peter',), {"carInfo":{"doors": "broken", "engine": "MFRGG23", "transmission": "FF4418ZZ"}, "clientName": "Peter", "plateNumber":"CA1234CA" , 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'})
    // });

    it('should if carRepair', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});

        assert.equal(autoService.repairCar.workInProgress)
    });


    it('should carRep', function () {
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
        autoService.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
        autoService.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});


        assert.equal(autoService.repairCar(),"Your doors were repaired.");
        assert.equal(autoService.repairCar(),"Your doors and wheels and tires were repaired.");
        assert.equal(autoService.repairCar(),"Your car was fine, nothing was repaired.")

    });
})