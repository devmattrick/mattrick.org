<script lang="ts">
  import Container from "./Container.svelte";
  import Logo from "./Logo.svelte";
</script>

<header class="navbar">
  <Container>
    <div class="brand">
      <Logo />
      <h1>Matt McCune</h1>
    </div>
  </Container>
</header>

<style>
  .navbar {
    height: 100px;
    display: flex;
    align-items: center;
  }

  .brand {
    display: flex;
    align-items: center;
    font-size: 2em;
  }

  .brand h1 {
    font-size: 1em;
    margin-left: 0.25em;
  }
</style>
