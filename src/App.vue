<template>
  <nav class="nav">
    <h1>Algonquin Game Review Hub</h1>
    <router-link to="/">Home</router-link>
  </nav>

  <router-view />
</template>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;

  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(10px);

  border-bottom: 1px solid var(--border);
}

.nav h1 {
  color: var(--text-bright);
}

a {
  color: var(--blue);
  text-decoration: none;
}

a:hover {
  color: var(--pink);
}
</style>