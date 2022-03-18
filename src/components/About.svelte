<script>
  let someText = `Frontend Developer at Platzi`;
  let count = 0;
  let styles = { darkMode: false };

  function handleClick() {
    count += 1;
  }

  function toogle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<div class="About">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p class="dark-mode"><span>Hello dark mode</span></p>
  {/if}

  <button on:click={handleClick}> Click {count === 0 ? '' : count}</button>
  <button on:click={toogle}>DarkMode</button>
</div>

<style lang="scss">
  p {
    color: var(--theme-color);
    &.dark-mode {
      color: var(--light-text-color);
    }
  }
</style>
