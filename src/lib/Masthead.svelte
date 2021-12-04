<script lang="ts">
  import Container from "./Container.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
</script>

<section class="masthead">
  <Container>
    <p class="greet">Hello there, I'm</p>
    <h1 class="name">Matt McCune.</h1>
    <p class="about">
      I am a software engineer with a passion for building modern, accessible, unique web
      experiences.
    </p>
    <ul class="links">
      <li><a href="https://github.com/devmattrick"><GitHub /></a></li>
      <li><a href="https://www.linkedin.com/in/matthewmccune/"><Linkedin /></a></li>
    </ul>
  </Container>
</section>

<style>
  .masthead {
    margin-top: -100px;
    padding-top: 100px;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .greet {
    color: var(--color-brand);
    font-size: 1.5em;
    margin: 0;
    margin-left: -0.1em;
  }

  .name {
    font-size: 5em;
    margin: 0;
    margin-left: -0.1em;
  }

  .about {
    font-size: 2em;
    margin: 1em 0;
    color: var(--color-fade);
    margin-left: -0.1em;
  }

  .links {
    list-style-type: none;
    padding-left: 0;
    font-size: 3em;
  }

  .links li {
    display: inline-block;
  }
</style>
