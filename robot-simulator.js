//String will be in format of ('x y bearing command')
// x = current position on x axis
// y = current position on y axis
// bearing is direction currently facing (North, East, South or West)
// command is a string of how we want robot to move.  L = left, R = Right, A = Forward

// If bearing is north, R changes bearing to East, L changes bearing to West
// Command is A, if bearing is North then Y axis is +1, if bearing is south, Y axis is -1
// if bearing is East X axis is +1, if bearing is West X axis -1

//split string into a new array.  index 0 = x, 1=y, 2=bearing 3=command
//need to loop through command. 
// require on test sheet needs module.exports to export class.

module.exports = class Robot {
    execute(string) {
        let strArray = string.split(" ");
        this.x = parseInt(strArray[0]),
        this.y = parseInt(strArray[1]),
        this.bearing = strArray[2],
        this.command = strArray[3];
        for (let element of this.command){
            switch(element) {
                case 'R':
                    this.bearing === 'NORTH' ? this.bearing = 'EAST'
                    : this.bearing === 'EAST' ? this.bearing = 'SOUTH'
                    : this.bearing === 'SOUTH' ? this.bearing = 'WEST'
                    : this.bearing = 'NORTH'
                break;
                case 'L':
                    this.bearing === 'NORTH' ? this.bearing = 'WEST'
                    : this.bearing === 'WEST' ? this.bearing = 'SOUTH'
                    : this.bearing === 'SOUTH' ? this.bearing = 'EAST'
                    : this.bearing = 'NORTH'
                break;
                case 'A': 
                    this.bearing === 'EAST' ? this.x++
                    : this.bearing === 'WEST' ? this.x--
                    : this.bearing === 'NORTH' ? this.y++
                    : this.y--
                break;
                default:
                    console.log('command not Valid. only use R, L or A');
            }
        }
      return `${this.x} ${this.y} ${this.bearing}`  
    }
}
