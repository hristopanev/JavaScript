class Hotel{
        constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;


        this.rooms ={
            single: parseInt(capacity * 0.5),
            double: parseInt(capacity * 0.3),
            maisonette: parseInt(capacity * 0.2)
        };
    }


    get roomsPricing(){
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing(){
        return{
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    rentARoom(clientName, roomType, nights){

            let booking = {};
            let room = this.rooms[roomType];

            if (room > 0){

                booking = {name: clientName,
                    roomType: roomType,
                    nights: nights,
                    roomNumber: this.currentBookingNumber
                };
                this.bookings.push(booking);
                this.currentBookingNumber++;
                this.rooms[roomType]--;

                return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${booking.roomNumber}.`

            }else {

                let result = `No ${roomType} rooms available!`;

                for (let room in this.rooms) {
                    if (this.rooms[room] > 0){
                        result += ` Available ${room} rooms: ${this.rooms[room]}.`;
                    }
                }
                return result;

            }
    }

    roomService(currentBookingNumber, serviceType) {
        let client = this.bookings.find(b => b.roomNumber === currentBookingNumber);
        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        if (!client.hasOwnProperty('services')) {
            client['services'] = [];
        }

        client['services'].push(serviceType);

        return `Mr./Mrs. ${client.name}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let client = this.bookings.find(b => b.roomNumber === currentBookingNumber);

        if (!client) {
            return `The booking ${currentBookingNumber} is invalid.`;
        } else {
            let totalMoney = this.roomsPricing[client.roomType] * client.nights;
            let totalServiceMoney = 0;
            if (client.hasOwnProperty('services')) {
                for (let i = 0; i < client.services.length; i++) {
                    totalServiceMoney += this.servicesPricing[client.services[i]];
                }
            }
            this.rooms[client.roomType]++;
            let index = this.bookings.indexOf(client);
            this.bookings.splice(index,1);
            if (totalServiceMoney > 0)
                return `We hope you enjoyed your time here, Mr./Mrs. ${client.name}. The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN. You have used additional room services, costing ${totalServiceMoney} BGN.`;

            return`We hope you enjoyed your time here, Mr./Mrs. ${client.name}. The total amount of money you have to pay is ${totalMoney} BGN.`;
        }
    }

    report() {
        let report = [];
        report.push(`${this.name.toUpperCase()} DATABASE:`);
        report.push('--------------------');

        if (this.bookings.length === 0) {
            report.push('There are currently no bookings.');
            return report.join('\n');
        }
        for (let i = 0; i < this.bookings.length; i++) {
            let client = this.bookings[i];
            report.push(`bookingNumber - ${client.roomNumber}`);
            report.push(`clientName - ${client.name}`);
            report.push(`roomType - ${client.roomType}`);
            report.push(`nights - ${client.nights}`);

            if (client.hasOwnProperty('services') && client.services.length) {
                report.push(`services: ${client.services.join(', ')}`);
            }
            report.push(`----------`)
        }
        report.pop();
        return report.join('\n');
    }
}
