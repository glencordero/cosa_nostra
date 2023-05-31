<script>
    export let service
    let buttonRef;

    function handleClick() {
        console.log('Button clicked!');
    }

</script>

<div>
<h2>{service.type}</h2>
<img src={service.pic}>
<p>{service.description}</p>
<p>Cost: ${service.price}</p>
<button ref={buttonRef} on:click={handleClick}>Add to Cart</button>
</div>

<style>
    div {
        width: 500px;
        margin-bottom: 50px;
        margin-left: 25px;
        border: 1px solid gray;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2)
    }    
    img {
        width: 350px;
    }
    h2 {
        text-align: left;
    }
</style>