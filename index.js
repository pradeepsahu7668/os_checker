const fs = require("fs");
var http = require('http');
const express = require('express')
const address = require('address');
const dt = require('./date');
const os = require("os");
var resolution = require("screen-resolution");
const sha = require('sha256');
const screen = require('./screen');
const app = express()

const port = 3000

app.get('/', (req, res) =>{
    res.send(getHash+ " <br>" + postHash);
})

// console.log();
// Os Arch 
const osArc = (os.arch());
//platform
const osPlatform = (os.platform());
const getosPlatform = osPlatform.toString();

//OS
const myos = (os.type());
const getOs = myos.toString();
console.log(getOs);
// version 
const myosversion = (os.version());
const myOsVer = myosversion.toString();
// ip 
const myip = address.ip();
const getip = myip.toString();
// console.log(a);


// screen resolution
// time zone 
const getdate = Intl.DateTimeFormat().resolvedOptions().timeZone 
console.log(getdate);

const getHash = getOs.concat(" " + myOsVer + " " + getosPlatform + " " + getip + " " + getdate  )
// const getHash = getOs.concat(" " + myOsVer + " " + getosPlatform +  " " + getdate  )
console.log(getHash);

// const postHash = sha(getHash); 
const postHash = sha(getHash);
console.log(postHash);
// const allData = data();

app.listen(port, () => console.log(`app listening on ${port} !`))