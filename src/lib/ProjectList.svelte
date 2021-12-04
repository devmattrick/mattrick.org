<script lang="ts">
  import Container from "./Container.svelte";
  import Project from "./Project.svelte";

  const projects = [
    {
      name: "Table Top Online",
      description: "A web-based, online, multiplayer card game. ",
      image: "/tabletop.png",
      link: "https://github.com/cpsc362-team6",
    },
  ];
</script>

<Container>
  <h1 class="heading">Here's some stuff I've worked on...</h1>
  <div class="list">
    {#each projects as project}
      <Project
        name={project.name}
        description={project.description}
        image={project.image}
        link={project.link}
      />
    {/each}
  </div>
</Container>

<style>
  .heading {
    text-align: center;
    margin-bottom: 3em;
    font-size: 3em;
  }

  .list {
    padding: 0 5em;
  }
</style>
