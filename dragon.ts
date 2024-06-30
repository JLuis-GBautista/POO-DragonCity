export type RarezaType = 'comun' | 'raro' | 'epico' | 'legendario';
export type ElementsType = 'Agua' | 'Fuego' | 'Planta';
export type ElementsAttackType = 'Agua' | 'Fuego' | 'Planta' | 'Basico';
export interface Attack {
    id: string;
    name: string;
    damage: number;
    element: ElementsAttackType;
}