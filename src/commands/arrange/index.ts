import {Command} from '@oclif/core'
import {Seating} from '../../service/seating'

export default class Arrange extends Command {
  static description = 'Generate seat arrangement'

  static examples = [
    `$ arrange [	[3,2],	[4,3],	[2,3],	[3,4]	] 30
    Seat arrangement
    [ 19][ 25][  1] [  2][ 26][ 27][  3] [  4][  5] [  6][ 28][ 20]
    [ 21][ 29][  7] [  8][ 30][ X ][  9] [ 10][ 11] [ 12][ X ][ 22]
                    [ 13][ X ][ X ][ 14] [ 15][ 16] [ 17][ X ][ 23]
                                                    [ 18][ X ][ 24]
`,
  ]

  static args = [
    {name: 'matrix', description: 'Rows and columns to create seats from', required: true},
    {name: 'passengers', description: 'Number of passengers to be given seats', required: true},
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Arrange)
    // this.log(`hello ${args.matrix} from ${args.passengers}!`)
    const seating = new Seating(JSON.parse(args.matrix), args.passengers)
    console.log('Seats are assigned their corresponding label: Isle, Window or Middle \n', seating.seats)
    seating.arrange()
    // const output = seating.seats[0].map((_, colIndex) => seating.seats.map(row => row[colIndex]))
    console.log('Then the seats are assigned: \n\n Left to right \n Top to bottom \n Isle then Window then Middle\n', seating.seats)
  }
}
