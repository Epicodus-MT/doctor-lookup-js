<img src="epicodus.png" align="right" />

# README PROJECT SKELETON [![MT](MT-logo.png?raw=true)](https://github.com/sindresorhus/awesome)

> Technologies Used - Javascript, HTML, Shell. IDE used - Atom.

#### By _**Mara Timberlake**_

README with images, screenshots, GIFs, text formatting, etc.

## Description

_The Forest Service is considering a proposal from a timber company to clearcut a nearby forest of Douglas Fir. Before this proposal may be approved, they must complete an environmental impact study. This application was developed to allow Rangers to track wildlife sightings in the area._

## What's included
Within the repository you'll find the following directories and files:

```
TITLE/
├── js/
|    └── object-interface.js
|    └── object.js
├── scss
│    └── stylesheet.scss
├── .gitignore
├── contact-info.md
├── gulpfile.js
├── index.html
├── node-commands.sh
└── README.md
```

## Setup/Installation Requirements
To create the necessary databases:
* _LOCAL: Go to Terminal_
* _Clone this repository:_
```
$ cd ~/Desktop
$ git clone https://github.com/Epicodus-MT/TITLE.git
$ cd TITLE
```
* _Run Postgres with terminal command:_
```
$ postgres
```
* _Open a new tab in terminal by pressing [command ⌘] + [T]_
* _In the new tab, create 'TITLE' database:_
```
$ psql
* `CREATE DATABASE TITLE;`
* `\c TITLE;`
...
```
* _Return to original tab where repository was cloned and run gradle:_
```
$gradle run
```
* _Open browser window:_
```
localhost:4567
```


## Specifications
_App does this..._

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.
