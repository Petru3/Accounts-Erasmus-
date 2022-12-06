
import '../css/Student/style.css'
import Documentation from '../components/documentation'

function Student(){
  const data = [
    {
      title: 'Clasificarea hotelurilor din Romania',
      link: "https://drive.google.com/file/d/1uj224aodqBKABw9I0FIpHaW-59barg3K/view?usp=share_link"
    },
    {
      title: 'Nota de recepţie şi constatare de diferenţe',
      link: "https://drive.google.com/file/d/170DCiDEersIgaj7DR4n8dKIQJ5IbKTzI/view?usp=share_link"
    },
    {
      title: 'Factura',
      link: 'https://drive.google.com/file/d/1xLND0ztzyx3wMv4_p2ONFCy9IYjskKRi/view?usp=share_link'
    },
    {
      title: 'Dispoziţia de plată-încasare către casierie/ Monetar',
      link: 'https://drive.google.com/file/d/1cR7QX4OlLM1Anj8_XcBD_7X-FZaY9od0/view?usp=share_link'
    },
    {
      title: 'Avizul de însoţire a mărfii',
      link: 'https://drive.google.com/file/d/1aSi77d8ZukoAEJ6oy_mOkDoZbzcD7_ob/view?usp=share_link'
    },
    {
      title: 'Bonul de consum',
      link: 'https://drive.google.com/file/d/1tFtRTFKBJOW23DsVfksy8Q9d5UVNt1Kg/view?usp=share_link'
    },
    {
      title: 'Bonul de predare-transfer-restituire',
      link: 'https://drive.google.com/file/d/1yW2TQMZh4_XOKMXaQKYh_q7xgtiTVX12/view?usp=share_link'
    },
    {
      title: 'Chitanţa',
      link: 'https://drive.google.com/file/d/1QhV-IbzhTal8QgIHCxn8_EBc7jm3-gzT/view?usp=share_link'
    },
    {
      title: 'Fişa de magazie',
      link: 'https://drive.google.com/file/d/1KYd6vUsGIUwjCrnygMaCdF-bUdib4cnJ/view?usp=share_link'
    },
    {
      title: 'Ordin de deplasare (delegaţie)',
      link: 'https://drive.google.com/file/d/1C0Wl7meijRt0XZOZZEEnG_Zwtgh5dHLs/view?usp=share_link'
    },
    {
      title: 'Sisteme de clasificare a hotelurilor în diferite țări de pe Glob',
      link: 'https://drive.google.com/file/d/15hy7un4J_KztcP2pWSJXXDzHiiogsO7H/view?usp=share_link'
    },
    {
      title: 'Organizarea activităţii serviciului de etaj',
      link: 'https://drive.google.com/file/d/1eZcqa6ANYhowt2pI5deh7rFQCvjeHsh3/view?usp=share_link'
    },
    {
      title: 'Instrumente de plata fara numerar',
      link: 'https://drive.google.com/file/d/1KYd6vUsGIUwjCrnygMaCdF-bUdib4cnJ/view?usp=share_link'
    }
  ]

  const loopOverDocumentation = data.map(item => {
    return(
      <Documentation
      title={item.title}
      link={item.link}
      />
    )
  })

    return(
        <div className="page student-page">
            <div className="intro-information">
              <div className="first-text-block">
                  <h3>Titlul proiectului: Tehnologiile IT în specializările VET</h3>
                  <h4>Obiective:</h4>
                  <p>Obiectivul general al proiectului: creşterea calităţii forţei de muncă prin dezvoltarea
                    competenţelor tehnice şi transversale necesare absolvenţilor la locul de muncă cu scopul de a
                    le facilita beneficiarilor inserţia pe piaţa muncii şi adaptarea la noile cerinţe ale acesteia.
                    Obiective specifice:
                    - dezvoltarea abilităţilor necesare prelucrării informaţiei în format digital şi utilizării
                    instrumentelor IT
                    - dobândirea de cunoştinţe şi abilităţi tehnice specializate în domeniul specific
                    - îmbunătăţirea cunoştinţelor, abilităţilor şi atitudinilor dintr-o multiplă perspectiva:
                    personală, civică şi socială
                    - dezvoltarea unui comportament profesional conform standardelor de calitate şi etică în
                    afaceri/domeniul de activitate
                    - îmbunătăţirea abilităţilor de comunicare profesională într-o limbă străină</p>
              </div>
              <div className="two-text-block">
                  <h3>Organizaţii de primire:</h3>
                  <ul>
                    <li>HOTEL ABADÍA, Calle Triana Baja 7</li>
                    <li>Tutore de practică: Mr. José Antonio Sànchez Vasquez</li>
                    <li>HOTEL CAMINO DE GRANADA (Gomed Hoteles S.L), Ctra. Antigua de Malaga 29</li>
                    <li>Tutore de practică: Mr. Juan de Dios Gómez</li>
                    <li>HOTEL LAS NLEVES, Calle de la Alhóndiga, 8</li>
                    <li>Tutore de practică: Mr. Mariano Vera Guerrero</li>
                    <li>HOTEL LOS GIRASOLES, C/ San Juan de Dios 48</li>
                    <li>Tutore de practică: Mr. Ángel Pérez</li>
                  </ul>
              </div>
          </div>
          <div className="block">
              <div className="block-infor">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17OLHVOkDwk_PhdA7r03gK_sRRqNo8631/view?usp=share_link">Sarcinile Romana</a>
                <h3>Program de formare/ sarcini zilnice ale stagiarului</h3>
                <p>Prezentarea participanților.<br></br>
                    Prelucrarea :<br></br>
                    -regulilor interne de organizare si a resurselor tehnice organizatorice;<br></br>
                    -regulilor de securitate, combatere a incendiilor si protecția muncii;<br></br>
                    drepturilor / obligațiilor și măsurilor de reducere a factorilor de risc la locul de muncă
                    normelor comportamentale și a codului de etică al organizației primitoare
                    Constituirea grupurilor de lucru și repartizarea sarcinilor;<br></br>
                    -evaluare inițială</p>
              </div>
              <div className="block-prac">
                  <h3>Jurnal de Practica</h3>
                    <div className="first-part-input">
                        <h4>ORGANIZAŢIA DE PRIMIRE:</h4>
                        <input type="text"></input>
                        <h4>NUME, PRENUME TUTORE:</h4>
                        <input type="text"></input>
                        <h4>PERIOADA STAGIULUI:</h4>
                        <input type="text"></input>
                    </div>
                  <textarea placeholder="Write your days activity in this part" name="jurnal"></textarea>
            </div>
            <div className="upload-btns">
                <div class="temp">
                    <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdSno723iayzV4kyH_4eJdZE5h0rBnkYThBI7BJcmY1iS4Jng/viewform?usp=share_link" target="_blank">Test initial</a>
                </div>
                <div class="temp">
                    <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSc-F8KGVex9cYHP6jdq4oXvjo5ZvCGr8sZ_scRkhzXhj8GAKw/viewform?usp=share_link" target="_blank">Test Final</a>
                </div>
            </div>
          </div>
            <div className="grid-temp">
            <h2>Documentatie specifica profilului:</h2>
              {loopOverDocumentation}
            </div>
        </div>
    )
}

export default Student