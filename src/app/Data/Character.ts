export class Character {

    constructor(
       public id: number,
       public type: string,
       public name : string,
       public armorClass: number,
       public hitPoints: number,
       public hasJewel: boolean,
       public hasRing: boolean,
       public hasSword: boolean,
       public currentRoom: number,
    ){}
}

