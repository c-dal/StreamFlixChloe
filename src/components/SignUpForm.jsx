function SignUpForm() {
  return (
    <div>
        <h2>Inscription à StreamFlix</h2>
        <form className="card justify-content-center align-items-center">
            <div className="col-lg-6">
                <label htmlFor="inputFirstName" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="inputFirstName"
                        required
                        minLength="2"
                        autoComplete="given-name"
                        placeholder="Votre prénom"/>
            </div>
            <div className="col-lg-6">
                <label htmlFor="inputLastName" className="form-label">Nom</label>
                <input type="text" className="form-control" id="inputLastName"
                        required
                        minLength="2"
                        autoComplete="family-name"
                        placeholder="Votre nom"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail"
                        required
                        autoComplete="email"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputBDay" className="form-label">Date de naissance</label>
                <input type="date" className="form-control" id="inputBDay"
                        required
                        autoComplete="bday"
                        max="2008-09-22"/>
            </div>
            <div className="row col-12 justify-content-center">
                <button type="submit" className="btn btn-primary">S'inscrire!</button>
            </div>
        </form>
    </div>
  )
}

export default SignUpForm;