<script>
    import { page } from '$app/state';
</script>


<nav aria-label="navigation menu">
    <button 
        type="button"
        class="toggle-button"
        aria-expanded="false"
        aria-controls="menu-dropdown"
        tabindex="0"
    >
        <svg viewBox="0 0 24 24" width="32" height="32">
            <rect x="3" y="5" width="18" height="2"></rect>
            <rect x="3" y="11" width="18" height="2"></rect>
            <rect x="3" y="17" width="18" height="2"></rect>
        </svg>
    </button>
    <div
    class="menu-container"
    id="menu-dropdown"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
>
        <div class="section-links">
            <a href="service">headerMenu</a>

        </div>
    </div>
</nav>


<style>
    .toggle-button {
        display: block;
        border: none;
        border-right: 1px solid #000;
        background-color: transparent;


        @media (hover: hover) and (pointer: fine) {
            &:hover {
                background-color: var(--color-accent);
            }
        }
    }
</style>