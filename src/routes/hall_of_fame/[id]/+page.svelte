<script>
    import { gangstersStore } from "$lib/data/store";
    import {page} from "$app/stores";
    import Gangster from "../../../components/Gangster.svelte" 
    // get gangster for corresponding id
    let gangster = $gangstersStore[$page.params.id]
</script>

<Gangster {gangster}>

</Gangster>