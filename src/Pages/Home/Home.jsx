import React from 'react';
import styles from "./Home.module.scss"
import BarRecherche from '../../Componants/BarRecherche/BarRecherche';
import BarGauche from '../../Componants/BarGauche/BarGauche';
import EspaceNotes from '../../Componants/EspaceNotes/EspaceNotes';
import { useState } from 'react';

const Home = () => {
    
    const [PostIt, setPostIt] = useState([])

    function PostItBlue (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }
    function PostItOrange (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }
    function PostItRed (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }
    function PostItGreen (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }
    function PostItPurple (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }

    return (
        <div className={styles.home}>
            <div className={styles.barGauche}>
                <h1 className={styles.titre}>DockNotes</h1>
                <div className={styles.buttons}>
                    <button className={styles.blue} onClick={PostItBlue}></button>
                    <button className={styles.orange} onClick={PostItOrange}></button>
                    <button className={styles.red} onClick={PostItRed}></button>
                    <button className={styles.green} onClick={PostItGreen}></button>
                    <button className={styles.purple} onClick={PostItPurple}></button>
                </div>
            </div>
            <div className={styles.SearchAndNotes}>
                <BarRecherche />
                <div className={styles.espaceNotes}>
                    {PostIt.map((texte, index) => (
                    <div key={index} className={styles.PostItBlue}>{texte}</div>
                    ))}
                    {PostIt.map((texte, index) => (
                    <div key={index} className={styles.PostItOrange}>{texte}</div>
                    ))}
                    {PostIt.map((texte, index) => (
                    <div key={index} className={styles.PostItRed}>{texte}</div>
                    ))}
                    {PostIt.map((texte, index) => (
                    <div key={index} className={styles.PostItGreen}>{texte}</div>
                    ))}
                    {PostIt.map((texte, index) => (
                    <div key={index} className={styles.PostItPurple}>{texte}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;