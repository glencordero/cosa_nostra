<script>
    let samplePoll = {
        question: "Who is the best basketball player of all time?",
        options: [
            {
                option: "Michael Jordan",
                votes: 0,
                id: 1
            },
            {
                option: "Magic Johnson",
                votes: 0,
                id: 2
            },
            {
                option: "Larry Bird",
                votes: 0,
                id: 3
            },
            {
                option: "Lebron James",
                votes: 0,
                id: 4
            },
        ]
    }

    function handleClick(event){
        // add vote to appropriate object
        let selectedOption = samplePoll.options.find(option => option.id == event.target.id)
        if (selectedOption){
            selectedOption.votes += 1
        }
    }

</script>

<div class='poll'>
    <h3>Who is the best basketball player of all time?</h3>
    <div on:click|once={handleClick} class='options'>
    {#each samplePoll.options as option, index}
        <div id={option.id} class='option'>{option.option}</div>
    {/each}
    </div>
   
</div>

<style>
    .poll{
        margin-left: 20px;
        border: 1px solid grey;
        width: 400px;
        padding: 12px;
        border-radius: 12px;
    }

    .option{
        border: 1px solid grey;
        margin-bottom: 20px;
        padding: 12px;
        font-size: 1.2em;
        border-radius: 4px;
    }

    .option:hover{
        background-color: blue;
        color: white;
    }
</style>
