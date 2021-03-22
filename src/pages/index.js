import React from 'react'

import { Link } from 'components/Router'

//document.title = "gcx-gce.gc.ca";

import gcxLogo from '../assets/gcx-gce.png'

export default () => (
  <main className="text-center splash-page">
    <img className="gcx-logo" src={gcxLogo} alt="gcxchange | gcéchange" />
    <div className="content">
      <h1 className="pb-3">gcxchange | <span lang="fr">gcéchange</span></h1>
      <Link className="btn btn-primary btn-lg mr-2" to="/home">English</Link>
      <Link className="btn btn-primary btn-lg" lang="fr" to="/accueil">Français</Link>
    </div>
  </main>
)
