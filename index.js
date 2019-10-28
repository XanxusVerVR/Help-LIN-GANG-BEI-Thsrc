const request = require("request");
const options = {
    method: "GET",
    url: "https://irs.thsrc.com.tw/IMINT/",
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7,zh-CN;q=0.6",
        "Cache-Control": "max-age=0",
        "Connection": "keep-alive",
        "Cookie": "name=value; JSESSIONID=D46A1215573E1D0B1FE0A5262C6CA2CF; THSRC-IRS=!tRQNHOaWOO5kGGh4BxL/njEeQCuVtae1Ct8EOVvkuubnaPAQtbcohpbdOhiexyjUL6fEX/KczIN1KA==; _ga=GA1.3.813662125.1571835213; vpadn-ctid=121f7973-5c1d-8e15-b6d0-099a06f79a7d; _fbp=fb.2.1571835212846.1446823173; vpadn-vpid=67cf88af-7bc5-109a-cf5f-d937a6349081; vpadn-ce=1; vpadn-sd=1571835213380; AcceptIRSCookiePolicyTime=Wed%20Oct%2023%202019%2020:53:32%20GMT+0800%20(%E5%8F%B0%E5%8C%97%E6%A8%99%E6%BA%96%E6%99%82%E9%96%93); _gid=GA1.3.1734298404.1572274196; _fbc=fb.2.1572274196381.IwAR1Ey3tUJyuGKTRywOblbsFy7asnOW5vIl2i_cWbFrQ0D19TO6fWOnw5nlE; IRS-SESSION=1572284489; bm_mi=14DB3C0D35AC222DD6939C5A09CBC269~lAvFyEM/pV2yhEEmeOzBPhmxrG0zwofeAJqI/ROCihps8qqaKU4VYDoi+bO8L4XA/2Vz4H9T0iRALxxbND+wElRavPUMIY0fcj0QMqyo6sZ7vXLbaA03ONf5Fb0jMN47VAXw2iGxqcfCyLFL+e+GEt3+FqSCb9/GGc/EKiL+cUZ5rE0KJRAbT9fBGaEKNc8hjI3Pvl2/MxRnZa+T2zevGoPLlu91h+G8TQ6Cv9lSkkmVTdO5NjUGJ1abckprFVYICGXRKbXJi2Gc+/1AD3PWVQ==; ak_bmsc=458D390FD89CE3279E316BAFECF8CAD7CB45516F262200004928B75DA5108A08~plOUzEwz/ZNHrT/ID4siWuo8blRbNA5/cPmVWz02+gcit3inq4HV/8KqII94mqOFs35yQ+QiRtVSaDdn/JFSmxgKeHEmCwg8i38QRwjK0GMBiAJ4qSnfrtyGnZV3ctw3/AJzu4GnuI/Y4riAVBUxjSH1QwcSayovWtIc6+2jkQ/wmXNA4Kt5cqp3TfWo4dHK47+3FLu/dgDU4JKzDiPM2HpU1lPPWNUQeiv7WeMedu0qgEHGyVmG6nwYC/kpQVFT7W; bm_sv=6C29BAEBC055E91F839EEBFE6DB39355~Q1I6faNAPc8nwzMwGtC/QZnynunyIg7mU9ww18cNvuV2D2xopLv1kAKjhgqDwmXcFS/yFBTk3uHr7jwZB2aAzOjGJ53d3yHK4jPlFaLTg3COojFxtJGl2rDIa3BNG3tS7crzIYQSDSDk5cof3N1ZbyoqsqCTOJPbOk8Ue5uOEWM=; vpadn-seid=vp86947895991-15722848208",
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
    }
    else {
        console.log("錯誤");
    }
}
request(options, callback);