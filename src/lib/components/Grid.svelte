<script>
    export let columns = 2;
    export let rowGap = "1.5rem";
</script>

<div
    class="grid"
    style="
        --columns: {columns};
        --row-gap: {rowGap};
    ">
    <slot></slot>
</div>

<style>
    .grid {
        grid-row-gap:var(--row-gap);
    }
</style>