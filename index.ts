import { EffectAttack, ListAtacksDragon, damgeForEffectAttack } from "./atacks";
import { Attack, ElementsType, RarezaType } from "./dragon";

class Dragon {
    private nameDragon: string;
    private rarity: RarezaType;
    protected force: number = 10;
    protected life: number = 1000;
    constructor(nameDragon: string, rarity: RarezaType) {
        this.nameDragon = nameDragon;
        this.rarity = rarity
    }

    public getName() {return this.nameDragon};
    public getRarity() {return this.rarity};
}

class CustomDragon extends Dragon{
    private elements: ElementsType[];
    private attacks: Attack[];
    constructor(nameDragon: string, rarity: RarezaType, elements: ElementsType[], idsAttack: string[]) {
        super(nameDragon, rarity);
        if (elements.length > 4 && elements.length < 1) {
            throw new Error('El Dragon debe poseer de 1 a 4 elements.');
        }
        if (idsAttack.length != 4) {
            throw new Error('El Dragon debe poseer 4 ataques.');
        }
        this.elements = elements;
        this.attacks = this.generateAttacks(idsAttack);
    }

    private generateAttacks(idsAttack: string[]) {
        const listAttack: Attack[] = [];
        for (const atack of ListAtacksDragon) {
            for (const idAttack of idsAttack) {
                if (atack.id === idAttack) listAttack.push(atack);
            }
        }
        return listAttack;
    }

    public elementsDragon() {return this.elements}

    public receiveDamage(generateDamage: number) {
        this.life = this.life - generateDamage;
        return this.life;
    }

    public listAttacks() {return this.attacks}

    public generateDamage(attack: Attack, elementVS: ElementsType) {
        const rarity = this.getRarity();
        const damageForRarity = rarity === 'legendario' ? this.force * 1.5 : rarity === 'epico' ? this.force * 1.3 :
            rarity === 'raro' ? this.force * 1.2 : this.force;
        const damageForNvlPower = damageForRarity * attack.damage;
        return damgeForEffectAttack(attack.element, elementVS, damageForNvlPower);
    }
}


const FireDragon = new CustomDragon('Dragon Fuego', 'comun', ['Fuego'], ['ATK0', 'ATK1E0', 'ATK2E0', 'ATK3E0']);
const attacksFireDragon = FireDragon.listAttacks();
const WaterDragon = new CustomDragon('Dragon Agua', 'comun', ['Agua'], ['ATK0', 'ATK1E1', 'ATK2E1', 'ATK3E1']);
const attacksWaterDragon = WaterDragon.listAttacks();
const elementsFireDragon = FireDragon.elementsDragon();
const elementsWateDragon = WaterDragon.elementsDragon();
console.log(elementsFireDragon, ' VS ', elementsWateDragon);
console.log('ataques de dragon fuego: ', attacksFireDragon);
console.log('ataques de dragon agua: ', attacksWaterDragon);
const damageTotalFire = FireDragon.generateDamage(attacksFireDragon[3], elementsWateDragon[0]);
console.log(damageTotalFire)
const receiveDamageWaterDragon = WaterDragon.receiveDamage(damageTotalFire);
console.log('El dragon agua a recibido: ', damageTotalFire, ' Le quedan: ', receiveDamageWaterDragon, ' puntos de vida')
const damageTotalWater = WaterDragon.generateDamage(attacksWaterDragon[1], elementsFireDragon[0]);
console.log(damageTotalWater)
const receiveDamageFireDragon = FireDragon.receiveDamage(damageTotalWater);
console.log('El dragon fuego a recibido: ', damageTotalWater, ' Le quedan: ', receiveDamageFireDragon, ' puntos de vida')
