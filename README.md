# Conway's Game of Life

A cellular automaton devised by the British mathematician John Horton Conway in 1970.

[Demo here](https://thisiswhale.github.io/Game-of-Life/)

From [Wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life):
> The "game" is a zero-player game, meaning that its evolution is determined by
> its initial state, requiring no further input. One interacts with the Game of
> Life by creating an initial configuration and observing how it evolves.
>
> The universe of the Game of Life is an infinite two-dimensional orthogonal
> grid of square cells, each of which is in one of two possible states, live or
> dead. Every cell interacts with its eight neighbors, which are the cells that
> are directly horizontally, vertically, or diagonally adjacent. At each step in
> time, the following transitions occur:
>
> * Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
> * Any live cell with more than three live neighbours dies, as if by overcrowding.
> * Any live cell with two or three live neighbours lives on to the next generation.
> * Any dead cell with exactly three live neighbours becomes a live cell.
>
> The initial pattern constitutes the seed of the system. The first generation
> is created by applying the above rules simultaneously to every cell in the
> seed?births and deaths happen simultaneously, and the discrete moment at which
> this happens is sometimes called a tick (in other words, each generation is a
> pure function of the one before). The rules continue to be applied repeatedly
> to create further generations.

For more information please see [The Wiki](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
in particular the [Examples](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns)
section gives good seed data and intuition.

<p align="center"><img width="700" height="450" src="https://user-images.githubusercontent.com/16066443/37371593-1cac9532-26cd-11e8-912b-f98352a8c5a7.gif"></p>

### Features
  - 3 Speed Modes
  - 3 Grid Sizes
  - Able to add cells into the grid

#### Built with
  - JavaScript
  - SASS/SCSS
  - Bootstrap with React
  - React.js with ES6
  - Webpack 4 - Babel
  - Node.js
