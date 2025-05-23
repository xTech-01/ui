<script>
    export let columns = 2;
    export let columnGap = "3rem";
    export let rowGap = "1.5rem";
    export let wrapMode = "none";
    export let alignItems = "flex-start";
    export let size = "medium";

    export let templateColumns = "repeat(var(--columns), 1fr)";
</script>

<div
    class="grid"
    class:small={size === "small"}
    class:medium={size === "medium"}
    class:large={size === "large"}
    style="
        --columns: {columns};
        --column-gap: {columnGap};
        --row-gap: {rowGap};
        --wrpped-columns: {wrapMode === 'single' ? 1 : (wrapMode === 'half' ? Math.ceil(columns / 2) : columns)};
        --align-items: {alignItems};
        --template-columns: {templateColumns};
    ">
    <slot></slot>
</div>

<style>
    .grid {
        grid-column-gap: var(--column-gap);
        grid-row-gap:var(--row-gap);
        margin-bottom: var(--margin-bottom);
        grid-template-rows: auto auto;
        grid-template-columns: var(--template-columns);
        grid-auto-columns: 1fr;
        display: grid;
        align-items: var(--align-items);
    }

    @media (max-width: 480px) {
        .grid.small {
            grid-template-columns: repeat(var(--wrapped-columns), 1fr);
        }
    }

    @media (max-width: 780px) {
        .grid.medium {
            grid-template-columns: repeat(var(--wrapped-columns), 1fr);
        }
    }

    @media (max-width: 1024px) {
        .grid.large {
            grid-template-columns: repeat(var(--wrapped-columns), 1fr);
        }

        .grid {
            grid-template-columns: var(--lg-template-columns);
            column-gap: var(--lg-column-gap);
        }
    }
</style>