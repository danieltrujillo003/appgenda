# APPGENDA

This is the fron-end part of a mobile app for appointments management.

## Back-end

The backend of this app is made with two different alternatives and either of them can be used to run the app indistinctly:

- Node API: [api-node-m2](https://github.com/Maomontoya/api-node-m2.git)
- PHP API: [appgenda-api-slim](https://github.com/danieltrujillo003/appgenda-api-slim.git)

Instructions to run the APIs are well explained in each README.

## Front-end

To run the front-end of the app, clone this repository and run `npm i`

You need to make sure you have `expo` and `expo-cli` packages installed _globally_ in your machine before the Appgenda app can run.

The endpoints of the desired API to use need to be set in the screens: `create.js`, `edit.js`, `list.js` and `card.js` for DELETE.

## App

Once yo have everything installed and the backend running, just run `npm start` in the root of this project and expo will be launched. You choose wether to run it on browser, device emulator or real device through the QR code, but remember that alerts are not supported on web browser.

A video with explanation of the app flow and how to change the endpoints can be found [here](https://drive.google.com/file/d/1eII_1Bgt54m3kzXf2Xb4QqhOXCk48fOg/view?usp=sharing).

## Credits

- Daniel Cadavid Zuleta ([github](https://github.com/dcadavidzuleta/))
- Ana María Mendoza Pacheco ([github](https://github.com/lutolita/))
- Mauricio Montoya Valderrama ([github](https://github.com/Maomontoya/))
- Daniel Trujillo Sierra ([github](https://github.com/danieltrujillo003/))

