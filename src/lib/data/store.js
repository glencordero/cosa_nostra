import { writable } from "svelte/store";
// import { gangsters } from "./data.ts";

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
        getServiceByIndex: _getServiceByIndex,
        add: (service) => update(services => {
            // console.log("clicked button")
            return [...services, service]
          })
    };
}

export const servicesStore = createServices();  

export const gangstersStore = writable([
    {name:"Charles Luciano", bio:"AKA Lucky, was a major figure in establishing Las Vegas. Born in Sicily but raised in Manhattan's Lower East Side, Luciano facilitated the killings of the city's top two Mafia bosses and brought about fundamental changes to organized crime, setting up the Five Families to rule New York and establishing a National Crime Syndicate.", pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/LuckyLucianoSmaller.jpeg/220px-LuckyLucianoSmaller.jpeg", hallOfFame: false},
    {name:"John Gotti", bio:"AKA Teflon Don, was the head of the Gambino Crime family and one of the most high-profile mobsters ever - an American organized-crime boss whose flamboyant lifestyle and frequent public trials made him a prominent figure in the 1980s and '90s.", pic:"https://wallpapers.com/images/featured/zfktht3h8t0minn9.jpg", hallOfFame: false},
    {name:"Al Capone", bio:"AKA Scarface, was the leader of the Chicago Outfit and alleged mastermind of the St. Valentine's Day Massacre. He was the leader of an organized crime gang in Chicago in the 1920s during the Prohibition era. He became famous for both his criminal activity as well as his donations to charity. He was seen as a 'Robin Hood' figure by many poor people of the time.", pic:"https://static.tvtropes.org/pmwiki/pub/images/al_capone.jpg", hallOfFame: false},
    {name:"Joseph Bonanno", bio:"AKA Joe Bananas, was a crime boss of the Bonanno crime family, which he ran from 1931 to 1968. An Italian-American mobster, businessman, and racketeer, he served as the boss of the Bonanno crime family for three decades following the Castellamarese War. He was also involved in the Commission since its inception.", pic:"https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/10/joseph-bonanno-leaving-federal-court.jpg", hallOfFame: false},
    {name:"Frank Costello", bio:"A high profile mobster, known for his tight-lipped testimony and denial of mob existence during the national mafia trials. Costello was an influential mobster who survived several Mob wars, government scrutiny, and an assassination attempt to control the powerful national Commission of Mafia bosses founded by Lucky Luciano.", pic:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Frank_Costello_-_Kefauver_Committee.jpg", hallOfFame: false}
  ])



