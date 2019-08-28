import * as React from 'react';
import classNames from 'classnames';
import { useRef } from 'react';
import { DataType } from '../../../data/ProjectData';

const styles = require('./ImageGallery.scss');

type ImageGalleryProps = {
    visible: boolean;
    project: DataType;
    handleClose: any;
    images?: Array<{
        image: string;
        thumbnail: string;
        caption?: string;
    }>;
};

export const ImageGallery = ({
    images,
    project,
    visible,
    handleClose
}: ImageGalleryProps) => {
    const contentRef = useRef(null);
    const [image, setImage] = React.useState<React.ReactNode>(null);

    const handleClickOutside = (event: any) => {
        if (
            contentRef.current &&
            // @ts-ignore
            event.target.className === contentRef.current.className
        ) {
            handleClose();
        }
    };

    return (
        <div
            onClick={handleClickOutside}
            className={classNames(
                styles.background,
                visible ? styles.backgroundVisible : styles.backgroundInvisible
            )}
        >
            <div className={styles.gallery} ref={contentRef}>
                <div className={styles.images}>{renderImage(project)}</div>
                <button
                    onClick={console.log}
                    className={classNames(styles.arrow, styles.arrowLeft)}
                >
                    ❮
                </button>
                <button
                    onClick={console.log}
                    className={classNames(styles.arrow, styles.arrowRight)}
                >
                    ❯
                </button>
                <button onClick={handleClose} className={styles.closeBtn}>
                    &times;
                </button>
                <ImageGalleryFooter id={project.id} handleClick={console.log} />
            </div>
        </div>
    );
};

type ImageGalleryFooterType = {
    id: number;
    handleClick: (e: any) => void;
};

const ImageGalleryFooter = ({ id, handleClick }: ImageGalleryFooterType) => {
    const handleClickWrapper = () => {
        handleClick(id);
    };

    return (
        <div className={styles.thumbnails}>
            <img
                onClick={handleClickWrapper}
                src="http://placehold.it/125x80"
                alt=""
            />
            <img
                onClick={handleClickWrapper}
                src="http://placehold.it/125x80"
                alt=""
            />
        </div>
    );
};

const renderImage = ({ id }: any) => {
    return <img src={require(`../../../img/gal-${id}.png`)} alt="Picture" />;
};
