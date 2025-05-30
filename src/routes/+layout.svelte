<script>
    import '../app.css';

    import MonumentExtendedBlack from '$lib/fonts/MonumentExtended/MonumentExtended-Black.woff2';
    import '@fontsource-variable/inter';
    import '@fontsource-variable/jetbrains-mono';

    import { page } from '$app/state';

    import Grid from '$lib/components/Grid.svelte';

    import HeaderMenu from '$lib/components/HeaderMenu.svelte';
    import HeaderBanner from '$lib/components/HeaderBanner.svelte';

    import BasketIcon from '$lib/icons/basket.svg?raw';
    import CartIcon from '$lib/icons/cart.svg?raw';
    import ArrowRightIcon from '$lib/icons/arrow-right.svg?raw';

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
      <a href="/service">x</a>
      <a href="/blog">blog</a>
      <a href="/jobs">jobs</a>
      <a href="/support">support</a>
    </nav>
    <div class="navbar-section-buttons">
      <a class="button service" href="/service">
        {@html BasketIcon}
        service
      </a>
       <!-- {#if cartTotalQuantity}
        <button>
          {@html CartIcon}
          <div class="cart-text">cart </div>
        </button>
        {/if} -->
    </div>
  </div>
</header>

<HeaderBanner />

<main>
    <slot></slot>
</main>

<footer>
  <div class="container">
    <Grid columns={2} wrapMode="none" alignItems="start" size="large">
      <div class="footer-links">
        <strong>Service</strong>
        <a href="/service">service x</a>
          <span>LOGO</span>
          <!-- <Badge style="light" diplay="inline">new</Badge> -->
      </div>
      <div class="footer-links">
        <strong>Company</strong>
        <a href="/blog">blog</a>
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

    .navbar-section-logo {
      flex-direction: row-reverse;
      align-items: center;
      display: flex;
      border-right: 1px solid #000;

      & > .title {
        font-family: "Monument Extended Black", sans-serif;
        font-size: 20px;
        color: #000;
        height:20px;
        text-transform: uppercase;
        padding: 0 2rem;
      }

      @media only screen and (max-width: 480px) {
        border-right: none;
      }

      @media only screen and (max-width: 480px) {
        flex: 1;

        & > .title {
          display: flex;
          flex: 1;
          justify-content: center;
        }
      }

      @media only screen and (max-width: 375px) {
        & > .title {
          padding: 0 0.25rem;
        }
      }
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

    .navbar-section-buttons {
      display: flex;

      /* & .cart, & .service { */
      .service :global {
        border: none;

        & svg {
          margin-right: 0.5rem;
        }
      }

      & .button {
        color: #000;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
        border-left: 1px solid #000;
        padding-left: 56px;
        padding-right: 56px;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: var(--color-accent);

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: var(--color-accent-hover);
          }
        }
        &:active {
          background-color: var(--color-accent-hover);
        }
      }

      @media only screen and (max-width: 768px) {
        &.navbar-section-buttons > :first-child:not(:only-child) {
          display: none;
        }

        & .cart .cart-text {
          display: none;
        }

        & .cart {
          padding-left: 25px;
          padding-right: 25px;
        }

        & .service {
          padding-left: 10px;
          padding-right: 10px;
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

        & a {
          color: #fff;
          font-size: 1.25rem;
          transition: opacity 0.2s;
        }

        @media (hover: hover) and (pointer: fine) {
          & a:hover {
            opacity: 0.65;
          }
        }

        & a:active {
          opacity: 0.65;
        }

      }
    }
</style>