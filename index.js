const request = require("request");
const schedule = require("node-schedule");
const http = require("http");

// let server = http.createServer(function (req, res) {

// 在此處理 客戶端向 http server 發送過來的 req。
// res.status(200).send({
//     statusCode: 200,
//     date: moment().format("YYYY-MM-DD HH:mm:ss")
// });
const options = {
    method: "GET",
    url: "https://irs.thsrc.com.tw/IMINT/",
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,zh-CN;q=0.6",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Cookie": "name=value; JSESSIONID=47358850C96F3665F7CC6DFC2260C15D; THSRC-IRS=!tRQNHOaWOO5kGGh4BxL/njEeQCuVtae1Ct8EOVvkuubnaPAQtbcohpbdOhiexyjUL6fEX/KczIN1KA==; _ga=GA1.3.813662125.1571835213; vpadn-ctid=121f7973-5c1d-8e15-b6d0-099a06f79a7d; _fbp=fb.2.1571835212846.1446823173; vpadn-vpid=67cf88af-7bc5-109a-cf5f-d937a6349081; vpadn-ce=1; vpadn-sd=1571835213380; AcceptIRSCookiePolicyTime=Wed%20Oct%2023%202019%2020:53:32%20GMT+0800%20(%E5%8F%B0%E5%8C%97%E6%A8%99%E6%BA%96%E6%99%82%E9%96%93); _gid=GA1.3.1734298404.1572274196; _fbc=fb.2.1572274196381.IwAR1Ey3tUJyuGKTRywOblbsFy7asnOW5vIl2i_cWbFrQ0D19TO6fWOnw5nlE; IRS-SESSION=1572365414; bm_mi=0901763293CB65D8D3D4AAA3CD54265F~lAvFyEM/pV2yhEEmeOzBPkZHT7vlyHU5PZ13d5440Im/ait73RlvCjwz35gY6gAXBHtfCzT9cRbU03Ge8AB6+qc3t0pVh7vPxbND8jVDnMBUKVD2jkOiKC7drvsyADb3+MPsV/i/0+0YBI7bQxCcfHGvYmGgdIhBhkLqCtZvvTzWn2ht1kpde4S5/c7dOWluTj42hefVfusS5zbEPELnMjwk/aIxu85ymMfp9sP3HsvA2YK+qWkzOG4/hoeH5TdI44EJAAzKehhIUUGVqgnmWw==; ak_bmsc=464730D6B4E6E12A9A81406C34905C2DCB45516F262200006664B85D823EA23F~plDroZErJbej3ofryJKP0DZwx8rEcqHUDCkGFbrKnFlnITP+WjkYnwFtuYy5gkrT93g3S7WQqXZEbccQi5k0n1f8bD0XBiYoDD9RRHxUuOybh2iXGfXY939ncgvZOWen612RIU7dm3WH76VJ95NcaD/nDW0WOEK8hi5nPrViJKJaTLJrLIpbXEsfW20HK4X/410SlNmO/ya3gVNi4U3bCb6iqmqj4womUwBMtu8tfCMOEGfqQXz+61Z2jlQG/93vXD; name=value; bm_sv=0645300115D9136815E45E1F8E194EF5~Q1I6faNAPc8nwzMwGtC/QaZ8igAaxeBUOnMo3euHuCSy16RCslo/jACOSs545das+axw7jqG7CkL8rHJu6ZOG8W7udTm5ibGd5BacHTVelN3YMCccj2J+yVf1Qv+hBmmeBG3onHPAAxXDiR4XWC8oZ/+Go9feoDoCNB7LLLaUFA=; _gat_UA-9967381-2=1; _gat_UA-9967381-26=1; vpadn-seid=vp86947895991-15723654803",
        "Host": "irs.thsrc.com.tw",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": 1,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36"
    },
    gzip: true

};
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log("statusCode:", response && response.statusCode);
        console.log(body);
        console.log("我在callback裡面");
    }
    else {
        console.log("錯誤");
    }
}

let rule = new schedule.RecurrenceRule();
rule.second = [0, 15, 30, 45]; // 每隔 10 秒执行一次
function scheduleCronstyle() {
    schedule.scheduleJob(rule, () => {
        request(options, callback);
        console.log("scheduleCronstyle:" + new Date());
    });
}

scheduleCronstyle();



    // console.log("Hello Xanxus");
// });

// server.listen(process.env.PORT || 5000); //3 - 進入此網站的監聽 port, 就是 localhost:xxxx 的 xxxx

// console.log("Node.js web server at port 5000 is running..");
