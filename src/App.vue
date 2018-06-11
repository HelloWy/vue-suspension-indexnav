<template>
  <div id="app">
    <div class="nav-bar">
      <h2>Slider Nav</h2>
    </div>
    <div v-show="!openSlidernav" style="margin-top: 2rem;text-align:center;width: 100%; font-size: 0.5rem;" @click="taggle"><button style="font-size: 0.6rem;">Select Country</button></br></br>{{countryName}}</div>

    <vue-slider-nav v-show="openSlidernav"
      mainTitleKey="country_name"
      subTitleKey="country_areacode"
      :dataList="dataList.listCountry"
      contactKey="countryCode"
      @callBackFunction="callBack"></vue-slider-nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataList:{
          "diagnostic": {
            "status": 200,
            "elapsetime": "0.1524",
            "memoryusage": "17.53MB",
            "unix_timestamp": 1528165778,
            "confirm": "success",
            "lang": "id",
            "currency": "IDR"
          },
          "output_type": "json",
          "listCountry": [{
            "country_id": "af",
            "country_name": "Afghanistan ",
            "country_areacode": "+93"
          }, {"country_id": "ax", "country_name": "land Islands ", "country_areacode": "+358"}, {
            "country_id": "al",
            "country_name": "Albania ",
            "country_areacode": "+355"
          }, {"country_id": "dz", "country_name": "Algeria ", "country_areacode": "+213"}, {
            "country_id": "as",
            "country_name": "American Samoa ",
            "country_areacode": "+684"
          }, {"country_id": "ad", "country_name": "Andorra ", "country_areacode": "+376"}, {
            "country_id": "ao",
            "country_name": "Angola ",
            "country_areacode": "+244"
          }, {"country_id": "ai", "country_name": "Anguilla ", "country_areacode": "+126"}, {
            "country_id": "aq",
            "country_name": "Antarctica ",
            "country_areacode": "+672"
          }, {
            "country_id": "ag",
            "country_name": "Antigua And Barbuda ",
            "country_areacode": "+126"
          }, {"country_id": "ar", "country_name": "Argentina ", "country_areacode": "+54"}, {
            "country_id": "am",
            "country_name": "Armenia ",
            "country_areacode": "+374"
          }, {"country_id": "aw", "country_name": "Aruba ", "country_areacode": "+297"}, {
            "country_id": "au",
            "country_name": "Australia ",
            "country_areacode": "+61"
          }, {"country_id": "at", "country_name": "Austria ", "country_areacode": "+43"}, {
            "country_id": "az",
            "country_name": "Azerbaijan ",
            "country_areacode": "+994"
          }, {"country_id": "bs", "country_name": "Bahamas ", "country_areacode": "+124"}, {
            "country_id": "bh",
            "country_name": "Bahrain ",
            "country_areacode": "+973"
          }, {"country_id": "bd", "country_name": "Bangladesh ", "country_areacode": "+880"}, {
            "country_id": "bb",
            "country_name": "Barbados ",
            "country_areacode": "+124"
          }, {"country_id": "by", "country_name": "Belarus ", "country_areacode": "+375"}, {
            "country_id": "be",
            "country_name": "Belgium ",
            "country_areacode": "+32"
          }, {"country_id": "bz", "country_name": "Belize ", "country_areacode": "+501"}, {
            "country_id": "bj",
            "country_name": "Benin ",
            "country_areacode": "+229"
          }, {"country_id": "bm", "country_name": "Bermuda ", "country_areacode": "+144"}, {
            "country_id": "bt",
            "country_name": "Bhutan ",
            "country_areacode": "+975"
          }, {"country_id": "bo", "country_name": "Bolivia ", "country_areacode": "+591"}, {
            "country_id": "bq",
            "country_name": "Bonaire Sint Eustatius and Saba",
            "country_areacode": "+599"
          }, {
            "country_id": "ba",
            "country_name": "Bosnia And Herzegovina ",
            "country_areacode": "+387"
          }, {"country_id": "bw", "country_name": "Botswana ", "country_areacode": "+267"}, {
            "country_id": "bv",
            "country_name": "Bouvet Island ",
            "country_areacode": "+47"
          }, {"country_id": "br", "country_name": "Brazil ", "country_areacode": "+55"}, {
            "country_id": "io",
            "country_name": "British Indian Ocean Territory ",
            "country_areacode": "+246"
          }, {
            "country_id": "bn",
            "country_name": "Brunei Darussalam ",
            "country_areacode": "+673"
          }, {"country_id": "bg", "country_name": "Bulgaria ", "country_areacode": "+359"}, {
            "country_id": "bf",
            "country_name": "Burkina Faso ",
            "country_areacode": "+226"
          }, {"country_id": "bi", "country_name": "Burundi ", "country_areacode": "+257"}, {
            "country_id": "kh",
            "country_name": "Cambodia ",
            "country_areacode": "+855"
          }, {"country_id": "cm", "country_name": "Cameroon ", "country_areacode": "+237"}, {
            "country_id": "ca",
            "country_name": "Canada ",
            "country_areacode": "+1"
          }, {"country_id": "cv", "country_name": "Cape Verde ", "country_areacode": "+238"}, {
            "country_id": "ky",
            "country_name": "Cayman Islands ",
            "country_areacode": "+345"
          }, {
            "country_id": "cf",
            "country_name": "Central African Republic ",
            "country_areacode": "+236"
          }, {"country_id": "td", "country_name": "Chad ", "country_areacode": "+235"}, {
            "country_id": "cl",
            "country_name": "Chile ",
            "country_areacode": "+56"
          }, {"country_id": "cn", "country_name": "China ", "country_areacode": "+86"}, {
            "country_id": "cx",
            "country_name": "Christmas Island ",
            "country_areacode": "+61"
          }, {
            "country_id": "cc",
            "country_name": "Cocos Keeling Islands ",
            "country_areacode": "+61"
          }, {"country_id": "co", "country_name": "Colombia ", "country_areacode": "+57"}, {
            "country_id": "km",
            "country_name": "Comoros ",
            "country_areacode": "+269"
          }, {"country_id": "cg", "country_name": "Congo ", "country_areacode": "+242"}, {
            "country_id": "cd",
            "country_name": "Congo The Democratic Republic Of The ",
            "country_areacode": "+243"
          }, {"country_id": "ck", "country_name": "Cook Islands ", "country_areacode": "+682"}, {
            "country_id": "cr",
            "country_name": "Costa Rica ",
            "country_areacode": "+506"
          }, {"country_id": "ci", "country_name": "Cte DIvoire ", "country_areacode": "+225"}, {
            "country_id": "hr",
            "country_name": "Croatia ",
            "country_areacode": "+385"
          }, {"country_id": "cu", "country_name": "Cuba ", "country_areacode": "+53"}, {
            "country_id": "cw",
            "country_name": "Curacao",
            "country_areacode": "+599"
          }, {"country_id": "cy", "country_name": "Cyprus ", "country_areacode": "+357"}, {
            "country_id": "cz",
            "country_name": "Czech Republic ",
            "country_areacode": "+420"
          }, {"country_id": "dk", "country_name": "Denmark ", "country_areacode": "+45"}, {
            "country_id": "dj",
            "country_name": "Djibouti ",
            "country_areacode": "+253"
          }, {"country_id": "dm", "country_name": "Dominica ", "country_areacode": "+767"}, {
            "country_id": "do",
            "country_name": "Dominican Republic ",
            "country_areacode": "+809"
          }, {"country_id": "ec", "country_name": "Ecuador ", "country_areacode": "+593"}, {
            "country_id": "eg",
            "country_name": "Egypt",
            "country_areacode": "+20"
          }, {"country_id": "sv", "country_name": "El Salvador ", "country_areacode": "+503"}, {
            "country_id": "gq",
            "country_name": "Equatorial Guinea ",
            "country_areacode": "+240"
          }, {"country_id": "er", "country_name": "Eritrea ", "country_areacode": "+291"}, {
            "country_id": "ee",
            "country_name": "Estonia ",
            "country_areacode": "+372"
          }, {"country_id": "et", "country_name": "Ethiopia ", "country_areacode": "+251"}, {
            "country_id": "fk",
            "country_name": "Falkland Islands Malvinas ",
            "country_areacode": "+500"
          }, {"country_id": "fo", "country_name": "Faroe Islands ", "country_areacode": "+298"}, {
            "country_id": "fj",
            "country_name": "Fiji ",
            "country_areacode": "+679"
          }, {"country_id": "fi", "country_name": "Finland ", "country_areacode": "+358"}, {
            "country_id": "fr",
            "country_name": "France ",
            "country_areacode": "+33"
          }, {"country_id": "gf", "country_name": "French Guiana ", "country_areacode": "+594"}, {
            "country_id": "pf",
            "country_name": "French Polynesia ",
            "country_areacode": "+689"
          }, {
            "country_id": "tf",
            "country_name": "French Southern Territories ",
            "country_areacode": "+596"
          }, {"country_id": "ga", "country_name": "Gabon ", "country_areacode": "+241"}, {
            "country_id": "gm",
            "country_name": "Gambia ",
            "country_areacode": "+220"
          }, {"country_id": "ge", "country_name": "Georgia ", "country_areacode": "+995"}, {
            "country_id": "de",
            "country_name": "Germany ",
            "country_areacode": "+49"
          }, {"country_id": "gh", "country_name": "Ghana ", "country_areacode": "+233"}, {
            "country_id": "gi",
            "country_name": "Gibraltar ",
            "country_areacode": "+350"
          }, {"country_id": "gr", "country_name": "Greece ", "country_areacode": "+30"}, {
            "country_id": "gl",
            "country_name": "Greenland ",
            "country_areacode": "+299"
          }, {"country_id": "gd", "country_name": "Grenada ", "country_areacode": "+147"}, {
            "country_id": "gp",
            "country_name": "Guadeloupe ",
            "country_areacode": "+590"
          }, {"country_id": "gu", "country_name": "Guam ", "country_areacode": "+167"}, {
            "country_id": "gt",
            "country_name": "Guatemala ",
            "country_areacode": "+502"
          }, {"country_id": "gg", "country_name": "Guernsey ", "country_areacode": "+44"}, {
            "country_id": "gn",
            "country_name": "Guinea ",
            "country_areacode": "+224"
          }, {"country_id": "gw", "country_name": "GuineaBissau ", "country_areacode": "+245"}, {
            "country_id": "gy",
            "country_name": "Guyana ",
            "country_areacode": "+592"
          }, {"country_id": "ht", "country_name": "Haiti ", "country_areacode": "+509"}, {
            "country_id": "hm",
            "country_name": "Heard Island And Mcdonald Islands ",
            "country_areacode": "+672"
          }, {"country_id": "hn", "country_name": "Honduras ", "country_areacode": "+504"}, {
            "country_id": "hk",
            "country_name": "Hong Kong ",
            "country_areacode": "+852"
          }, {"country_id": "hu", "country_name": "Hungary ", "country_areacode": "+36"}, {
            "country_id": "is",
            "country_name": "Iceland ",
            "country_areacode": "+354"
          }, {"country_id": "in", "country_name": "India ", "country_areacode": "+91"}, {
            "country_id": "id",
            "country_name": "Indonesia",
            "country_areacode": "+62"
          }, {
            "country_id": "ir",
            "country_name": "Iran Islamic Republic Of ",
            "country_areacode": "+98"
          }, {"country_id": "iq", "country_name": "Iraq ", "country_areacode": "+964"}, {
            "country_id": "ie",
            "country_name": "Ireland ",
            "country_areacode": "+353"
          }, {"country_id": "im", "country_name": "Isle Of Man ", "country_areacode": "+44"}, {
            "country_id": "il",
            "country_name": "Israel ",
            "country_areacode": "+972"
          }, {"country_id": "it", "country_name": "Italy ", "country_areacode": "+39"}, {
            "country_id": "jm",
            "country_name": "Jamaica ",
            "country_areacode": "+876"
          }, {"country_id": "jp", "country_name": "Japan ", "country_areacode": "+81"}, {
            "country_id": "je",
            "country_name": "Jersey ",
            "country_areacode": "+44"
          }, {"country_id": "jo", "country_name": "Jordan ", "country_areacode": "+962"}, {
            "country_id": "kz",
            "country_name": "Kazakhstan ",
            "country_areacode": "+7"
          }, {"country_id": "ke", "country_name": "Kenya ", "country_areacode": "+254"}, {
            "country_id": "ki",
            "country_name": "Kiribati ",
            "country_areacode": "+686"
          }, {"country_id": "kw", "country_name": "Kuwait ", "country_areacode": "+965"}, {
            "country_id": "kg",
            "country_name": "Kyrgyzstan ",
            "country_areacode": "+996"
          }, {"country_id": "la", "country_name": "Laos", "country_areacode": "+856"}, {
            "country_id": "lv",
            "country_name": "Latvia ",
            "country_areacode": "+371"
          }, {"country_id": "lb", "country_name": "Lebanon ", "country_areacode": "+961"}, {
            "country_id": "ls",
            "country_name": "Lesotho ",
            "country_areacode": "+266"
          }, {"country_id": "lr", "country_name": "Liberia ", "country_areacode": "+231"}, {
            "country_id": "ly",
            "country_name": "Libyan Arab Jamahiriya ",
            "country_areacode": "+218"
          }, {"country_id": "li", "country_name": "Liechtenstein ", "country_areacode": "+423"}, {
            "country_id": "lt",
            "country_name": "Lithuania ",
            "country_areacode": "+370"
          }, {"country_id": "lu", "country_name": "Luxembourg ", "country_areacode": "+352"}, {
            "country_id": "mo",
            "country_name": "Macau ",
            "country_areacode": "+853"
          }, {
            "country_id": "mk",
            "country_name": "Macedonia The Former Yugoslav Republic Of ",
            "country_areacode": "+389"
          }, {"country_id": "mg", "country_name": "Madagascar ", "country_areacode": "+261"}, {
            "country_id": "mw",
            "country_name": "Malawi ",
            "country_areacode": "+265"
          }, {"country_id": "my", "country_name": "Malaysia ", "country_areacode": "+60"}, {
            "country_id": "mv",
            "country_name": "Maldives ",
            "country_areacode": "+960"
          }, {"country_id": "ml", "country_name": "Mali ", "country_areacode": "+223"}, {
            "country_id": "mt",
            "country_name": "Malta ",
            "country_areacode": "+356"
          }, {"country_id": "mh", "country_name": "Marshall Islands ", "country_areacode": "+692"}, {
            "country_id": "mq",
            "country_name": "Martinique ",
            "country_areacode": "+596"
          }, {"country_id": "mr", "country_name": "Mauritania ", "country_areacode": "+222"}, {
            "country_id": "mu",
            "country_name": "Mauritius ",
            "country_areacode": "+230"
          }, {"country_id": "yt", "country_name": "Mayotte ", "country_areacode": "+269"}, {
            "country_id": "mx",
            "country_name": "Mexico ",
            "country_areacode": "+52"
          }, {
            "country_id": "fm",
            "country_name": "Micronesia Federated States Of ",
            "country_areacode": "+691"
          }, {"country_id": "md", "country_name": "Moldova ", "country_areacode": "+373"}, {
            "country_id": "mc",
            "country_name": "Monaco ",
            "country_areacode": "+377"
          }, {"country_id": "mn", "country_name": "Mongolia ", "country_areacode": "+976"}, {
            "country_id": "me",
            "country_name": "Montenegro ",
            "country_areacode": "+382"
          }, {"country_id": "ms", "country_name": "Montserrat ", "country_areacode": "+166"}, {
            "country_id": "ma",
            "country_name": "Morocco ",
            "country_areacode": "+212"
          }, {"country_id": "mz", "country_name": "Mozambique ", "country_areacode": "+258"}, {
            "country_id": "mm",
            "country_name": "Myanmar ",
            "country_areacode": "+95"
          }, {"country_id": "na", "country_name": "Namibia ", "country_areacode": "+264"}, {
            "country_id": "nr",
            "country_name": "Nauru ",
            "country_areacode": "+674"
          }, {"country_id": "np", "country_name": "Nepal ", "country_areacode": "+977"}, {
            "country_id": "nl",
            "country_name": "Netherlands ",
            "country_areacode": "+31"
          }, {
            "country_id": "an",
            "country_name": "Netherlands Antilles ",
            "country_areacode": "+599"
          }, {"country_id": "nc", "country_name": "New Caledonia ", "country_areacode": "+687"}, {
            "country_id": "nz",
            "country_name": "New Zealand ",
            "country_areacode": "+64"
          }, {"country_id": "ni", "country_name": "Nicaragua ", "country_areacode": "+505"}, {
            "country_id": "ne",
            "country_name": "Niger ",
            "country_areacode": "+227"
          }, {"country_id": "ng", "country_name": "Nigeria ", "country_areacode": "+234"}, {
            "country_id": "nu",
            "country_name": "Niue ",
            "country_areacode": "+683"
          }, {"country_id": "nf", "country_name": "Norfolk Island ", "country_areacode": "+672"}, {
            "country_id": "kp",
            "country_name": "North Korea",
            "country_areacode": "+850"
          }, {
            "country_id": "mp",
            "country_name": "Northern Mariana Islands ",
            "country_areacode": "+670"
          }, {"country_id": "no", "country_name": "Norway ", "country_areacode": "+47"}, {
            "country_id": "om",
            "country_name": "Oman ",
            "country_areacode": "+968"
          }, {"country_id": "pk", "country_name": "Pakistan ", "country_areacode": "+92"}, {
            "country_id": "pw",
            "country_name": "Palau ",
            "country_areacode": "+680"
          }, {
            "country_id": "ps",
            "country_name": "Palestinian Territory Occupied ",
            "country_areacode": "+970"
          }, {"country_id": "pa", "country_name": "Panama ", "country_areacode": "+507"}, {
            "country_id": "pg",
            "country_name": "Papua New Guinea ",
            "country_areacode": "+675"
          }, {"country_id": "py", "country_name": "Paraguay ", "country_areacode": "+595"}, {
            "country_id": "pe",
            "country_name": "Peru ",
            "country_areacode": "+51"
          }, {"country_id": "ph", "country_name": "Philippines ", "country_areacode": "+63"}, {
            "country_id": "pn",
            "country_name": "Pitcairn ",
            "country_areacode": "+870"
          }, {"country_id": "pl", "country_name": "Poland ", "country_areacode": "+48"}, {
            "country_id": "pt",
            "country_name": "Portugal ",
            "country_areacode": "+351"
          }, {"country_id": "pr", "country_name": "Puerto Rico ", "country_areacode": "+787"}, {
            "country_id": "qa",
            "country_name": "Qatar ",
            "country_areacode": "+974"
          }, {"country_id": "re", "country_name": "Runion ", "country_areacode": "+262"}, {
            "country_id": "ro",
            "country_name": "Romania ",
            "country_areacode": "+40"
          }, {"country_id": "ru", "country_name": "Russia", "country_areacode": "+7"}, {
            "country_id": "rw",
            "country_name": "Rwanda ",
            "country_areacode": "+250"
          }, {"country_id": "bl", "country_name": "Saint Barthlemy ", "country_areacode": "+590"}, {
            "country_id": "sh",
            "country_name": "Saint Helena ",
            "country_areacode": "+290"
          }, {
            "country_id": "kn",
            "country_name": "Saint Kitts And Nevis ",
            "country_areacode": "+186"
          }, {"country_id": "lc", "country_name": "Saint Lucia ", "country_areacode": "+175"}, {
            "country_id": "mf",
            "country_name": "Saint Martin ",
            "country_areacode": "+159"
          }, {
            "country_id": "pm",
            "country_name": "Saint Pierre And Miquelon ",
            "country_areacode": "+508"
          }, {
            "country_id": "vc",
            "country_name": "Saint Vincent And The Grenadines ",
            "country_areacode": "+178"
          }, {"country_id": "ws", "country_name": "Samoa ", "country_areacode": "+685"}, {
            "country_id": "sm",
            "country_name": "San Marino ",
            "country_areacode": "+378"
          }, {
            "country_id": "st",
            "country_name": "Sao Tome And Principe ",
            "country_areacode": "+239"
          }, {"country_id": "sa", "country_name": "Saudi Arabia ", "country_areacode": "+966"}, {
            "country_id": "sn",
            "country_name": "Senegal ",
            "country_areacode": "+221"
          }, {"country_id": "rs", "country_name": "Serbia ", "country_areacode": "+381"}, {
            "country_id": "sc",
            "country_name": "Seychelles ",
            "country_areacode": "+248"
          }, {"country_id": "sl", "country_name": "Sierra Leone ", "country_areacode": "+232"}, {
            "country_id": "sg",
            "country_name": "Singapore ",
            "country_areacode": "+65"
          }, {"country_id": "sx", "country_name": "Sint Maarten", "country_areacode": "+1"}, {
            "country_id": "sk",
            "country_name": "Slovakia ",
            "country_areacode": "+421"
          }, {"country_id": "si", "country_name": "Slovenia ", "country_areacode": "+386"}, {
            "country_id": "sb",
            "country_name": "Solomon Islands ",
            "country_areacode": "+677"
          }, {"country_id": "so", "country_name": "Somalia ", "country_areacode": "+252"}, {
            "country_id": "za",
            "country_name": "South Africa ",
            "country_areacode": "+27"
          }, {
            "country_id": "gs",
            "country_name": "South Georgia And The South Sandwich Islands ",
            "country_areacode": "+500"
          }, {"country_id": "kr", "country_name": "South Korea", "country_areacode": "+82"}, {
            "country_id": "es",
            "country_name": "Spain ",
            "country_areacode": "+34"
          }, {"country_id": "lk", "country_name": "Sri Lanka ", "country_areacode": "+94"}, {
            "country_id": "sd",
            "country_name": "Sudan ",
            "country_areacode": "+249"
          }, {"country_id": "sr", "country_name": "Suriname ", "country_areacode": "+597"}, {
            "country_id": "sj",
            "country_name": "Svalbard And Jan Mayen ",
            "country_areacode": "+47"
          }, {"country_id": "sz", "country_name": "Swaziland ", "country_areacode": "+268"}, {
            "country_id": "se",
            "country_name": "Sweden ",
            "country_areacode": "+46"
          }, {"country_id": "ch", "country_name": "Switzerland ", "country_areacode": "+41"}, {
            "country_id": "sy",
            "country_name": "Syrian Arab Republic ",
            "country_areacode": "+963"
          }, {"country_id": "tw", "country_name": "Taiwan", "country_areacode": "+886"}, {
            "country_id": "tj",
            "country_name": "Tajikistan ",
            "country_areacode": "+992"
          }, {"country_id": "tz", "country_name": "Tanzania", "country_areacode": "+255"}, {
            "country_id": "th",
            "country_name": "Thailand ",
            "country_areacode": "+66"
          }, {"country_id": "tl", "country_name": "TimorLeste ", "country_areacode": "+670"}, {
            "country_id": "tg",
            "country_name": "Togo ",
            "country_areacode": "+228"
          }, {"country_id": "tk", "country_name": "Tokelau ", "country_areacode": "+690"}, {
            "country_id": "to",
            "country_name": "Tonga ",
            "country_areacode": "+676"
          }, {
            "country_id": "tt",
            "country_name": "Trinidad And Tobago ",
            "country_areacode": "+868"
          }, {"country_id": "tn", "country_name": "Tunisia ", "country_areacode": "+216"}, {
            "country_id": "tr",
            "country_name": "Turkey ",
            "country_areacode": "+90"
          }, {"country_id": "tm", "country_name": "Turkmenistan ", "country_areacode": "+993"}, {
            "country_id": "tc",
            "country_name": "Turks And Caicos Islands ",
            "country_areacode": "+649"
          }, {"country_id": "tv", "country_name": "Tuvalu ", "country_areacode": "+688"}, {
            "country_id": "ug",
            "country_name": "Uganda ",
            "country_areacode": "+256"
          }, {"country_id": "ua", "country_name": "Ukraine ", "country_areacode": "+380"}, {
            "country_id": "ae",
            "country_name": "United Arab Emirates ",
            "country_areacode": "+971"
          }, {"country_id": "gb", "country_name": "United Kingdom ", "country_areacode": "+44"}, {
            "country_id": "us",
            "country_name": "United States ",
            "country_areacode": "+1"
          }, {
            "country_id": "um",
            "country_name": "United States Minor Outlying Islands ",
            "country_areacode": "+1"
          }, {"country_id": "uy", "country_name": "Uruguay ", "country_areacode": "+598"}, {
            "country_id": "uz",
            "country_name": "Uzbekistan ",
            "country_areacode": "+998"
          }, {"country_id": "vu", "country_name": "Vanuatu ", "country_areacode": "+678"}, {
            "country_id": "va",
            "country_name": "Vatican City State ",
            "country_areacode": "+379"
          }, {"country_id": "ve", "country_name": "Venezuela ", "country_areacode": "+58"}, {
            "country_id": "vn",
            "country_name": "Vietnam ",
            "country_areacode": "+84"
          }, {
            "country_id": "vg",
            "country_name": "Virgin Islands British ",
            "country_areacode": "+128"
          }, {
            "country_id": "vi",
            "country_name": "Virgin Islands US ",
            "country_areacode": "+134"
          }, {
            "country_id": "wf",
            "country_name": "Wallis And Futuna ",
            "country_areacode": "+681"
          }, {"country_id": "eh", "country_name": "Western Sahara ", "country_areacode": "+212"}, {
            "country_id": "ye",
            "country_name": "Yemen ",
            "country_areacode": "+967"
          }, {"country_id": "zm", "country_name": "Zambia ", "country_areacode": "+260"}, {
            "country_id": "zw",
            "country_name": "Zimbabwe",
            "country_areacode": "+263"
          }],
          "login_status": "false",
          "token": "146318c6f42b752dc2f0eaedb8d328f018e47eb7"
        },
        openSlidernav: false,
        countryName:'....'
      }
    },
    methods: {
      callBack (item) {
        console.log(item)
        this.countryName = item.country_name
        this.openSlidernav = !this.openSlidernav
      },
      taggle(){
          this.openSlidernav = !this.openSlidernav
      }
    }
  }
</script>

<style>
  #app {
    overflow: hidden;
  }

  .nav-bar {
    background: #fff;
    height: 0.88rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 3;
    border-bottom: 0.02rem solid #d9d9d9;
  }

  .nav-bar h2 {
    text-align: center;
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1;
    line-height: 0.88rem;
    font-weight: bold;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: 70%;
    left: 15%;
  }
</style>
