<img src="epicodus.png" align="right" />

# Doctor Lookup

> **Technologies Used** - Javascript, HTML, BetterDoctor API.
> **IDE Used** - Atom.

#### By _**Mara Timberlake**_

JavaScript app that uses the BetterDoctor API to allow users to search for a doctor that provides services nearby.

## Description

_A website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors nearby who can treat their medical issue._

## What's included
Within the repository you'll find the following directories and files:

```
doctor-lookup-js/
├── js/
|    └── docfinder-interface.js
|    └── docfinder.js
├── scss
│    └── stylesheet.scss
├── .gitignore
├── contact-info.md
├── gulpfile.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Setup/Installation Requirements
To run this program:
* _LOCAL: Go to Terminal_
* _Clone this repository:_
```
$ cd ~/Desktop
$ git clone https://github.com/Epicodus-MT/doctor-lookup-js.git
$ cd doctor-lookup-js
$ npm install
$ bower install
$ touch .env
```
* _Open the .env file and add the following:_
```
exports.apiKey = 'BetterDoctorAPIKey';
```
* _Return to the terminal and run program:_
```
$ gulp build
$ gulp serve
```
* _Browser will open window to:_
```
localhost:3000
```

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

Copyright (c) 2017 *_Mara Timberlake_*
