type Cell = string
type Row = Cell []
type Block = Row[]
type Position = number[]
export class Seating {
    isleSeats: Position[];
    windowSeats: Position[];
    middleSeats: Position[];
    seats: Block[];
    passengers: number;
    _currentSeat = 1
    constructor(matrix : number[][], passengers : number) {
      this.isleSeats = []
      this.windowSeats = []
      this.middleSeats = []
      this.seats = this.generateSeatsBFS(matrix)
      this.passengers = passengers
    }

    generateSeatsDFS(_matrix: number[][]): Block[] {
      // create seats based on block column and row numbers
      const seats: Block[] =  Array.from({length: _matrix.length})
      for (const blockSize of _matrix) {
        // create rows
        seats[_matrix.indexOf(blockSize)] = Array.from({length: blockSize[1]}).fill([]) as Block

        const blockIndex = _matrix.indexOf(blockSize)
        // const block = seats[blockIndex]
        for (let row = 0; row < blockSize[1]; row++) {
          const rowSeat: Row = Array.from({length: blockSize[0]}).fill('U') as Row

          for (let col = 0; col < rowSeat.length; col++) {
            if (this.isWindow(blockIndex, seats.length, col, rowSeat.length)) {
              rowSeat[col] = 'W'

              this.windowSeats.push([blockIndex, row, col])
            } else if (this.isIsle(blockIndex, seats.length, col, rowSeat.length)) {
              this.isleSeats.push([blockIndex, row, col])
              rowSeat[col] = 'I'
            } else {
              this.middleSeats.push([blockIndex, row, col])
              rowSeat[col] = 'M'
            }
          }

          seats[_matrix.indexOf(blockSize)][row] = rowSeat
        }
      }

      return seats
    }

    isIsle(blockIndex:number, totalBlocks:number, columnIndex:number, totalColumns:number): boolean {
      if (columnIndex === totalColumns - 1 || columnIndex === 0) {
        return true
      }

      return false
    }

    isWindow(blockIndex: number, totalBlocks: number, columnIndex: number, totalColumns: number): boolean {
      if (blockIndex === 0 && columnIndex === 0) {
        return true
      }

      if (blockIndex === totalBlocks - 1 && columnIndex === totalColumns - 1) {
        return true
      }

      return false
    }

    assignSeats(positions: Position[]): void {
      for (const position of positions) {
        this.seats[position[0]][position[1]][position[2]] = this._currentSeat.toString()
        if (this._currentSeat < this.passengers) {
          this._currentSeat++
        } else {
          return
        }
      }
    }

    arrange(): void {
      this.assignSeats(this.isleSeats)
      this.assignSeats(this.windowSeats)
      this.assignSeats(this.middleSeats)
    }// prints BFS traversal from a given source s

    generateSeatsBFS(_matrix: number[][]):Block[] {
      // Mark all the vertices as not visited(By default
      // set as false)
      const seats: Block[] =  Array.from({length: _matrix.length}) as Block[]
      const maxRows: number = Math.max(..._matrix.map(size => size[1])) || 0
      for (let row = 0; row < maxRows; row++) {
        for (const blockSize of _matrix) {
          const blockIndex = _matrix.indexOf(blockSize)

          if (blockSize[1] <= row) {
            continue
          }

          if (seats[blockIndex] === undefined) {
            seats[blockIndex] = Array.from({length: blockSize[1]}).fill([]) as Block
          }

          const rowSeat: Row = Array.from({length: blockSize[0]}) as Row
          for (let col = 0; col < rowSeat.length; col++) {
            if (this.isWindow(blockIndex, seats.length, col, rowSeat.length)) {
              rowSeat[col] = 'W'
              this.windowSeats.push([blockIndex, row, col])
            } else if (this.isIsle(blockIndex, seats.length, col, rowSeat.length)) {
              this.isleSeats.push([blockIndex, row, col])
              rowSeat[col] = 'I'
            } else {
              this.middleSeats.push([blockIndex, row, col])
              rowSeat[col] = 'M'
            }
          }

          seats[blockIndex][row] = rowSeat
        }
      }

      return seats
    }
}
