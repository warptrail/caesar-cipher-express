# Caesar Cipher API

This is a simple Express.js API with two endpoints.
`/encrypt` & `/decrypt`
The two endpoints require the same queries. `text` & `shift`
Example: `http://localhost:8000/cipher?text=hello&shift=3`

The program will shift the character codes of each letter specified in the shift. The shift parameter must be a number between 0 and 26.

## Installation

1. Download or clone this git repository
2. In the root directory, run the terminal command: `npm install`
3. To start the server run: `npm start` or to use nodemon run: `npm run dev`

## Happy Coding

Created by **warptrail** as a drill from the **Thinkful** bootcamp. All credit goes to them, I'm just recreating my own version here as a standalone api.

> Written with [StackEdit](https://stackedit.io/).
