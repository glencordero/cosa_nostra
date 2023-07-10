<script>
    let samplePoll = {
    question: "Who is the best basketball player of all time?",
    options: [
        {
            option: "Michael Jordan",
            votes: 25,
            id: 1
        },
        {
            option: "Magic Johnson",
            votes: 13,
            id: 2
        },
        {
            option: "Larry Bird",
            votes: 9,
            id: 3
        },
        {
            option: "Lebron James",
            votes: 17,
            id: 4
        },
    ]
}

function totalVotes(){
    return samplePoll.options.reduce((accumulator, option) => accumulator + option.votes, 0)
}

</script>

<div class='poll'>
    <h3>Who is the best basketball player of all time?</h3>
    <div class='options'>
    {#each samplePoll.options as option, index}
        <div id={option.id} class='option'>{option.option} <progress value={option.votes} max={totalVotes()} class="poll-result"></progress><span class="percent">{(option.votes/totalVotes()*100).toFixed(1)}%</span></div>
    {/each}
    </div>
   
</div>



<style>
    .poll-result{
        background: #f3f3f3;
        border: 1px solid #bbb;
        height: 20px;
        width: 200px;
    }

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

    progress{
        float: right;
    }

    .percent{
        float: right;
        color: red;
        margin-right: 4px;
    }

</style>