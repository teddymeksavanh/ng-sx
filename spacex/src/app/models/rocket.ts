export class Height {
    meters: number;
    feet: number;
}

export class Diameter {
    meters: number;
    feet: number;
}

export class Mass {
    kg: number;
    lb: number;
}

export class PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

export class ThrustSeaLevel {
    kN: number;
    lbf: number;
}

export class ThrustVacuum {
    kN: number;
    lbf: number;
}

export class FirstStage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: ThrustSeaLevel;
    thrust_vacuum: ThrustVacuum;
}

export class Thrust {
    kN: number;
    lbf: number;
}

export class Height2 {
    meters: number;
    feet: number;
}

export class Diameter2 {
    meters: number;
    feet: number;
}

export class CompositeFairing {
    height: Height2;
    diameter: Diameter2;
}

export class Payloads {
    option_1: string;
    option_2: string;
    composite_fairing: CompositeFairing;
}

export class SecondStage {
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust: Thrust;
    payloads: Payloads;
}

export class ThrustSeaLevel2 {
    kN: number;
    lbf: number;
}

export class ThrustVacuum2 {
    kN: number;
    lbf: number;
}

export class Engines {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: ThrustSeaLevel2;
    thrust_vacuum: ThrustVacuum2;
    thrust_to_weight: number;
}

export class LandingLegs {
    number: number;
    material: string;
}

export class Rocket {
    id: string;
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: Height;
    diameter: Diameter;
    mass: Mass;
    payload_weights: PayloadWeight[];
    first_stage: FirstStage;
    second_stage: SecondStage;
    engines: Engines;
    landing_legs: LandingLegs;
    description: string;
}
