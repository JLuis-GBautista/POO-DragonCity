import { Attack, ElementsAttackType, ElementsType } from "./dragon";

export const ListAtacksDragon: Attack[] = [{
    id: 'ATK0',
    name: 'golpe',
    damage: 2,
    element: 'Basico'
}, {
    id: 'ATK1E0',
    name: 'Ataque1 Fuego',
    damage: 2,
    element: 'Fuego'
}, {
    id: 'ATK2E0',
    name: 'Ataque2 Fuego',
    damage: 4,
    element: 'Fuego'
}, {
    id: 'ATK3E0',
    name: 'Ataque3 Fuego',
    damage: 6,
    element: 'Fuego'
}, {
    id: 'ATK1E1',
    name: 'Ataque1 Agua',
    damage: 2,
    element: 'Agua'
}, {
    id: 'ATK2E1',
    name: 'Ataque2 Agua',
    damage: 4,
    element: 'Agua'
}, {
    id: 'ATK3E1',
    name: 'Ataque3 Agua',
    damage: 6,
    element: 'Agua'
},  {
    id: 'ATK1E2',
    name: 'Ataque1 Planta',
    damage: 2,
    element: 'Planta'
}, {
    id: 'ATK2E2',
    name: 'Ataque2 Planta',
    damage: 4,
    element: 'Planta'
}, {
    id: 'ATK3E2',
    name: 'Ataque3 Planta',
    damage: 6,
    element: 'Planta'
}];

export const EffectAttack = {
    Fuego: {
        strong: ['Planta'],
        weak: ['Agua']
    },
    Agua: {
        strong: ['Fuego'],
        weak: ['Planta']
    },
    Planta: {
        strong: ['Agua'],
        weak: ['Fuego']
    }
}

export const damgeForEffectAttack = (element: ElementsAttackType, elementVS: ElementsType, damageForNvlPower: number) => {
    switch (element) {
        case 'Basico':
                return damageForNvlPower;
        case 'Fuego':
            if(EffectAttack.Fuego.strong.includes(elementVS)) return damageForNvlPower * 1.5;
            else {
                if(EffectAttack.Fuego.weak.includes(elementVS)) return Math.round(damageForNvlPower / 1.5);
                else return damageForNvlPower;
            }
        case 'Agua':
            if(EffectAttack.Agua.strong.includes(elementVS)) return damageForNvlPower * 1.5;
            else {
                if(EffectAttack.Agua.weak.includes(elementVS)) return Math.round(damageForNvlPower / 1.5);
                else return damageForNvlPower;
            }
        case 'Planta':
            if(EffectAttack.Planta.strong.includes(elementVS)) return damageForNvlPower * 1.5;
            else {
                if(EffectAttack.Planta.weak.includes(elementVS)) return Math.round(damageForNvlPower / 1.5);
                else return damageForNvlPower;
            }
        default:
            throw new Error('El Ataque seleccionado es invalido.');
    }
}