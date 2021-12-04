<div class="theme">
  <slot />
</div>

<style>
  /* montserrat-regular - latin-ext_latin */
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/montserrat-v18-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/montserrat-v18-latin-ext_latin-regular.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-regular.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/montserrat-v18-latin-ext_latin-regular.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/montserrat-v18-latin-ext_latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("/fonts/montserrat-v18-latin-ext_latin-regular.svg#Montserrat")
        format("svg"); /* Legacy iOS */
  }

  /* montserrat-600 - latin-ext_latin */
  @font-face {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/montserrat-v18-latin-ext_latin-600.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/montserrat-v18-latin-ext_latin-600.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/montserrat-v18-latin-ext_latin-600.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/montserrat-v18-latin-ext_latin-600.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/montserrat-v18-latin-ext_latin-600.ttf") format("truetype"),
      /* Safari, Android, iOS */ url("/fonts/montserrat-v18-latin-ext_latin-600.svg#Montserrat")
        format("svg"); /* Legacy iOS */
  }

  .theme {
    --color-brand: #0be881;
    --color-brand-text: #000000;
    --color-background: #0b0d0f;
    --color-background-text: #ffffff;
    --color-fade: #aaa;

    font-family: "Montserrat", sans-serif;
  }

  @media (prefers-color-scheme: light) {
    .theme {
      --color-brand: #10ac84;
      --color-brand-text: #ffffff;
      --color-background: #ffffff;
      --color-background-text: #333333;
      --color-fade: #777;
    }
  }

  .theme :global(a) {
    color: var(--color-brand);
  }
</style>
