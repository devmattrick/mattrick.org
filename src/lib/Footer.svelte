<script>
  import Container from "./Container.svelte";
  import GitHub from "./icons/GitHub.svelte";
</script>

<footer class="footer">
  <Container>
    <div class="inner">
      <div>&copy; Matthew McCune</div>
      <div class="footer-right">
        <a href="https://github.com/devmattrick/mattrick.org" class="icon-link"><GitHub /></a>
      </div>
    </div>
  </Container>
</footer>

<style>
  .footer {
    padding: 1em 0;
    color: var(--color-fade);
    margin-top: 5rem;
  }

  .inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .icon-link {
    font-size: 2em;
  }

  .footer-right {
    text-align: right;
  }
</style>
