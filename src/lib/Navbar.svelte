<script lang="ts">
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
</script>

<header class="navbar">
  <Container>
    <a class="brand" href="/">
      <Logo />
      <h1>Matt McCune</h1>
    </a>
  </Container>
</header>

<style>
  .navbar {
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
  }

  .brand {
    display: flex;
    align-items: center;
    font-size: 2em;
    color: var(--color-background-text);
    text-decoration: none;
    margin-left: -18px;
  }

  .brand h1 {
    font-size: 1em;
    margin-left: 0.25em;
  }
</style>
