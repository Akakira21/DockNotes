import React from 'react';
import styles from './EspaceNotes.module.scss'
import { useState } from 'react';

const EspaceNotes = () => {

    const [PostIt, setPostIt] = useState(["this is a DockNotes note."])

    function NouveauPostIt (){
        setPostIt([...PostIt, 'This is a DockNotes note'])
    }

    return (
        <div className={styles.espaceNotes}>
            <button onClick={NouveauPostIt}>Nouveau PostIt</button>
            {PostIt.map((texte, index) => (
                <div key={index} className={styles.NouveauPostIt}>{texte}</div>
            ))}
        </div>
    );
};

export default EspaceNotes;