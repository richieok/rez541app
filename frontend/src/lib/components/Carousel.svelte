<script>
    import { browser } from '$app/environment';
    let { images = [], id } = $props();

    if (browser){

    }
</script>

<div class="carousel-container">
    <a href="#prev" aria-label="Previous">&#10094;</a>
    <div class="carousel">
        {#each images as image (image)}
            <div class="card">
                <a href="/room/{id}">
                    <img src={image} alt="Carousel image" />
                </a>
            </div>
        {/each}
    </div>
    <a href="#next" aria-label="Next">&#10095;</a>
</div>

<style>
    .carousel-container {
        position: relative;
        aspect-ratio: 1;

        > a:any-link {
            position: absolute;
            display: block;
            text-decoration: none;
            padding: 0.8rem;
            /* background-color: rgba(197, 201, 202, 0.901); */
            background-color: rgb(122, 102, 186);
            border-radius: 40%;
            color: white;
            font-weight: bold;
        }

        > a:first-of-type {
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
        }

        > a:last-of-type {
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .carousel {
        width: 100%;
        height: 100%;
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }

    .card {
        flex: 0 0 100%;
        padding: 0 1rem 1rem;
        scroll-snap-align: center;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }

        > div {
            background-color: lightskyblue;
            height: 100%;
        }
    }
</style>
