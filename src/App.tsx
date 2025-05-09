// ts-disable

import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getText, setContentLanguage} from "@contentstorage/core";

import type { ContentStructure } from "@contentstorage/core";

import ENJson from './content/json/EN.json';
import FRJson from './content/json/FR.json';

setContentLanguage(ENJson);

type MyAugmentedPaths = keyof ContentStructure;

function App() {

    const aaa: MyAugmentedPaths = 'App.Heading'
    const [currentLang, setCurrentLang] = useState<'FR' | 'EN'>('EN')

    console.log('aa', aaa);
    const setLanguage =  (lang: 'FR' | 'EN') => {
        setContentLanguage(lang === 'EN' ? ENJson : FRJson);
        setCurrentLang(lang)
    }

    useEffect(() => {
        setLanguage('EN')
    }, []);


    return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>


      </div>
      <h1>{getText(aaa)}</h1>
        <div className="card">
            <button onClick={() => setLanguage('FR')}>
                Set language to FR
            </button>
            <button onClick={() => setLanguage('EN')}>
                Set language to EN
            </button>
        </div>
        <p className="read-the-docs">
            {currentLang}
      </p>
    </>
  )
}

export default App
