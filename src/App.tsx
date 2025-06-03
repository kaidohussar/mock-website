import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  fetchContent,
  getImage,
  getText,
  getVariation, initContentStorage,
  setContentLanguage,
} from "@contentstorage/core";

// import ENJson from "./content/json/EN.json";
// import FRJson from "./content/json/FR.json";

//setContentLanguage(ENJson);

initContentStorage({
  languageCodes: ['EN', 'FR'],
  contentKey: '108541025900791613826/2076807b-036d-4e7a-a5ea-24190920bde6'
})

function App() {
  const [page, setPage] = useState(1);
  const [newKeyState, setNewKeyState] = useState<"variation2" | "default">(
    "default",
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<"FR" | "EN">("EN");

  const setLanguage = async (lang: "FR" | "EN") => {
    setIsLoading(true);
    try {
      await fetchContent(lang);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  //  setContentLanguage(lang === "EN" ? ENJson : FRJson);
    setCurrentLang(lang);
  };

  useEffect(() => {
//    setContentLanguage(ENJson);
    setLanguage("EN");
  }, []);
  console.log("LALALAAL");

  const image = getImage("App.kanghuru");
  const variation = getVariation("App.newKey", "variation2");

  // const {
  //   register,
  //   textContent: headingContent,
  //   id: headingId,
  // } = getText("App.Heading");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("AAAAA", variation);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={image?.data.url} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {page === 1 && (
        <>
          <h1 data-content-key={getText("App.Heading").contentKey}>
            {getText("App.Heading").text || "Not found"}
          </h1>

          <h2 data-content-key="App.newKey">
            {getVariation("App.newKey", newKeyState).text}
          </h2>

          <button data-content-key="PageTitles.login"
            onClick={() => setNewKeyState("default")}
            className="button"
          >
            {getText("PageTitles.login").text}
          </button>

          <button data-content-key="PageTitles.registration"
            onClick={() => setNewKeyState("variation2")}
            className="button"
          >
            {getText("PageTitles.registration").text}
          </button>

          <div className="card">
            <button onClick={() => setLanguage("FR")}>
              Set language to FR
            </button>
            <button onClick={() => setLanguage("EN")}>
              Set language to EN
            </button>
          </div>
          <p className="read-the-docs">{currentLang}</p>
          <button onClick={() => setPage(2)}>To Page 2</button>
        </>
      )}

      {page === 2 && (
        <>
          <button onClick={() => setPage(1)}>To Page 1</button>
          <h1 data-content-key="Register.sign_up_google">
            {getText("Register.sign_up_google").text || "Not found"}
          </h1>

          {/*<div {...register(headingId)}>{headingContent}</div>*/}

          {/*<TextContent as="span" id="App.Heading" />*/}
        </>
      )}
    </>
  );
}

export default App;
