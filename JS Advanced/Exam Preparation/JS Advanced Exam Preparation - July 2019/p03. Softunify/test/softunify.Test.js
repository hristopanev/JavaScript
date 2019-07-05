const SoftUniFy = require('../softunify');
const {assert} = require('chai');

describe('SoftUniFy', function () {
    let softUniFly;

    beforeEach(function () {
        softUniFly = new SoftUniFy();
    });

    describe('downloadSong', function () {
        it('should if all song an object', function () {
            assert.deepEqual(softUniFly.allSongs, {})
        });
    });
    
    describe('downloadSong', function () {
        it('should if artist dont exist', function () {
            softUniFly.downloadSong('Eminem', 'Phenomenal', 'PHENOMENAL...');
            assert.deepEqual(softUniFly.allSongs, { Eminem:
                    { rate: 0,
                        votes: 0,
                        songs:
                            [ 'Phenomenal - PHENOMENAL...']}}
            )
        });

        it('should song exit two', function () {
            softUniFly.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFly.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');


            assert.deepEqual(softUniFly.allSongs, { Eminem:
                    { rate: 0,
                        votes: 0,
                        songs:
                            [ 'Venom - Knock, Knock let the devil in...',
                                'Phenomenal - IM PHENOMENAL...' ]}})
        });

        it('should if exist two artist', function () {
            softUniFly.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
            softUniFly.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            softUniFly.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

            assert.deepEqual(softUniFly.allSongs, { Eminem:
                    { rate: 0,
                        votes: 0,
                        songs:
                            [ 'Venom - Knock, Knock let the devil in...',
                                'Phenomenal - IM PHENOMENAL...' ] },
                'Dub Fx':
                    { rate: 0,
                        votes: 0,
                        songs: [ 'Light Me On Fire - You can call me a liar.. ' ] } }
            )

        });
    });
    
    describe('playSong', function () {
        it('should if song dont exist', function () {
            assert.equal(softUniFly.playSong('ala bala'), `You have not downloaded a ala bala song yet. Use SoftUniFy's function downloadSong() to change that!`)
        });

        it('should if song exist', function () {
            softUniFly.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
            assert.equal(softUniFly.playSong('Phenomenal'), 'Eminem:\nPhenomenal - IM PHENOMENAL...\n');
        });


    });

    describe('songList', function () {
        it('should if songList is empty', function () {
            assert.equal(softUniFly.songsList, "Your song list is empty");
        });

        it('should if song list pass', function () {
            softUniFly.downloadSong('Eminem', 'Phenomenal', 'PHENOMENAL...');
            assert.equal(softUniFly.songsList, 'Phenomenal - PHENOMENAL...');
        });
    });


    describe('rateArtist', function () {
        it('should if artist dont exist', function () {
            assert.equal(softUniFly.rateArtist('Eminem'), 'The Eminem is not on your artist list.')
        });
    })


});