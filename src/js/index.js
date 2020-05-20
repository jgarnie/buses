console.log('It works!');

class bus{

        constructor(direction, stations, seats, passengers, last_station){

            this.direction = direction;
            this.stations = stations;
            this.seats = seats;
            this.passengers = passengers;
            this.last_station = last_station;

        }

        current(){
            
             return this.stations[this.last_station];

        }
        next(){

            this.last_station += 1;
            console.log(this.last_station);
            console.log(this.stations[this.last_station]);

        }
        board(count){

            const total = count + this.passengers;
            if(this.seats<total){
                const avail = this.seats - this.passengers;
                this.passengers += avail;
                console.log(this.passengers);

            }else{
                
                this.passengers += count;
                console.log(this.passengers);
            }
        }
        onboard(count){
            const total = count + this.passengers;
            if(this.seats<total){
                alert('you dont fit')

        }else{

            this.passengers += count;
            console.log(this.passengers);

        }

    }

}

const bus1 = new bus('Vídeň', ['Praha', 'Jihlava', 'Brno', 'Břeclav', 'Vídeň'], 50, 0, -1);

