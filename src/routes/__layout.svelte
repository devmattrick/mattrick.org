<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Theme from "$lib/Theme.svelte";
</script>

<Theme>
  <div class="wrap">
    <Navbar />

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</Theme>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
  }

  @media (max-width: 500px) {
    :global(:root) {
      font-size: 0.5rem;
    }
  }

  .wrap {
    min-height: 100vh;
    background-color: var(--color-background);
    color: var(--color-background-text);
    display: flex;
    flex-direction: column;
  }

  .main {
    flex: 1;
  }
</style>
