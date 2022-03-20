<script>
  import { onMount } from 'svelte';

  let photos = [];

  onMount(async () => {
    console.log('OnMount');
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=20'
    );
    photos = await response.json();
  });
</script>

<div class="Photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <p>Loading...</p>
  {/each}
</div>

<style lang="scss">
  .Photos {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    img {
      border-radius: 0.5rem;
    }
  }
</style>
