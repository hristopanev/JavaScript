class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];


        this.obj = {
            ram: 0,
            cpu: 0
        }
    }


    installAProgram(name, requiredSpace) {

        if (this.hddMemory < requiredSpace) {
            return new Error('There is not enough space on the hard drive');
        }

        let newSoft = {
            name,
            requiredSpace,
        };

        this.installedPrograms.push(newSoft);
        this.hddMemory -= requiredSpace;

        return newSoft;
    }

    uninstallAProgram(name) {

        for (let program of this.installedPrograms) {
            if (program.name === name) {
                let programIndex = this.installedPrograms.indexOf(program);
                this.installedPrograms.splice(programIndex, 1);
                return this.installedPrograms;
            }
        }
        return new Error('Control panel is not responding');
    }

    openAProgram(name) {

        for (let program of this.installedPrograms) {

            if (program.name === name) {

                if (this.taskManager.length > 0) {

                    for (let pr of this.taskManager) {
                        if (pr.name === program.name) {
                            return new Error(`The ${name} is already open`);
                        }
                    }
                }

                let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
                this.obj.ram += ramUsage;
                let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;
                this.obj.cpu += cpuUsage;
                if (this.obj.ram.toFixed(0) >= 100) {
                    return new Error(`${name} caused out of memory exception`)
                }

                if (this.obj.cpu.toFixed(0) >= 100) {
                    return new Error(`${name} caused out of cpu exception`)
                }

                let openProgram = {
                    name ,
                    ramUsage ,
                    cpuUsage
            };

                this.taskManager.push(openProgram);
                return openProgram;

            }
        }
            return new Error(`The ${name} is not recognized`);


    }


    taskManagerView() {
        if (this.taskManager.length === 0) {
            return new Error('All running smooth so far');
        }

        let result = [];
        for (let program of this.taskManager) {
            result.push(`Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%`)
        }


        return result.join('\n');
    }

}
let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');


console.log(computer.obj.cpu);

console.log(computer.taskManagerView());











