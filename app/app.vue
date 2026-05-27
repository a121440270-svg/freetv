<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="brand">freeTV</div>
      <nav class="main-nav">
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/search">搜索</NuxtLink>
        <NuxtLink to="/favorites">收藏</NuxtLink>
        <NuxtLink to="/history">历史</NuxtLink>
      </nav>
    </header>

    <main class="app-main">
      <NuxtPage />
    </main>

    <footer class="app-footer">轻量化电视影视聚合系统 · freeTV MVP</footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #030712;
  color: #f7f7f7;
  font-family: Inter, system-ui, sans-serif;
}
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #021632, #0c1a36);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}
.main-nav {
  display: flex;
  gap: 1rem;
}
.main-nav a {
  color: #fff;
  text-decoration: none;
  opacity: 0.8;
}
.main-nav a.router-link-active {
  opacity: 1;
  font-weight: 600;
}
.app-main {
  flex: 1;
  padding: 1.5rem;
}
.app-footer {
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>
