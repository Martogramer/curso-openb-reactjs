import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    
    const defaultContact = new Contact('Carlitos', 'Carloni', 'carlitos@carloni.es', true);
    
    return (
        <div>
            <div>
                <h1>
                    Contact:
                </h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
        
    );
};



export default ContactListComponent;
