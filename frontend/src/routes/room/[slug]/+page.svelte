<script>
    let { data } = $props();

    let bookingDialog;

    function openDialog() {
        bookingDialog.showModal();
    }

    function closeDialog() {
        bookingDialog.close();
    }

    // let formData = $state({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     id: data.room.roomId
    // });

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        const formData = new FormData(e.target);
        const res = await fetch("/api/booking", {
            method: "POST",
            body: formData
        })
        if (res.ok){
            alert("Booking successful!")
            closeDialog()
        } else {
            alert("Booking failed. Please try again.")
        }
        // Handle form submission here
        // alert(
        //     `Submitted: ${formData.firstName} ${formData.lastName} (${formData.email}) ${formData.roomId}`,
        // );
    }
</script>

<svelte:head><title>Room Details</title></svelte:head>
<dialog bind:this={bookingDialog}>
    <form onsubmit={handleSubmit}>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                required
            />
        </div>

        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                required
            />
        </div>

        <div class="form-group">
            <label for="email">Email Address</label>
            <input
                type="email"
                name="email"
                required
            />
        </div>
        <input type="hidden" name="roomId" value="{data.room.roomId}">

        <button type="submit">Submit</button>
        <button onclick={closeDialog}>Close</button>
    </form>
</dialog>

<div class="room-details fade-in">
    <div class="rm-carousel-wrapper"></div>
    <div class="rm-info-wrapper">
        <button onclick={openDialog}>Book</button>
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
    dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        padding: 2rem;
        border: none;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        width: 90%;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
    }
    form {
        max-width: 400px;
        margin: 0 auto;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

    input:focus {
        outline: none;
        border-color: #0066cc;
        box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
    }

    dialog button {
        padding: 0.75rem;
        background-color: #0066cc;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
    }

    dialog button:hover {
        background-color: #0052a3;
    }
</style>
