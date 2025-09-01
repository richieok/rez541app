<script>
    import RoomCards from "$lib/components/RoomCards.svelte";

    const bookingData = [
        {
            id: 1,
            name: "Superior Room",
            price: "N100,000",
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            ],
        },
        {
            id: 2,
            name: "2 bedroom suite",
            price: "N150,000",
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            ],
        },
        {
            id: 3,
            name: "3 bedroom suite",
            price: "N250,000",
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            ],
        },
        {
            id: 4,
            name: "4 bedroom Flat",
            price: "N300,000",
            images: [
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
            ],
        },
    ];
</script>

<svelte:head><title>Bookings</title></svelte:head>
<div class="room-wrapper">
    {#each bookingData as aptInfo}
        <RoomCards name={aptInfo.name} images={aptInfo.images} price={aptInfo.price} id={aptInfo.id}/>
    {/each}
</div>

<style>
    .room-wrapper {
        --pg-height: clamp(500px, calc(100vh - var(--header-height)), 800px);
        --gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        padding: var(--gap) 0;
        min-height: var(--pg-height);
        justify-content: center;
        /* place-content: center; */
        container-type: inline-size;
        gap: var(--gap);
    }

    .room-card {
        grid-template-rows: auto auto 1fr;
        width: 350px;
        height: 480px;
        background-color: lightgray;

        > h1,
        h2,
        h3,
        p {
            padding: 0 1rem;
        }
    }
</style>
