import { Rocket } from './rocket';
import { Reuse } from './reuse';
import { Telemetry } from './telemetry';
import { LaunchSite } from './launchsite';
import { Links } from './links';

export class RootObject {
    flight_number: number;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    rocket: Rocket;
    reuse: Reuse;
    telemetry: Telemetry;
    launch_site: LaunchSite;
    launch_success: boolean;
    links: Links;
    details: string;
}