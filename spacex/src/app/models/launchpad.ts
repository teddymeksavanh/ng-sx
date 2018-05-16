import { Location } from './location';

export interface Launchpad {
    id: string;
    full_name: string;
    status: string;
    location: Location;
    vehicles_launched: string[];
    details: string;
}