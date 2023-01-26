import React from 'react'

function TopBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#6f1514"}}>
    <div class="container-fluid ps-3">
      <a class="navbar-brand" href="/#">Acad Juris</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav pe-5">
          <li class="nav-item px-3">
            <a class="nav-link" href="/#">Equipe</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="/#">Clientes</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="/#">Contato</a>
          </li>
        </ul>
      </div>
    </nav>);
};
export default TopBar
