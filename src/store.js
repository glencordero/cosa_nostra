import { writable } from "svelte/store";

const services = [
    {type:"Persuasion", description:"Sometimes, it's good to have the scales tipped in your favor.  Our professionals in interpersonal communication will help ensure your vision has a chance to grow.", price: 1000, pic:"https://www.eightieskids.com/wp-content/uploads/2020/10/mbdrabu_ec008-1024x682.jpg"},
    {type:"Protection", description:"The competition will do anything to get ahead, and that's why you need to be a step ahead of them. Our enforcers will ensure the safety of your most prized assets.", price: 2000, pic:"https://www.motionpictures.org/wp-content/uploads/2023/03/JW4_Unit_210714_00374_R-1024x577.jpg"},
    {type:"Trash Removal", description:"Our cleanup team keeps things spotless - as if you were never there.", price: 2500, pic:"https://miro.medium.com/v2/resize:fit:1400/1*SOmFaCZ7q6M7NGyYmEK9pQ.jpeg"},
    {type:"Asset Reallocation ", description:"Banks fail. Accounts close. Let us ensure that you get what's coming to you - in every sense of the word.", price: 3000, pic:"https://cdn.hswstatic.com/gif/racketeering-1.jpg"}
  ]

function _getServiceByIndex(index){
    return services[index]
}

function createServices() {
    const { subscribe, set, update } = writable(services);

    return {
        subscribe,
        getServiceByIndex: _getServiceByIndex
    };
}

export const servicesStore = createServices();  