//Author: Alexander Brehov 
//All copyright reserved


country_json = "";
arr = [
  "AX",
  "AL",
  "AD",
  "AT",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "EU",
  "FO",
  "FI",
  "FR",
  "DE",
  "GI",
  "GR",
  "GG",
  "VA",
  "HU",
  "IS",
  "IE",
  "IM",
  "IT",
  "JE",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SJ",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
];
arr1 = arr;

arr = [
  "AF",
  "AM",
  "AZ",
  "BD",
  "BT",
  "IO",
  "BN",
  "KH",
  "CN",
  "GE",
  "HK",
  "IN",
  "ID",
  "JP",
  "KZ",
  "KP",
  "KR",
  "KG",
  "LA",
  "MO",
  "MY",
  "MV",
  "MN",
  "MM",
  "NP",
  "PK",
  "PH",
  "SG",
  "LK",
  "TW",
  "TJ",
  "TH",
  "TL",
  "TM",
  "UZ",
  "VN",
];
arr2 = arr;

arr = [
  "DZ",
  "AO",
  "BJ",
  "BW",
  "BF",
  "BI",
  "CV",
  "CM",
  "CF",
  "TD",
  "KM",
  "CD",
  "CG",
  "CI",
  "DJ",
  "EG",
  "GQ",
  "ER",
  "ET",
  "GA",
  "GM",
  "GH",
  "GN",
  "GW",
  "KE",
  "LS",
  "LR",
  "LY",
  "MG",
  "MW",
  "ML",
  "MR",
  "MU",
  "YT",
  "MA",
  "MZ",
  "NA",
  "NE",
  "NG",
  "RE",
  "RW",
  "SH",
  "ST",
  "SN",
  "SC",
  "SL",
  "SO",
  "ZA",
  "SS",
  "SD",
  "SZ",
  "TZ",
  "TG",
  "TN",
  "UG",
  "EH",
  "ZM",
  "ZW",
];
arr3 = arr;

arr = [
  "AS",
  "AU",
  "CX",
  "CC",
  "CK",
  "FJ",
  "PF",
  "GU",
  "KI",
  "MH",
  "FM",
  "NR",
  "NC",
  "NZ",
  "NU",
  "NF",
  "MP",
  "PW",
  "PG",
  "PN",
  "WS",
  "SB",
  "TK",
  "TO",
  "TV",
  "UM",
  "VU",
  "WF",
];
arr4 = arr;

arr = [
  "AR",
  "BO",
  "BR",
  "CL",
  "CO",
  "EC",
  "FK",
  "GF",
  "GY",
  "PY",
  "PE",
  "SR",
  "UY",
  "VE",
];
arr5 = arr;
arr = ["BZ", "CR", "SV", "GT", "HN", "MX", "NI", "PA"];
arr6 = arr;

arr = ["BM", "CA", "GL", "PM", "US"];
arr7 = arr;

let randomColor = () => {
  let colorArr = [];
  for (var i = 0; i < 3; i++) {
    colorArr.push(Math.round(Math.random() * 256));
  }
  return `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
};
function Weather(temp, humid, cloud, wind) {
  temp = temp + "'C";
  humid = humid + "hPa";
  cloud = cloud + "%";
}
function newcity() {
  let card = document.getElementById("butt").parentElement;
  const but = document.getElementById("butt");
  but.remove();

  let label = document.createElement("label");
  label.setAttribute("for", "cityy");
  let h4 = document.createElement("h4");
  h4.textContent = "City";
  label.appendChild(h4);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "city");
  input.setAttribute("id", "cityy");

  let label2 = document.createElement("label");
  label.setAttribute("for", "countryy");
  let h42 = document.createElement("h4");
  h42.textContent = "Country";
  label2.appendChild(h42);

  let ull = document.createElement("ul");
  ull.setAttribute("id", "ul");

  let input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("name", "country");
  input2.setAttribute("id", "countryy");
  input2.setAttribute("onkeyup", "filter()");
  let br = document.createElement("br");

  let button = document.createElement("button");
  button.setAttribute("onclick", "getweather()");
  button.setAttribute("class", "btn btn-warning");
  button.textContent = "Get";

  card.appendChild(label2);
  card.appendChild(input2);
  card.appendChild(ull);

  card.appendChild(label);
  card.appendChild(input);
  card.appendChild(br);
  card.appendChild(button);
  getcountry("https://api.first.org/data/v1/countries?region=europe", arr1);
  getcountry("https://api.first.org/data/v1/countries?region=asia", arr2);
  getcountry("https://api.first.org/data/v1/countries?region=africa", arr3);
  getcountry("https://api.first.org/data/v1/countries?region=oceania", arr4);
  getcountry(
    "https://api.first.org/data/v1/countries?region=South%20america",
    arr5
  );
  getcountry(
    "https://api.first.org/data/v1/countries?region=central%20america",
    arr6
  );
  getcountry(
    "https://api.first.org/data/v1/countries?region=north%20america",
    arr7
  );
}
function windd(wind) {
  winddeg = "Wind direction:";
  if (wind.deg === 0 || wind.deg === 360) {
    winddeg += "North";
  }
  if (wind.deg > 0 && wind.deg < 90) {
    winddeg += "North-East";
  }
  if (wind.deg === 90) {
    winddeg += "East";
  }
  if (wind.deg > 90 && wind.deg < 180) {
    winddeg += "South-East";
  }
  if (wind.deg === 180) {
    winddeg += "South";
  }
  if (wind.deg > 180 && wind.deg < 270) {
    winddeg += "South-West";
  }
  if (wind.deg === 270) {
    winddeg += "West";
  }
  if (wind.deg > 270 && wind.deg < 360) {
    winddeg += "North-West";
  }
  return winddeg;
}
function makecard(a) {
  a.setAttribute("class", "card align-items-left");

  let cardbody = document.createElement("div");
  cardbody.setAttribute("class", "card-body");
  a.appendChild(cardbody);

  let divones = document.createElement("div");
  divones.setAttribute("class", "row justify-content-md-center");
  cardbody.appendChild(divones);

  let divweather = document.createElement("div");
  divweather.setAttribute("id", "weather");
  divweather.setAttribute("class", "col wea");
  divones.appendChild(divweather);

  let h5 = document.createElement("h5");
  h5.setAttribute("class", "param card-title");
  h5.textContent = "-- 'C";
  divweather.appendChild(h5);

  let h6 = document.createElement("h6");
  h6.setAttribute("class", "param card-title");
  h6.textContent = "-- hPa";
  divweather.appendChild(h6);

  let h61 = document.createElement("h6");
  h61.setAttribute("class", "param card-title");
  h61.textContent = "Wind derection: --";
  divweather.appendChild(h61);

  let h62 = document.createElement("h6");
  h62.setAttribute("class", "param card-title");
  h62.textContent = "Updated: --";
  divweather.appendChild(h62);

  let buttonnew = document.createElement("button");
  buttonnew.setAttribute(
    "onclick",
    'renew(document.querySelector("body > div > div.row.justify-content-md-center.align-items-center > div:nth-child(1) > div"))'
  );
  buttonnew.textContent = "return";
  buttonnew.setAttribute("class", "btn btn-light");
  divweather.appendChild(buttonnew);

  let divweatherimg = document.createElement("div");
  divweatherimg.setAttribute("id", "weather-img");
  divweatherimg.setAttribute("class", "col");
  divones.appendChild(divweatherimg);
}
function renew2(a) {
  let params = document.getElementsByClassName("params");
  let ii = document.getElementById("weathers-img");
  ii.innerHTML = "";
  params[0].textContent = "-- 'C";
  params[1].textContent = "-- hPa";
  params[2].textContent = "Wind derection: --";
  myjson = "";
}

function renew(a) {
  renew2(
    document.querySelector(
      "body > div > div.row.justify-content-md-center.align-items-center > div:nth-child(2) > div"
    )
  );
  a.innerHTML = "";
  a.setAttribute("class", "card align-items-left text-center");
  let b = document.createElement("button");
  b.setAttribute("id", "butt");
  b.setAttribute("onclick", "newcity()");
  b.setAttribute("class", "btn btn-light");
  b.textContent = "Add city";
  a.appendChild(b);
}
function getweather() {
  let a = document.querySelector(
    "body > div > div.row.justify-content-md-center.align-items-center > div:nth-child(1) > div"
  );
  const citi = document.getElementById("cityy").value;
  const countri = document
    .getElementById("countryy")
    .value.substr(document.getElementById("countryy").value.length - 2);
  a.innerHTML = "";
  makecard(a);
  if (citi.length > 0 && countri.length > 0 && countri.length < 4) {
    let data = null;

    // (1)
    let XHR =
      "onload" in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest;

    let req = new XHR();

    // (2) запрос на другой домен :)
    req.open(
      "GET",
      `https://community-open-weather-map.p.rapidapi.com/weather?q=${citi}%2C${countri}`,
      true
    );
    //  req.open("GET", `https://community-open-weather-map.p.rapidapi.com/forecast?q=${citi}%2C${countri}`, true);
    req.setRequestHeader(
      "x-rapidapi-key",
      "28740f7a90msh551afdae463f527p150c58jsn09e50644d47c"
    );
    req.setRequestHeader(
      "x-rapidapi-host",
      "community-open-weather-map.p.rapidapi.com"
    );
    myjson = getDays(citi);
    //getJSON()
    req.onload = function () {
      let data = null;
      if (req.status != 200) {
        data = "Error";
      } else {
        data = this.responseText;
        data = JSON.parse(data);
        console.log(data);
        const temp = Math.round(data.main.temp - 270);
        const pres = data.main.pressure;
        const wind = data.wind;
        //console.log(temp,pres)

        d = new Date();
        Images(
          data.weather[0].icon,
          "weather-img",
          data.weather[0].description
        );

        let paramArr = document.getElementsByClassName("param");

        //var SRC=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        paramArr[0].textContent = temp + "'C";
        paramArr[0].setAttribute("style", `color: ${randomColor()}`);
        paramArr[1].textContent = pres + "hPa";
        paramArr[1].setAttribute("style", `color: ${randomColor()}`);
        Hour = d.getHours();
        Minutes = d.getMinutes();
        Seconds = d.getSeconds();
        switch (Minutes) {
          case 0:
            Minutes = "0" + Minutes;
            break;
          case 1:
            Minutes = "0" + Minutes;
            break;
          case 2:
            Minutes = "0" + Minutes;
            break;
          case 3:
            Minutes = "0" + Minutes;
            break;
          case 4:
            Minutes = "0" + Minutes;
            break;
          case 5:
            Minutes = "0" + Minutes;
            break;
          case 6:
            Minutes = "0" + Minutes;
            break;
          case 7:
            Minutes = "0" + Minutes;
            break;
          case 8:
            Minutes = "0" + Minutes;
            break;
          case 9:
            Minutes = "0" + Minutes;
            break;
        }
        switch (Seconds) {
          case 0:
            Seconds = "0" + Seconds;
            break;
          case 1:
            Seconds = "0" + Seconds;
            break;
          case 2:
            Seconds = "0" + Seconds;
            break;
          case 3:
            Seconds = "0" + Seconds;
            break;
          case 4:
            Seconds = "0" + Seconds;
            break;
          case 5:
            Seconds = "0" + Seconds;
            break;
          case 6:
            Seconds = "0" + Seconds;
            break;
          case 7:
            Seconds = "0" + Seconds;
            break;
          case 8:
            Seconds = "0" + Seconds;
            break;
          case 9:
            Seconds = "0" + Seconds;
            break;
        }
        Month = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];
        paramArr[3].textContent =
          "Updated: " +
          d.getFullYear() +
          "-" +
          Month[d.getMonth()] +
          "-" +
          d.getDate() +
          "\n" +
          "||" +
          Hour +
          ":" +
          Minutes +
          ":" +
          Seconds;
        paramArr[3].setAttribute("style", `color: ${randomColor()}`);

        paramArr[2].textContent = windd(wind);
        paramArr[2].setAttribute("style", `color: ${randomColor()}`);
      }
    };

    req.onerror = function () {
      console.log("Ошибка " + this.status);
    };

    req.send();
  } else {
    alert("Error of city's or country's name");
  }
}
function Images(code, elem, desc) {
  let weatherimg = document.getElementById(elem);

  if (code == "01d" || code == "01n") {
    let descreption = document.createElement("div");
    descreption.setAttribute("class", "forecast");
    let w = document.createElement("div");
    w.setAttribute("class", "forecast__sunny");
    let labell = document.createElement("div");
    labell.setAttribute("class", "forecast__label");
    labell.textContent = "It's " + desc;
    weatherimg.innerHTML = "";
    weatherimg.appendChild(descreption);
    descreption.appendChild(w);
    descreption.appendChild(labell);
  } else if (
    code == "02d" ||
    code == "02n" ||
    code == "03d" ||
    code == "03n" ||
    code == "04d" ||
    code == "04n"
  ) {
    weatherimg.innerHTML = "";
    let descreption = document.createElement("div");
    descreption.setAttribute("class", "forecast");

    let w = document.createElement("div");
    w.setAttribute("class", "forecast__cloudy");
    cloudysun = document.createElement("div");
    cloudysun.setAttribute("class", "forecast__cloudy__sun");
    cloudycloudsmall = document.createElement("div");
    cloudycloudsmall.setAttribute(
      "class",
      "forecast__cloudy__cloud forecast__cloudy__cloud--small"
    );
    cloudycloudnormal = document.createElement("div");
    cloudycloudnormal.setAttribute(
      "class",
      "forecast__cloudy__cloud forecast__cloudy__cloud--normal"
    );
    let labell = document.createElement("div");
    labell.setAttribute("class", "forecast__label");
    labell.textContent = "It's " + desc;

    weatherimg.appendChild(descreption);
    descreption.appendChild(w);
    descreption.appendChild(labell);
    w.appendChild(cloudysun);
    w.appendChild(cloudycloudsmall);
    w.appendChild(cloudycloudnormal);
  } else if (code == "10d" || code == "9d" || code == "10n" || code == "9n") {
    weatherimg.innerHTML = "";
    let descreption = document.createElement("div");
    descreption.setAttribute("class", "forecast");
    weatherimg.appendChild(descreption);

    let fr = document.createElement("div");
    fr.setAttribute("class", "forecast__rainy");
    descreption.appendChild(fr);

    let frone = document.createElement("div");
    let frtwo = document.createElement("div");
    let frthree = document.createElement("div");
    let frfour = document.createElement("div");
    let frcg = document.createElement("div");
    frone.setAttribute(
      "class",
      "forecast__rainy__rain forecast__rainy__rain--one"
    );
    frtwo.setAttribute(
      "class",
      "forecast__rainy__rain forecast__rainy__rain--two"
    );
    frthree.setAttribute(
      "class",
      "forecast__rainy__rain forecast__rainy__rain--three"
    );
    frfour.setAttribute(
      "class",
      "forecast__rainy__rain forecast__rainy__rain--four"
    );
    frcg.setAttribute(
      "class",
      "forecast__rainy__cloud forecast__rainy__cloud--grey"
    );
    fr.appendChild(frone);
    fr.appendChild(frtwo);
    fr.appendChild(frthree);
    fr.appendChild(frfour);
    fr.appendChild(frcg);

    fl = document.createElement("div");
    fl.setAttribute("class", "forecast__label");
    fl.textContent = "It's " + desc;
    descreption.appendChild(fl);
  } else if (code == "13d" || code == "13n") {
    weatherimg.innerHTML = "";
    let forecast = document.createElement("div");
    forecast.setAttribute("class", "forecast");
    weatherimg.appendChild(forecast);

    let fs = document.createElement("div");
    fs.setAttribute("class", "forecast__snow");
    forecast.appendChild(fs);

    let fsone = document.createElement("div");
    let fstwo = document.createElement("div");
    let fsthree = document.createElement("div");
    let fsfour = document.createElement("div");
    let fsc = document.createElement("div");
    fsone.setAttribute(
      "class",
      "forecast__snow__snow forecast__snow__snow--first"
    );
    fstwo.setAttribute(
      "class",
      "forecast__snow__snow forecast__snow__snow--second"
    );
    fsthree.setAttribute(
      "class",
      "forecast__snow__snow forecast__snow__snow--third"
    );
    fsfour.setAttribute(
      "class",
      "forecast__snow__snow forecast__snow__snow--fourth"
    );
    fsc.setAttribute(
      "class",
      "forecast__snow__cloud forecast__snow__cloud--grey"
    );
    fs.appendChild(fsone);
    fs.appendChild(fstwo);
    fs.appendChild(fsthree);
    fs.appendChild(fsfour);
    fs.appendChild(fsc);

    fl = document.createElement("div");
    fl.setAttribute("class", "forecast__label");
    fl.textContent = "It's " + desc;
    forecast.appendChild(fl);
  } else {
    var img = new Image();
    img.src = `scripts/images/${code}.png`;

    let descreption = document.createElement("h4");
    descreption.textContent = "It's " + desc;

    weatherimg.innerHTML = "";
    weatherimg.appendChild(img);
    weatherimg.appendChild(descreption);
  }
}
async function getDays(city) {
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/forecast",
    params: { q: city },
    headers: {
      "x-rapidapi-key": "28740f7a90msh551afdae463f527p150c58jsn09e50644d47c",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  window.myjson = await axios.request(options);
  getJSON();
}
function getJSON() {
  let h4out = document.getElementById("sliderout");
  i = 0;
  let reg = /^(\d{4})-(\d{2})-(\d*)\s(.*)/gm;
  let date = reg.exec(h4out.textContent);

  let d = new Date(date[1], date[2], date[3]);
  dat = date[1] + "-" + date[2] + "-" + date[3] + " " + date[4];
  h4out.textContent = dat;

  reg = /^(\d{4})-(\d{2})-(\d*)\s(.*)/gm;
  date = reg.exec(h4out.textContent);
  let year = date[1];
  let mon = date[2];
  let day = date[3];
  let times = date[4];
  if (day.length < 2) {
    day = "0" + day;
  }
  console.log(day, mon, year, times);
  date = year + "-" + mon + "-" + day + " " + times;
  h4out.textContent = date;
  while (window.myjson.data.list[i].dt_txt != date) {
    //console.log(window.myjson.data.list[i])
    i = i + 1;
  }
  let temp = Math.round(window.myjson.data.list[i].main.temp - 270);
  let pres = window.myjson.data.list[i].main.pressure;
  Images(
    window.myjson.data.list[i].weather[0].icon,
    "weathers-img",
    window.myjson.data.list[i].weather[0].description
  );

  let paramArr = document.getElementsByClassName("params");

  //var SRC=`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  paramArr[0].textContent = temp + "'C";
  paramArr[0].setAttribute("style", `color: ${randomColor()}`);
  paramArr[1].textContent = pres + "hPa";
  paramArr[1].setAttribute("style", `color: ${randomColor()}`);
  paramArr[2].textContent = windd(window.myjson.data.list[i].wind);
  paramArr[2].setAttribute("style", `color: ${randomColor()}`);
}

document.addEventListener("DOMContentLoaded", () => {
  d = new Date();
  Month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let dayy = d.getDate() + 1;
  if (dayy.toString().length < 2) {
    dayy = "0" + dayy;
  }
  let time =
    d.getFullYear() + "-" + Month[d.getMonth()] + "-" + dayy + " 00:00:00";
  let slider = document.getElementById("sl");
  let h4out = document.getElementById("sliderout");
  h4out.innerHTML = time;
  let str = h4out.textContent
    p = new Date(
      parseInt(str[0]+str[1]+str[2]+str[3]),
      parseInt(str[5]+str[6])-1,
      parseInt(str[8]+str[9])
    )
    h4out.textContent=p.getFullYear() + '-' + Month[p.getMonth()] + '-' + p.getDate() +' ' + time[11] + time[12] + ':' + time[14] + time[15] + ':' + time[17] + time[18]
    
  slider.oninput = function () {
    Month = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let m9 = slider.value * 3 - 3;
    switch (m9) {
      case 0:
        m9 = "0" + m9;
        break;
      case 1:
        m9 = "0" + m9;
        break;
      case 2:
        m9 = "0" + m9;
        break;
      case 3:
        m9 = "0" + m9;
        break;
      case 4:
        m9 = "0" + m9;
        break;
      case 5:
        m9 = "0" + m9;
        break;
      case 6:
        m9 = "0" + m9;
        break;
      case 7:
        m9 = "0" + m9;
        break;
      case 8:
        m9 = "0" + m9;
        break;
      case 9:
        m9 = "0" + m9;
        break;
    }
    let m18 = slider.value * 3 - 3 - 24 - 3;
    let m = slider.value * 3 - 48 - 9;
    let getdate = d.getDate();
    if (this.value <= 9) {
      if (this.value == 1 || this.value == 9) {
        time =
          d.getFullYear() +
          "-" +
          Month[d.getMonth()] +
          "-" +
          (getdate + 1) +
          " 00:00:00";
      } else {
        switch (m9) {
          case 0:
            m9 = "0" + m9;
            break;
          case 1:
            m9 = "0" + m9;
            break;
          case 2:
            m9 = "0" + m9;
            break;
          case 3:
            m9 = "0" + m9;
            break;
          case 4:
            m9 = "0" + m9;
            break;
          case 5:
            m9 = "0" + m9;
            break;
          case 6:
            m9 = "0" + m9;
            break;
          case 7:
            m9 = "0" + m9;
            break;
          case 8:
            m9 = "0" + m9;
            break;
          case 9:
            m9 = "0" + m9;
            break;
        }
        time =
          d.getFullYear() +
          "-" +
          Month[d.getMonth()] +
          "-" +
          (getdate + 1) +
          " " +
          m9 +
          ":00:00";
      }
    } else if (this.value >= 10 && this.value <= 18) {
      if (sl.value == "10" || sl.value == "18") {
        time =
          d.getFullYear() +
          "-" +
          Month[d.getMonth()] +
          "-" +
          (getdate + 2) +
          " 00:00:00";
      } else {
        switch (m18) {
          case 0:
            m18 = "0" + m18;
            break;
          case 1:
            m18 = "0" + m18;
            break;
          case 2:
            m18 = "0" + m18;
            break;
          case 3:
            m18 = "0" + m18;
            break;
          case 4:
            m18 = "0" + m18;
            break;
          case 5:
            m18 = "0" + m18;
            break;
          case 6:
            m18 = "0" + m18;
            break;
          case 7:
            m18 = "0" + m18;
            break;
          case 8:
            m18 = "0" + m18;
            break;
          case 9:
            m18 = "0" + m18;
            break;
        }
        time =
          d.getFullYear() +
          "-" +
          Month[d.getMonth()] +
          "-" +
          (getdate + 2) +
          " " +
          m18 +
          ":00:00";
      }
    } else if (this.value == 27) {
      time =
        d.getFullYear() +
        "-" +
        Month[d.getMonth()] +
        "-" +
        (getdate + 3) +
        " 00:00:00";
    } else if (this.value >= 19 && this.value <= 26) {
      switch (m) {
        case 0:
          m = "0" + m;
          break;
        case 1:
          m = "0" + m;
          break;
        case 2:
          m = "0" + m;
          break;
        case 3:
          m = "0" + m;
          break;
        case 4:
          m = "0" + m;
          break;
        case 5:
          m = "0" + m;
          break;
        case 6:
          m = "0" + m;
          break;
        case 7:
          m = "0" + m;
          break;
        case 8:
          m = "0" + m;
          break;
        case 9:
          m = "0" + m;
          break;
      }
      time =
        d.getFullYear() +
        "-" +
        Month[d.getMonth()] +
        "-" +
        (getdate + 3) +
        " " +
        m +
        ":00:00";
    }
    switch (getdate) {
      case 0:
        getdate = "0" + getdate;
        break;
      case 1:
        getdate = "0" + getdate;
        break;
      case 2:
        getdate = "0" + getdate;
        break;
      case 3:
        getdate = "0" + getdate;
        break;
      case 4:
        getdate = "0" + getdate;
        break;
      case 5:
        getdate = "0" + getdate;
        break;
      case 6:
        getdate = "0" + getdate;
        break;
      case 7:
        getdate = "0" + getdate;
        break;
      case 8:
        getdate = "0" + getdate;
        break;
      case 9:
        getdate = "0" + getdate;
        break;
    }
    h4out.textContent = time;
    let str = h4out.textContent
    p = new Date(
      parseInt(str[0]+str[1]+str[2]+str[3]),
      parseInt(str[5]+str[6])-1,
      parseInt(str[8]+str[9])
    )
    h4out.textContent=p.getFullYear() + '-' + Month[p.getMonth()] + '-' + p.getDate() +' ' + time[11] + time[12] + ':' + time[14] + time[15] + ':' + time[17] + time[18]
    getJSON();
  };
});
function filter() {
  const input = document.getElementById("countryy").value;
  let cities = Array.from(document.getElementsByClassName("c"));
  if (input.length > 0) {
    cities = cities.filter(function (el) {
      if (
        input.toUpperCase() ==
        el.textContent.substr(0, input.length).toUpperCase()
      ) {
        el.style.display = "block";
        el.setAttribute("onclick", `change("${el.textContent.toString()}")`);
        return el;
      } else {
        el.style.display = "none";
      }
    });
  }
}
function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

function change(eltext) {
  //ar = eltext[0] + eltext[1]
  ar = eltext.substr(eltext.length - 2);
  //document.getElementById("testin").value = eltext.substr(3)
  elt = "";
  for (var i = 0; i <= eltext.length - 4; i++) {
    elt = elt + eltext[i];
  }
  //document.getElementById("countryy").value = elt
  if (contains(arr1, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr2, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr3, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr4, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr5, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr6, ar)) {
    document.getElementById("countryy").value = eltext;
  } else if (contains(arr7, ar)) {
    document.getElementById("countryy").value = eltext;
  }
}

function getcountry(urll, arr) {
  var url = urll;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      country_json = xhr.responseText;
      country_json = JSON.parse(country_json);
      console.log(country_json);
      s = document.getElementById("ul");
      for (var i = 0; i < arr.length; i++) {
        str = arr[i];
        li = document.createElement("li");
        li.setAttribute("class", "c");
        li.setAttribute("href", str);
        li.textContent = country_json.data[str].country + ":" + str;
        //li.textContent = str
        s.appendChild(li);
      }
    }
  };
  xhr.onload = function () {
    console.log(123);
  };
  xhr.send();
}
