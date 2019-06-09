function spaceshipCrafting() {
    let titaniumCoreFound = document.getElementById('titaniumCoreFound').value;
    let aluminiumCoreFound = document.getElementById('aluminiumCoreFound').value;
    let magnesiumCoreFound = document.getElementById('magnesiumCoreFound').value;
    let carbonCoreFound = document.getElementById('carbonCoreFound').value;
    let lossesPercent = document.getElementById('lossesPercent').value;

    let availableBars = document.getElementById('availableBars').children[1];
    let builtSpaceships = document.getElementById('builtSpaceships').children[1];

    let minusPercent = (lossesPercent / 4) / 100;

    let titaniumBars = Math.round((titaniumCoreFound - (titaniumCoreFound * minusPercent)) / 25);
    let aluminiumBars = Math.round((aluminiumCoreFound - (aluminiumCoreFound * minusPercent)) / 50);
    let magnesiumBars = Math.round((magnesiumCoreFound - (magnesiumCoreFound * minusPercent)) / 75);
    let carbonBars = Math.round((carbonCoreFound - (carbonCoreFound * minusPercent)) / 100);

    let countTheUndefinedShip = 0;
    let countNullMaster = 0;
    let countJSONCrew = 0;
    let countFalseFleet = 0;

    let TheUndefinedShip = 0;
    let NullMaster = 0;
    let JSONCrew = 0;
    let FalseFleet = 0;


    while (!titaniumBars >= 0 && !aluminiumBars >= 0 && magnesiumBars >= 0 && carbonBars >= 0) {

        if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7 &&
            countTheUndefinedShip === countNullMaster &&
            countTheUndefinedShip === countJSONCrew &&
            countTheUndefinedShip === countFalseFleet) {
            titaniumBars -= 7;
            aluminiumBars -= 9;
            magnesiumBars -= 7;
            carbonBars -= 7;

            countTheUndefinedShip++;
            TheUndefinedShip++;

        } else if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5 &&
            countNullMaster === countJSONCrew &&
            countNullMaster === FalseFleet) {

            titaniumBars -= 5;
            aluminiumBars -= 7;
            magnesiumBars -= 7;
            carbonBars -= 5;

            countNullMaster++;
            NullMaster++;


        } else if (titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2 &&
            countJSONCrew === countFalseFleet) {
            titaniumBars -= 3;
            aluminiumBars -= 5;
            magnesiumBars -= 5;
            carbonBars -= 2;

            countJSONCrew++;
            JSONCrew++;


        } else if (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
            titaniumBars -= 2;
            aluminiumBars -= 2;
            magnesiumBars -= 3;
            carbonBars -= 1;
            countFalseFleet++;
            FalseFleet++;
        } else {
            break;
        }
    }

    availableBars.textContent = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;

    if (TheUndefinedShip > 0 && NullMaster > 0 && JSONCrew > 0 && FalseFleet > 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    } else if (TheUndefinedShip === 0 && NullMaster === 0 && NullMaster === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = '';
    }


    else if (TheUndefinedShip === 0 && NullMaster === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${JSONCrew} JSON-CREW`;

    } else if (TheUndefinedShip === 0 && JSONCrew === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER`;

    } else if (TheUndefinedShip === 0 && NullMaster === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${FalseFleet} FALSE-FLEET`;

    } else if (TheUndefinedShip === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER, ${FalseFleet} FALSE-FLEET`;

    } else if (TheUndefinedShip === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW`;

    }  else if (TheUndefinedShip === 0 && NullMaster === 0) {
        builtSpaceships.textContent = `${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    }else if (TheUndefinedShip === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    }



    else if (NullMaster === 0 && TheUndefinedShip === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${FalseFleet} FALSE-FLEET`;

    } else if (NullMaster === 0 && TheUndefinedShip === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${JSONCrew} JSON-CREW`;

    } else if (NullMaster === 0 && JSONCrew === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP`;

    } else if (NullMaster === 0 && TheUndefinedShip === 0) {
        builtSpaceships.textContent = `${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    } else if (NullMaster === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${FalseFleet} FALSE-FLEET`;

    } else if (NullMaster === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${JSONCrew} JSON-CREW`;

    } else if (NullMaster === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    }




     else if (JSONCrew === 0 && TheUndefinedShip === 0 && NullMaster === 0) {
        builtSpaceships.textContent = `${FalseFleet} FALSE-FLEET`;

    } else if (JSONCrew === 0 && TheUndefinedShip === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER`;

    } else if (JSONCrew === 0 && NullMaster === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP`;

    }  else if (JSONCrew === 0 && TheUndefinedShip === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER, ${FalseFleet} FALSE-FLEET`;

    } else if (JSONCrew === 0 && NullMaster === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${FalseFleet} FALSE-FLEET`;

    } else if (JSONCrew === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER`;

    }else if (JSONCrew === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER, ${FalseFleet} FALSE-FLEET`;

    }





    else if (FalseFleet === 0 && TheUndefinedShip === 0 && NullMaster === 0) {
        builtSpaceships.textContent = `${JSONCrew} JSON-CREW`;

    } else if (FalseFleet === 0 && TheUndefinedShip === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER`;

    } else if (FalseFleet === 0 && NullMaster === 0 && FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP`;

    } else if (FalseFleet === 0 && NullMaster === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${JSONCrew} JSON-CREW`;

    } else if (FalseFleet === 0 && JSONCrew === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER`;

    }   else if (FalseFleet === 0 && TheUndefinedShip === 0) {
        builtSpaceships.textContent = `${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW`;

    }else if (FalseFleet === 0) {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW`;

    }


    else {
        builtSpaceships.textContent = `${TheUndefinedShip} THE-UNDEFINED-SHIP, ${NullMaster} NULL-MASTER, ${JSONCrew} JSON-CREW, ${FalseFleet} FALSE-FLEET`;

    }
}