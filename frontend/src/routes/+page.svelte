<script>
    import Hero from "./Hero.svelte";
</script>

<svelte:head><title>Home</title></svelte:head>

<Hero />
<div class="section">
    <div class="x-layout">
        <div class="img-frame pos-1">
            <img
                src="https://images.unsplash.com/photo-1664186771971-2eaca0576c6c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </div>
        <div class="img-frame pos-3">
            <img
                src="https://images.unsplash.com/photo-1625244695851-1fc873f942bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </div>
        <div>
            <p class="message">
                At Residence 541, we believe our guest deserve more than just a
                place to stay, they deserve a great experience. From therapeutic
                spa treatments to personalized services, we've created a space
                where memories are made and spirits are renewed.
            </p>
        </div>
    </div>
</div>

<style>
    .section {
        height: max(calc(100vh - var(--header-height)), 500px);
        padding: 0.5em 0;
        container-type: inline-size;
    }

    .img-frame {
        width: 100%;
        height: 100%;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }

    .x-layout {
        display: grid;
        gap: 0.5rem;
        height: 100%;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: auto 1fr;
        font-family: "Poppins", sans-serif;
        overflow: hidden;
    }

    .pos-1 {
        display: none;
    }

    .pos-3 {
        grid-column: 1 / span 2;
        grid-row: 2 / span 1;
        > img {
            object-position: bottom center;
        }
    }

    div:has(> .message) {
        display: grid;
        grid-column: 1 / span 2;
        place-content: center;
        padding: 1rem 0;
    }

    .message {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.4;
        text-align: center;
        padding: 0 1rem;
    }

    @container (width > 700px) {
        .pos-1 {
            display: block;
            grid-column: 1 / span 1;
            grid-row: 1 / span 2;
        }

        .pos-3 {
            grid-column: 2 / span 1;
            grid-row: 2 / span 1;
        }
        div:has(> .message) {
            grid-column: 2 / span 1;
            grid-row: 1 / span 1;
        }
    }
</style>
