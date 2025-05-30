<script lang="ts">
    import Grid from './Grid.svelte';
    import Accordion from './Accordion.svelte';

    import { onMount } from 'svelte';

    export let topic;
    export let title=null;

    const handleExpand = (id: string) => {
            history.replaceState(null, '', `#${id}`);
    }

    onMount(() => {
        const hash = window.location.hash;
        if (hash) {
            const label = document.querySelector<HTMLElement>(hash);
            if (label) {
                label.click();
            }
        }
    });
</script>

<div>
    <div class="header" id={(title ?? topic.title).toLowerCase().replace(/[^\w\s]/g, '').replaceAll(' ', '-')}>
        <h1>{title ?? topic.title}</h1>
    </div>
    <div class="questions">
        {#each topic.questions as entry}
            { @const id = entry.question.toLowerCase().replace(/[^\w\s]/g, '').replaceAll(' ', '-')}
            <Accordion on:click={() => handleExpand(id)} {id}>
                <div slot="label" class="label">
                    <span>{entry.question}</span>
                </div>
                <div class="details" slot="content">
                    {@html entry.answer}
                </div>
            </Accordion>
            <hr />
        {/each}
    </div>
</div>

<style>
    .header :global {
        display: inline-block;
        background-color: var(--color-accent);
        border-radius: 0.25rem;

        & h1 {
            margin: 0.75rem;
        }
    }


    .questions {
        & .label {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 1rem 0;
            margin-right: 0.75rem;
        }

        & .details :global {
            font-size: 1.25rem !important;
            line-height: 1.4;
            padding: 0.25rem 0 1rem;

            & *:first-child {
                margin-top: 0;
            }

            & *:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>