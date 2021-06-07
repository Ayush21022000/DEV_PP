const puppeteer = require("puppeteer");
const id = "wihise7081@jmpant.com";
const pw = "esihiw";
// let challenges = require("./challenges");

async function login(){
    let browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo : 200
      });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.instagram.com/accounts/login");
    let sel = await tab.$$('._2hvTZ.pexuQ.zyHYP');
    await sel[0].click();
    await sel[0].type(id);
    await sel[1].click();
    await sel[1].type(pw);
    await tab.click(".sqdOP.L3NKy.y3zKF");
    await tab.waitForTimeout(1000);
    let selec= await tab.$(".TqC_a");
    selec.type("The Wire");
}
login();