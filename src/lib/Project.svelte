<script lang="ts">
  export let name: string;
  export let description: string;
  export let image: string;
  export let link: string;
</script>

<a class="link" href={link}>
  <article class="project">
    <div class="image">
      <img alt={`Screenshot of ${name} project`} src={image} />
    </div>
    <div class="text">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  </article>
</a>

<style>
  .link {
    text-decoration: none;
    color: var(--color-background-text);
  }

  .project {
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 3em;
  }

  .image {
    width: 100%;
    flex: 1;
    position: relative;
    display: block;
  }

  .image img {
    width: 100%;
    display: block;
    border-radius: 0.5em;
    position: relative;
    z-index: 1;
    transform: translate(0, 0);
  }

  .image::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-brand);
    opacity: 0.3;
    z-index: 2;
    border-radius: 0.5em;
    transform: translate(0, 0);
  }

  .image::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background-text);
    opacity: 0.1;
    border-radius: 0.5em;
    transform: translate(-1em, -1em);
    z-index: 0;
  }

  @media not (prefers-reduced-motion) {
    .project .image::before,
    .project .image::after,
    .project .image img {
      transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
      transform-origin: center;
    }

    .project:hover .image::before,
    .project:hover .image img {
      transform: translate(0.5em, 0.5em);
    }

    .project:hover .image::before {
      opacity: 0;
    }

    .project:hover .image::after {
      transform: translate(-1.5em, -1.5em);
    }
  }

  .text {
    flex: 1;
    position: relative;
    z-index: 3;
    font-size: 1.5em;
  }

  @media (max-width: 900px) {
    .project {
      flex-direction: column;
      gap: 1em;
    }
  }
</style>
