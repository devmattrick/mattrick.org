<div class="container">
  <slot />
</div>

<style>
  .container {
    padding: 0 5em;
  }

  @media (max-width: 500px) {
    .container {
      padding: 0 3em;
    }
  }
</style>
