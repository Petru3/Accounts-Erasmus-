

function Admin() {
    return(
        <div className='page admin-page'>
          <div className="blocks">
              <div className="add">
                  <h3 id="title">Adaugare conturi</h3>
                  <h4>Tipul de cont:</h4>
                  <div className="type">
                      <li><input type="radio" name="level"/>Elev</li>
                      <li><input type="radio" name="level"/>Tutore</li>
                      <li><input type="radio" name="level"/>Administrator</li>
                  </div>
                  <div className="profil">
                        <li><input type="radio" name="profil"/>Hotelier(Turism si alimentatie)</li>
                        <li><input type="radio" name="profil"/>Matematica-Informatica</li>
                        <li><input type="radio" name="profil"/>Calculatoare si automatizari</li>
                        <li><input type="radio" name="profil"/>Industrie Alimentara</li>
                  </div>
                  <ul className="name-stats">
                      <h5>Numele contului:</h5>
                      <input type="text"/>
                      <h5>Parola contului:</h5>
                      <input type="text"/>
                  </ul>
                  <button>Add Account</button>
              </div>
              <div className="delete">
                  <h3>Sterge un cont:</h3>
                  <ul>
                      <h5>Numele contului:</h5>
                      <input type="text"/>
                  </ul>
                  <button>Delete Account</button>
              </div>
              <div className="upload-btns">
                <li className='add-forms'>
                    <h4>Adauga Formulare</h4>
                    <input placeholder="Titlu Formular" id="input-title" type='text'/>
                    <input placeholder="Link Formular" id="input-link" type="url"/>
                    <button>Add</button>
                </li>
            </div>
          </div>
        <div className="show-quiz">
            <div className="temp">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSno723iayzV4kyH_4eJdZE5h0rBnkYThBI7BJcmY1iS4Jng/viewform?usp=share_link" rel="noreferrer" target="_blank">Test initial</a>
            </div>
            <div className="temp">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc-F8KGVex9cYHP6jdq4oXvjo5ZvCGr8sZ_scRkhzXhj8GAKw/viewform?usp=share_link" rel="noreferrer" target="_blank">Test Final</a>
            </div>
        </div>
      </div>
    )
}

export default Admin