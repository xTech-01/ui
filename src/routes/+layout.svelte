<script>
    import '../app.css';

    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { get } from "svelte/store";

    import MonumentExtendedBlack from "$lib/fonts/MonumentExtended/MonumentExtended-Black.woff2";


</script>

<!-- onMount(asyc() => {
    // TODO
    console.log('the component has mounted')
}); -->


<svelte:head>
  <link
    rel="preload"
    href={MonumentExtendedBlack}
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<header class="navbar">

</header>

<main>
    <slot></slot>
</main>

<footer>

</footer>

<style>
    
</style>