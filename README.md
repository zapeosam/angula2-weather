Quick Angular 2 Weather app example
==================

This app shows the weather for a specific location using https://darksky.net/ API

The datra is refreshed every 30 minutes.


Prerequisites
-------------

- NodeJS and npm must be installed
- register to https://darksky.net/ and get the API key

Instalation
-------------

- clone this repository 
- run `npm install` in the project folder

Configuration
-------------

In the file `app/wather/weather.service.ts` change the `APPID` to the API key provided by https://darksky.net/

Test
---- 

in your terminal go to your project folder
in terminal run command `npm start` 

in your browser go to address

`http://localhost:3000`

Notes
=========

Keep in mind that i'm still learning angular 2 so there may be better ways to do stuff

Code cleanup
-------------

Code need cleanup 

- hardcoded vars and constants should be moved to separate config file
- the method for determining if the dog should be taken for a walk should be in a separate component
- ...

App also needs better design
