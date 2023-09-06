import React from 'react'

function Navbar() {
  return (
    // navbar-light bg-light
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">EasyStay</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About US</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/about">Edit Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    
  )
}

export default Navbar
