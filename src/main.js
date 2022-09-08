const languages = {
    sw: "Swahili",
    af: "Afrikaans",
    sq: " Albanian",
    am: "Amharic",
    ar: "Arabic",
    hy: "Armenian",
    az: "Azerbaijani",
    eu: "Basque",
    be: "Belarusian",
    bn: "Bengali",
    bs: "Bosnian",
    bg: "Bulgarian",
    ca: "Catalan",
    co: "Corsican",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    nl: "Dutch",
    en: "English",
    eo: "Esperanto",
    et: "Estonian",
    fi: "Finnish",
    fr: "French:",
    fy: "Frisian",
    g: "Galician",
    de: "German",
    el: "Greek",
    gu: "Gujarati",
    ha: "Hausa",
    haw: "Hawaiian",
    he: "Hebrew",
    hi: "Hindi",
    fa: "Persian",
    pl: "Polish",
    pa: "Punjabi",
    ro: "Romanian",
    ru: "Russian",
    sm: "Samoan",
    sr: "Serbian",
    st: "Sesotho",
    sn: "Shona",
    sd: "Sindhi",
    sk: "Slovak",
    sl: "Slovenian",
    so: "Somali",
    es: "Spanish",
    su: "Sundanese",
    yo: "Yoruba",
    zu: "Zulu",
  };
  const input = document.querySelector("input");
const log = document.getElementById("typed-text");
const initialLang = document.getElementById("initial-lang");
const translatedData = document.getElementById("translated-text");
let textToDetect = "";
let initialLanguage = "";
input.addEventListener("change", handleOnChange);
//event handlers
function handleOnChange(e) {
  //   e.preventDefault();
  log.textContent = e.target.value;
  console.log("TEXT INPUT: ", e.target.value);
  textToDetect = e.target.value;
  detectFunction(textToDetect);
}
// this adds a list of languages to a select component
const select = document.getElementById("select-language");
for (language in languages) {
  select.options[select.options.length] = new Option(
    languages[language],
    language
  );
}
// this adds a list of languages to a select component
const select = document.getElementById("select-language");
for (language in languages) {
  select.options[select.options.length] = new Option(
    languages[language],
    language
  );
}
const selectedLang = document.getElementById("select-language");
selectedLang.addEventListener("change", handleLanguageTranslate);
function handleLanguageTranslate(e) {
  console.log("SELECTED LANG: ", e.target.value);
  translateFunction(e.target.value);
}
//fetch request - detect

const detectFunction = async (text) => {
    const data = {};
    console.log("DATA TO DETECT: ", text);
  
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", `${text}`);
  
    const detectLanguageTyped = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "d7c3d6733cmsh3dcf0d07a92fd54p133c88jsn6cdec393f458",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };
  
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      detectLanguageTyped
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const resp = response.data.detections[0][0].language;
        initialLang.textContent = `Language detected: ${resp}`;
        initialLanguage = resp;
      })
      .catch((err) => console.error(err));
  };