const puppy=require("puppeteer");
const url="https://www.youtube.com/watch?v=tvRRxEVBKqk&list=RDtvRRxEVBKqk&start_radio=1"; //change your url here and enjoy your download

async function main(){
    let browser=await puppy.launch({
        headless:false,
        defaultViewport:false
    });
    let tabs=await browser.pages();
    let tab=tabs[0];
    let newUrl= url.replace(".youtube",".ssyoutube");
    await tab.goto(newUrl);
    await tab.waitForSelector(".link.link-download.subname.ga_track_events.download-icon",{visible:true});
    await tab.click(".link.link-download.subname.ga_track_events.download-icon")
    
}
main();