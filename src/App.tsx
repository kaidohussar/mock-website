

import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getImage, getText, getVariation, setContentLanguage} from "@contentstorage/core";

import ENJson from './content/json/EN.json';
import FRJson from './content/json/FR.json';

setContentLanguage(ENJson);

function App() {

    const [currentLang, setCurrentLang] = useState<'FR' | 'EN'>('EN')

    const setLanguage =  (lang: 'FR' | 'EN') => {
        setContentLanguage(lang === 'EN' ? ENJson : FRJson);
        setCurrentLang(lang)
    }

    useEffect(() => {
        setContentLanguage(ENJson);
        setLanguage('EN')
    }, []);
    console.log('LALALAAL');

    const image = getImage('App.kanghuru')
    const variation = getVariation('App.newKey', 'variation2');
    console.log('AAAAA', variation);
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={image?.url} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>


            </div>
            <h1 data-contentstorage-id="App.Heading">{getText('App.Heading') || 'Not found'}</h1>

            <h2 data-contentstorage-id="App.newKey">{getVariation('App.newKey', 'variation2')}</h2>


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
