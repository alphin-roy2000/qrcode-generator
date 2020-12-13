const express = require("express");
const app = express();
// const port = 5000;
var PORT = process.env.PORT || 4000;
const bp = require("body-parser");
const qr = require("qrcode");

app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/scan", (req, res) => {
    const url = req.body.url;
 var backgd=req.body.backgd;
 console.log(backgd)
 var lightbg;
 if(backgd=="transparent"){
   lightbg="red"
 }
 else if(backgd="white"){
   lightbg="ffffff"
 }
    async function main(urlinside) {
        const qrCode = await create(
            urlinside,
            'logo.png',
          160,
          50,
          lightbg
        );
    //   console.log(qrCode);
    // console.log("first");
    return qrCode;
    // res.render("scan", { qrCode });
    
      }

if (url.length === 0) res.send("Empty Data!");
callwebqr(url);

    async function callwebqr(url){
        const value = await main(url); 
;
src=value;
                res.render("scan", { src });
    }
});
var http = require('http'), fs = require('fs'), 
Canvas = require('canvas');
app.listen(PORT, () => console.log("Server at 4000"));
const QRCode = require("qrcode");
const { createCanvas, loadImage } = require("canvas");

async function create(dataForQRcode, center_image, width, cwidth,lightbg) {
  const canvas = createCanvas(500,500,'png' );
  QRCode.toCanvas(
    
    canvas,
    dataForQRcode,
    {
      width: 500,
     patternQuality:100,
      errorCorrectionLevel: "H",
      margin: 1,
      color: {
        dark: "#000000",
        light: lightbg,
      },
    }
  );
  // console.log(canvas.toDataURL("image/png"))

  const ctx = canvas.getContext("2d");
  const img = await loadImage('ttt.jpg');

  ctx.patternQuality = 'best';
  ctx.antialias = 'default';
  ctx.filter = 'default';
  const center = (width - cwidth) / 2;
  console.log(canvas.width);
//   ctx.drawImage(img, canvas.width/2-(canvas.width*.25/2), canvas.width/2-(canvas.width*.25/2),    50,50);
  ctx.drawImage(img,canvas.width/2-((canvas.width*1.2/5))/2, canvas.width/2-canvas.width*1.2/10,     (canvas.width*1.2/5),canvas.width*1.2/5);
  return canvas.toDataURL("image/png");
}

