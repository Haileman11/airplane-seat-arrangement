Airplane seat arrangement 
=================

A CLI that generates an airplane seat arrangement

# Usage
<!-- usage -->
```sh-session
$ npm install -g airplane-seat-arrangement
$ arrange COMMAND
running command...
$ ./bin/run arrange (--version)
airplane-seat-arrangement/0.0.0 darwin-x64 node-v14.17.3
$ ./bin/run arrange --help [COMMAND]
USAGE
  $ arrange COMMAND
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
  $ arrange [[3,2],[4,3],[2,3],[3,4]] 30

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

_See code: [dist/commands/arrange/index.ts](https://github.com/Haileman11/airplane-seat-arrangement/blob/v0.0.0/dist/commands/arrange/index.ts)_

