Airplane seat arrangement 
=================

A CLI that generates an airplane seat arrangement

The algorithm used is breadth first search for generating the seats and depth first search for assigning the seats to a passenger.

The generating part of the program has a time complexity of O(n) because the it is iterated only once for every seat and space complexity of O(n^2) where n is the number of seats created by the input matrix. This is because the generateSeats method assigns at least two variables for every iteration: the seat array and one of the seat types. 

The assigning part of the program has a time complexity of O(n) and because it is traversed only once for assiging the seats an index. The space complexity is O(1) since the same variable is used to reassign the seats.

Therefore the total time complexity is O(n^2) and space complexity is O(n^2)
# Usage
<!-- usage -->
After pulling the code in the root folder
```sh-session
$ npm install -g airplane-seat-arrangement
$ /bin/run arrange [[3,2],[4,3],[2,3],[3,4]] 30
running command...
$ ./bin/run arrange (--version)
airplane-seat-arrangement/0.0.0 darwin-x64 node-v14.17.3
$ ./bin/run arrange --help [COMMAND]
USAGE
  $ /bin/run arrange [[3,2],[4,3],[2,3],[3,4]] 30
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`arrange <block-matrix> <passengers> `]
* [`arrange help`](#arrange-help-command)


Say hello

```
USAGE
  $ arrange matrix passengers

ARGUMENTS
  matrix  Size of the blocks
  passengers Number of passengers that are to be given seats

DESCRIPTION
  Generate the seat arrangement based on the specified block size and number of passengers

EXAMPLES
  $ arrange [[3,2],[4,3],[2,3],[3,4]] 30

    [ 19][ 25][  1] [  2][ 26][ 27][  3] [  4][  5] [  6][ 28][ 20]
    [ 21][ 29][  7] [  8][ 30][ X ][  9] [ 10][ 11] [ 12][ X ][ 22]
                    [ 13][ X ][ X ][ 14] [ 15][ 16] [ 17][ X ][ 23]
                                                    [ 18][ X ][ 24]
```

_See code: [dist/commands/arrange/index.ts](https://github.com/Haileman11/airplane-seat-arrangement/src/commands/arrange/index.ts)_

