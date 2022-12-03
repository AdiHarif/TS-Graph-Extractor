# Typescript Analyzer

## Install

```
npm install
```

## Build & Run

Build the project into the *build* directory.

If a sample argument is given, run it on this sample.

A graph file corresponding to the sample is written to the *output* directory.

```
Usage: npm run start -- [options]

options:
    -n | --no-build
        Skip build stage
    -i | --input INPUT
        Run the analyzer on input file named <INPUT> (default: do not run anything)
    -s | --sample SAMPLE
        Run the analyzer on sample with index <SAMPLE> (default: do not run anything)
    -o | --output OUTPUT
        Save the graph inside file named <OUTPUT> (default: graph.txt)
    -v | --verbose
        Print logs and output results
    -c | --clean
        Before building, remove build and output directories
    -h | --help
        Show this help message and exit
```

* Samples can be found in *tests/samples* directory.
* In order to see the visual graph, insert the output graph file into this site: [Graph Visualizer](https://dreampuf.github.io/GraphvizOnline/)

For example, running:

```
npm run start -- --sample 2 --verbose
```

will build the project, run it on the second sample in the samples directory and eventually print the graph.

## Test

Build the project and run each of the samples in the *tests/samples* directory. Then compare each of the output graphs to its matching golden graph, which are located in the *tests/goldens* directory.

```
npm run test
```

## TODO

* [ ] Support recursive and complex if statements
* [ ] Support while statements
* [x] Support function declarations
* [x] Support function calls
* [x] Symbol table upgrade
* [ ] Pushing and poping symbol table scopes at each block
* [x] Each ReturnVertex should save a reference to its matching function start vertex
* [ ] Init property in symbol table's entry is incorrect
* [ ] typedef for nodeId