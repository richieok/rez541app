<script>
    let { data } = $props();
</script>

<svelte:head><title>Room Details</title></svelte:head>
<div class="room-details">
    <div class="rm-carousel-wrapper"></div>
    <div class="rm-info-wrapper">
        <h2>{data.room.name}</h2>
        <div class="features-list">
            {#each data.room.features as feature}
                <span class="feature-tag">{feature}</span>
            {/each}
            <!-- <span class="feature-tag"> Free WiFi </span>
            <span class="feature-tag"> Queen Bed </span>
            <span class="feature-tag"> Kitchenette </span> -->
        </div>
    </div>
</div>

<style>
    .room-details {
        --nav-height: 3rem;
        --gap: 1rem;
        --pg-height: clamp(500px, calc(100vh - var(--header-height)), 800px);
        height: var(--pg-height);
        display: grid;
        gap: var(--gap);
        grid-template-rows: 60% 1fr;
        padding: var(--gap) 0;
        font-family: "Poppins", sans-serif;
    }
    .rm-carousel-wrapper {
        height: 100%;
        background-color: lightgray;
        grid-row: 1 / span 1;
    }

    .features-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .feature-tag {
        background: #f8f9fa;
        color: #495057;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 400;
        border: 1px solid #e9ecef;
    }
</style>
