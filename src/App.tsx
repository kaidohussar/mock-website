import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  fetchContent,
  getImage,
  getText,
  getVariation,
  initContentStorage,
  setContentLanguage,
} from "@contentstorage/core";
import { styles } from "./styles";

// import ENJson from "./content/json/EN.json";
// import FRJson from "./content/json/FR.json";

//setContentLanguage(ENJson);

initContentStorage({
  languageCodes: ["EN", "FR"],
  contentKey: "108541025900791613826/2076807b-036d-4e7a-a5ea-24190920bde6",
});

function App() {
  const [page, setPage] = useState(1);
  const [newKeyState, setNewKeyState] = useState<"variation2" | "default">(
    "default",
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  console.log("isLoading", isLoading);

  // const {
  //   register,
  //   textContent: headingContent,
  //   id: headingId,
  // } = getText("App.Heading");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const image = getImage("App.kanghuru");
  const variation = getVariation("App.newKey", "variation2");

  console.log("image DATA", image);
  return (
    <>
      <div>
        <img
          data-content-key={image?.contentKey}
          src={image?.data.url}
          className="logo react"
          alt="React logo"
        />
      </div>
      {page === 1 && (
        <>
          <h1>{getText("App.Heading").text || "Not found"}</h1>

          <h2>{getVariation("App.newKey", newKeyState).text}</h2>

          <button onClick={() => setNewKeyState("default")} className="button">
            {getText("PageTitles.login").text}
          </button>

          <button
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
          <h1>{getText("Register.sign_up_google").text || "Not found"}</h1>

          <header>
            <h1 style={styles.headerH1}>Website Title</h1>
          </header>

          <nav>
            <a href="#" style={styles.navLink}>
              Home
            </a>
            <a href="#" style={styles.navLink}>
              About
            </a>
            <a href="#" style={styles.navLink}>
              Services
            </a>
            <a href="#" style={styles.navLink}>
              Portfolio
            </a>
            <a href="#" style={styles.navLink}>
              Blog
            </a>
            <a href="#" style={styles.navLink}>
              Contact
            </a>
          </nav>

          <main style={styles.main}>
            <section style={styles.section}>
              <h2 style={styles.sectionH2}>
                Welcome to Our Enhanced Content Page
              </h2>
              <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                Mauris massa. Vestibulum lacinia arcu eget nulla.
              </p>
              <p style={styles.paragraph}>
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              </p>
              <a href="#" style={styles.button}>
                Get Started
              </a>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionH2}>Our Comprehensive Services</h2>
              <p style={styles.paragraph}>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur sodales ligula in
                libero. Sed dignissim lacinia nunc. Curabitur tortor.
                Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                Maecenas mattis. Sed convallis tristique sem. Proin ut ligula
                vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
                suscipit quis, luctus non, massa.
              </p>
              <ul style={styles.list}>
                <li
                  data-content-key="ModalCallQualitySurvey.Header.title"
                  style={styles.listItem}
                >
                  <strong>Strategic Planning:</strong> We analyze and plan every
                  step to ensure success.
                </li>
                <li style={styles.listItem}>
                  <strong>Creative Design:</strong> Our designs are not only
                  beautiful but also user-friendly.
                </li>
                <li style={styles.listItem}>
                  <strong>Robust Development:</strong> Building scalable and
                  secure solutions for the future.
                </li>
                <li style={styles.listItem}>
                  <strong>Digital Marketing:</strong> Expanding your reach
                  through targeted campaigns.
                </li>
              </ul>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionH2}>
                Project Showcase &amp; Methodology
              </h2>
              <p style={styles.paragraph}>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </p>
              <p style={styles.paragraph}>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus.
              </p>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionH2}>Exploring Further Details</h2>
              <p style={styles.paragraph}>
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
                quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
              </p>
              <p style={styles.paragraph}>
                Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
                hendrerit fringilla. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi
                consectetuer lacinia. Nam pretium turpis et arcu.
              </p>
            </section>

            <section>
              <h2 style={styles.sectionH2}>
                Final Thoughts &amp; Call to Action
              </h2>
              <p style={styles.paragraph}>
                Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in
                justo pellentesque facilisis. Etiam imperdiet imperdiet orci.
                Nunc nec neque. Phasellus leo dolor, tempus non, auctor et,
                hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non,
                euismod vitae, posuere imperdiet, leo. Maecenas malesuada.
                Praesent congue erat at massa.
              </p>
              <p style={styles.paragraph}>
                Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.
                Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Sed
                aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
                placerat dolor lectus quis orci.
              </p>
              <a href="#" style={styles.button}>
                Completing warm transfer failed. Please try again
              </a>
            </section>
          </main>

          <footer>
            <p style={styles.footerP}>
              &copy; 2025 Your Website. All Rights Reserved.
            </p>
          </footer>

          {/*<div {...register(headingId)}>{headingContent}</div>*/}

          {/*<TextContent as="span" id="App.Heading" />*/}
        </>
      )}
    </>
  );
}

export default App;
