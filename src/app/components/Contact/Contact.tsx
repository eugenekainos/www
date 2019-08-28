import * as React from 'react';

const styles = require('./Contact.scss');


type ContactProps = {};

export const Contact = (props: ContactProps) => {
    return (
        <section className={styles.content}>
            <ContactImage caption={"contact"} />
        </section>
    );
};

type ContactImageProps = {
    caption: string;
};

const ContactImage = (props: ContactImageProps) => {
    return (
        <figure className={styles.profile}>
            <img
                className={styles.profileImage}
                alt="Dorota Koszacka"
                src={require('../../../img/profile.jpeg')}
            />
            <figcaption className={styles.profileCaption}>
                {props.caption}
            </figcaption>
        </figure>
    );
};
