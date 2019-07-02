const FilmStudio = require('../filmStudio');
const {assert} = require('chai');



describe('FilmStudio', function () {

    let filmStudio;

    beforeEach(function () {
        filmStudio = new FilmStudio('Bojana')
    });

    it('should empty array', function () {

        let first = filmStudio.films;

        assert.equal(first.expenses, undefined)
    });

    describe('Function makeMovie()', function () {

        it('should if role les two', function () {
            filmStudio.makeMovie("filmName", []);
            assert.throw(() => filmStudio.makeMovie(), 'Invalid arguments count')

        });

        it('should if filmName and roles pass', function () {

            assert.throw(() => filmStudio.makeMovie(1, 3), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie("sd", 23), 'Invalid arguments');
            assert.throw(() => filmStudio.makeMovie(2, ["first, second"]), 'Invalid arguments');
        });

        it('should if count pass film', function () {

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            assert.deepEqual(filmStudio.makeMovie('The Avengers',
                ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']),

                { filmName: 'The Avengers 2', filmRoles:
                        [ { role: 'Iron-Man', actor: false },
                            { role: 'Thor', actor: false },
                            { role: 'Hulk', actor: false },
                            { role: 'Arrow guy', actor: false } ] })
        });
    });

    describe('Function casting()', function () {

        it('should if no film in studio', function () {
            let newFilm = new FilmStudio('Gaga');

            assert.equal(newFilm.casting('pesho', 'killer'), `There are no films yet in Gaga.`)
        });

        it('should if actor pass', function () {

            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            assert.equal(filmStudio.casting('pesho', 'Thor'),`You got the job! Mr. pesho you are next Thor in the The Avengers. Congratz!` )
        });

        it('should actor dont pass', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            assert.equal(filmStudio.casting('Gosho', 'killer'), `Gosho, we cannot find a killer role...`)
        });
    });


    describe('Function lookForProducer()', function () {
        it('should if film dont exist', function () {
            assert.throw(()=> filmStudio.lookForProducer('fanta'), `fanta do not exist yet, but we need the money...`)
        });
       it('should by standard', function () {
            filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            assert.equal(filmStudio.lookForProducer('The Avengers'), 'Film name: The Avengers\n' +
                'Cast:\n' +
                'false as Iron-Man\n' +
                'false as Thor\n' +
                'false as Hulk\n' +
                'false as Arrow guy');
        });
    })


});