import * as React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const styles = require('./Gallery.scss');
import { Data } from '../../../data/ProjectData';

export const Gallery = () => {
    const galleryItems: any[] = [];
    Array.from(Array(14).keys()).forEach(i => {
        i++;
        galleryItems.push(<GalleryItem key={i} i={i} />);
    });

    return (
        <section className={classNames(styles.mainContent, styles.gallery)}>
            {galleryItems}
        </section>
    );
};

type GalleryItemProps = {
    i: number;
};

const GalleryItem = ({ i }: GalleryItemProps) => {
    const { name = `Projekt-${i}` } =
        Data.data.find(({ id }) => id === i) || {};
    return (
        <figure
            className={classNames(
                styles['gallery-item'],
                styles[`gallery-item-${i}`]
            )}
        >
            <img
                className={classNames(styles.galleryImg)}
                src={require(`../../../img/gal-${i}.png`)}
                alt={`Gallery Item ${i}`}
            />
            <figcaption className={styles.galleryItemCaption}>
                <NavLink to={`/project/${i}`}>{name}</NavLink>
            </figcaption>
        </figure>
    );
};

