<script>
    import '../app.css';

    import MonumentExtendedBlack from "$lib/fonts/MonumentExtended/MonumentExtended-Black.woff2";

    import { page } from "$app/state";

    import HeaderMenu from "$lib/components/HeaderMenu.svelte";
    import HeaderBanner from "$lib/components/HeaderBanner.svelte";

    import Grid from "$lib/components/Grid.svelte";

    import {
      cartId,
      showCart,
      loadCart,
      cartTotalQuantity,
    } from "../state.svelte.js";

    import { onMount } from "svelte";


    onMount(async() => {
      await loadCart();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          showCart.bool = false;
        }
      });
    });

    let loading = false;

    async function openCart() {
      await loadCart();
      showCart.bool = true;
    }

    async function updateProduct() {
      //todo
      loading = false;
    }

</script>



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
  <div class="navbar-container">
    <div class="navbar-section-logo">
      <a class="title" href="/">title</a>
      <div class="menu-container">
        <HeaderMenu />
      </div>
    </div>
    <nav class="navbar-section-links">
      <a href="/service">navbar</a>
      <a href="/blog">blog</a>
      <a href="/jobs">jobs</a>
    </nav>
    <div class="navbar-section-buttons">
      <a class="login" href="/login">
        login
      </a>

    </div>
  </div>
</header>

<HeaderBanner />

<main>
    <slot></slot>
</main>

<footer>
  <div class="container">
    <Grid columns={1} wrapMode="single" alignItems="start" size="large">
      <div class="footer-links">
        <strong>Product</strong>
        <a href="/service">service</a>
          <span>LOGO</span>
          <!-- <Badge style="light" diplay="inline">new</Badge> -->
        <a class="badged" href="/blog">blog</a>
        <a href="/jobs">jobs</a>
      </div>
    </Grid>
  </div>
</footer>

<style>
    @font-face {
      font-display: swap;
      font-family: "Monument Extended Black";
      font-style: normal;
      src: url("$lib/fonts/MonumentExtended/MonumentExtended-Black.woff2");
    }

    .navbar {
      top:0;
      position: sticky;
      left:  0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 10;

      background-color: rgba(245, 245, 245, 0.986);
      border-bottom: 1px solid #000;
      backdrop-filter: blur(10px);
    }

    .navbar-container {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
    }

    .navbar-section-links {
      display: flex;
      flex: 0.1;
      align-items: center;
      justify-content: center;
    
      & a {
        color: #800080;
        margin: 0 0.75rem;
        font-family: Inter, sans-serif;
        font-size: 1.125rem;
      }

      @media only screen and (max-width: 480px) {
        & {
          display: None;
        }
      }
    }

    footer {
      color: #fff;
      background-color: #000;
      padding:6rem 6rem 1.25rem;

      @media screen and (max-width: 1024px) {
        & {
          padding: 2rem;
        }

        & .footer-links {
          margin-bottom: 1rem;
        }
      }

      & .container {
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
      }

      & .footer-links {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:0.75rem;

        & strong {
          color: #fff;
          opacity: 0.65;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
</style>