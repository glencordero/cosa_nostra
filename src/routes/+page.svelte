<script>
    export let data
    const {myAddress} = data
</script>

<h1>Welcome to La Cosa Nostra</h1>
      <p>Visit us at: </p>
        <address>
          <p>{myAddress.street}</p>
          <p>{myAddress.city}, {myAddress.state} {myAddress.zipCode}</p>
        </address>
      