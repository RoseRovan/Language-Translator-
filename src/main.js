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