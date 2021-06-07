const puppeteer = require("puppeteer");
const chalk = require("chalk");
var fs = require("fs");

const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
  try {
    // opens the headless browser
    var browser = await puppeteer.launch({ headless: false });
    // open a new page
    var page = await browser.newPage();
    // enters the  url in page
  await page.goto(`https://store.steampowered.com`);

      var games = await page.evaluate(() => {
      var titleNodeList = document.querySelectorAll(`div.tab_item_name`);
      var priceList = document.querySelectorAll('div.discount_final_price');
      var genreList = document.querySelectorAll('span.top_tag');
     // var ageList = document.querySelectorAll(`span.age`);
     // var scoreList = document.querySelectorAll(`span.score`);
      var titleLinkArray = [];
      for (var i = 0; i < titleNodeList.length; i++) {
        titleLinkArray[i] = {
          title: titleNodeList[i].innerText.trim(),
          // link: titleNodeList[i].getAttribute("href"),
          price: priceList[i].innerText.trim(),
          genre: genreList[i].innerText.trim()
       //  score: scoreList[i].innerText.trim()
        };
      }
      return titleLinkArray;
    });
    // console.log(news);
    await browser.close();
    // Writing the news inside a json file
    fs.writeFile("steam.json", JSON.stringify(games), function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
    console.log(success("Browser Closed"));
  } catch (err) {
    // Catch and display errors
    console.log(error(err));
    await browser.close();
    console.log(error("Browser Closed"));
  }
  // whatsapp(browser);
})();
var nodemailer = require('nodemailer');
const { Stream } = require("stream");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guyfromg@gmail.com',
    pass: 'Saluchan@123'
  }
});

var mailOptions = {
  from: 'guyfromg@gmail.com',
  to: 'sushant.beriwal@pepcoding.com, garg4476@gmail.com',
  subject: 'Sending Game List Using Using Automation',
  html: `<h1>Hi Fellow Gamer This Is The List Of All The Games That Are Available On the Steam Empowered Game Buying Site</h1>`
  ,attachments:[
    {filename: 'steam.json', path: './steam.json' }
  ]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  // async function whatsapp(browser) {
  //   try {
  //     let page = await browser.newPage();
  //     await delay(1000);
  //     await page.goto('https://web.whatsapp.com/');
  //     await delay(10000);
  //     await page.waitForSelector('._2_1wd.copyable-text.selectable-text', {
  //       visible: true,
  //     });
  //     await page.type('._2_1wd.copyable-text.selectable-text', 'Krishvi Gtb');
  //     await page.keyboard.press('Enter');
  //     await page.waitForSelector('._1JAUF._2x4bz .OTBsx', { visible: true });
  //     let newMessage = 'Price dropped. Buy now soon';
  //     await page.type(
  //       '._1JAUF._2x4bz ._2_1wd.copyable-text.selectable-text',
  //       newMessage
  //     );
  //     await page.keyboard.press('Enter');
  //   } catch (error) {
  //     console.log(error);

  //   }
  //   // await whatsapp(browser);
  // }
});
