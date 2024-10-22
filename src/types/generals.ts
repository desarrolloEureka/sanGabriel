export interface ItemType {
    id: number;
    estadoServicio: number;
    novedades?: any; 
    pasajero: {
        primer_nombre: string;
        primer_apellido: string;
    };
    horaRecogida: string;
    estadoAssing: string;
    novedad?: {
        nombre?: string;
    };
}

export interface ComponentServiceProps {
    item: ItemType;
    id: number;
    hasNovelty: any;
    estadoServicio: number;
    nombre: string;
    horaRecogida: string;
    estadoAssing: string;
    Novedad: string | undefined;
    handlePressDetails: (id: number, status: string) => void;
    handleVisibleNovedades: (id: any, estadoServicio: any, hasNovelty: any, item: any) => void;
    loadingReport: boolean;
    handlePressChat: (item: any, servicio_id: number) => void;
}