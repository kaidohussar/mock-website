

import { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {getImage, getText, getVariation, setContentLanguage} from "@contentstorage/core";

import ENJson from './content/json/EN.json';
import FRJson from './content/json/FR.json';

setContentLanguage(ENJson);

function App() {

    const [page, setPage] = useState(1);
    const [newKeyState, setNewKeyState] = useState<'variation2' | 'default'>('default');
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
            {page === 1 && (
                <>
                    <h1 data-contentstorage-id="App.Heading">{getText('App.Heading') || 'Not found'}</h1>

                    <h2 data-contentstorage-id="App.newKey">{getVariation('App.newKey', newKeyState)}</h2>

                    <button data-contentstorage-id="PageTitles.login" onClick={() => setNewKeyState('default')} className="button">
                        {getText('PageTitles.login')}
                    </button>

                    <button data-contentstorage-id="PageTitles.registration" onClick={() => setNewKeyState('variation2')} className="button">
                        {getText('PageTitles.registration')}
                    </button>

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
                    <button onClick={() => setPage(2)}>To Page 2</button>
                </>
            )}

            {page === 2 && (
                <>
                    <button onClick={() => setPage(1)}>To Page 1</button>
                    <h1 data-contentstorage-id="Register.sign_up_google">{getText('Register.sign_up_google') || 'Not found'}</h1>
                </>
            )}
        </>
    )
}

export default App
