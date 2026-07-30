# Etch-a-Sketch

A simple browser-based Etch-a-Sketch app that lets you create a customizable grid and draw by hovering over the squares.

## Overview

This project is a lightweight JavaScript application that generates a square grid based on user input. As you move your mouse over the grid, each square gradually becomes darker, creating a drawing effect similar to an etch-a-sketch toy.

## Key Features

- Create a custom-sized grid by entering a number
- Draw by hovering over the squares
- Reset the grid instantly by entering a new size
- Built with plain HTML, CSS, and JavaScript
- Input validation to prevent oversized grids

## Prerequisites

To run this project, you only need:

- A modern web browser such as Chrome, Edge, or Firefox
- A local web server is optional; opening the HTML file directly also works in most browsers

## Installation

1. Clone or download this repository.
2. Open the project folder.
3. Open [index.html](index.html) in your browser.

Optional: if you prefer a local development server, you can use VS Code Live Server or any similar tool.

## Usage

1. Enter a number in the input field.
2. Click the Submit button.
3. Hover over the grid squares to draw.
4. Enter a new number to clear the existing grid and create a new one.

Example:

- Enter `16` to create a 16x16 grid
- Enter `32` to create a 32x32 grid

## Project Structure

- [index.html](index.html) - Contains the page layout and form
- [style.css](style.css) - Styles the grid and page elements
- [script.js](script.js) - Handles grid generation and hover drawing behavior

## Notes

- The maximum supported grid size is 100 on each side.
- The drawing effect is created by gradually reducing square opacity as you hover over it.
