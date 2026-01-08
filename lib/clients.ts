export type TClientData = {
    path:string;
    title: string,
    description:string ,
    business_name:string,
    logo: string,
    address1:string ,
    address2: string,
    phone: string,
    email: string[],
    google_map: string,
    type: 'event_planer',
    logo_alt: string,
}

export const client_data :TClientData[]= [
{
    path:'/dreamevent',
    title: 'DreamEvent Title',
    description:'DreamEvent Description' ,
    business_name:'DreamEvent' ,
    logo: '/logo/logo.png',
    logo_alt: 'DreamEvent',
    address1:'123 Event Boulevard, Suite 400' ,
    address2: 'San Francisco, CA 94107',
    phone: '(555) 123-4567',
    email: ['info@dreamevents.com','support@dreamevents.com'],
    google_map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0981381969364!2d-122.39899368469355!3d37.778842579755985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0xcfd1a22ff16ed378!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1651111407993!5m2!1sen!2sus',
    type: 'event_planer', //event planer, printer ....

}

]