<script>
  import Button from './Button.svelte';

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

<template>
  <div class="About">
    {#if !styles.darkMode}
      <p>{someText}</p>
    {:else}
      <p class="dark-mode"><span>Hello dark mode</span></p>
    {/if}
    <Button text="Click" {count} on:click={handleClick} />
    <Button text="DarkMode" on:click={toogle} />
  </div>
</template>

<style lang="scss">
  p {
    color: var(--theme-color);
    &.dark-mode {
      color: var(--light-text-color);
    }
  }
</style>
