const SoftUniFy = require('../softUniFy');
const {assert} = require('chai');

describe('SoftUni', function () {
    let softUniFy;
    
    beforeEach(function () {
        softUniFy = new SoftUniFy();
    });

    it('should is all song an object', function () {
        assert.deepEqual(softUniFy.allSongs, {})
    });

    it('should if the song is empty', function () {
        assert.equal(softUniFy.playSong('song'),
            'You have not downloaded a song song yet. Use SoftUniFy\'s function downloadSong() to change that!')
    });

    it('should if artist no exist', function () {
        assert.equal(softUniFy.rateArtist('Eminem'), 'The Eminem is not on your artist list.');
    });
});
