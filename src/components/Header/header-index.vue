<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Hot Stock</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <b-nav-item active-class="active" to="/dashboard"
              >Dashboard</b-nav-item
            >
          </li>
          <li class="nav-item">
            <b-nav-item active-class="active" to="/contactus"
              >Contact Us</b-nav-item
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
