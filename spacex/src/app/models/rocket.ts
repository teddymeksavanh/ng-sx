import { FirstStage } from './firststage';
import { SecondStage } from './secondstage';

export class Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
    second_stage: SecondStage;
}