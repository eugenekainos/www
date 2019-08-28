import * as React from 'react';
import { Data, DataType } from '../../../data/ProjectData';
import classNames = require('classnames');
import { ImageGallery } from '../ImageGalery/ImageGallery';

const styles = require('./Project.scss');

export type ProjectProps = {
    project: DataType;
};

type ProjectManagerProps = {
    location?: string;
};

export const Project = ({ project }: ProjectProps) => {
    const [galleryVisible, renderGallery] = React.useState(false);
    const hideGallery = (e: any) => renderGallery(false);
    const showGallery = (e: any) => renderGallery(true);

    return (
        <>
            <div className={styles.project}>
                <ImageCompilation onClick={showGallery} {...project} />
                <p>{project.description}</p>
            </div>
            <ImageGallery
                project={project}
                visible={galleryVisible}
                handleClose={hideGallery}
            />
        </>
    );
};

const ImageCompilation = ({ id, name, onClick }: any) => {
    return (
        <div onClick={onClick} className={styles.collage}>
            <img
                className={classNames(styles.img, styles.imgPrimary)}
                src={require(`../../../img/gal-${id}.png`)}
                alt={name}
            />
            <img
                className={classNames(styles.img, styles.imgSecondary)}
                src={require(`../../../img/gal-${id}.png`)}
                alt={name}
            />
            <img
                className={classNames(styles.img, styles.imgTertiary)}
                src={require(`../../../img/gal-${id}.png`)}
                alt={name}
            />
        </div>
    );
};

export const ProjectManager = (
    { match: { params } }: any,
    props: ProjectManagerProps
) => {
    const { project } = useProjectsEffect(params.id);
    return (
        <div className={styles.wrapper}>
            {project ? <Project project={project} /> : null}
        </div>
    );
};

const useProjectsEffect = (projectId: number) => {
    const [project, setProject] = React.useState<DataType>();

    React.useEffect(() => {
        if (projectId) setProject(Data.data.find(({ id }) => id == projectId));
        return () => {};
    }, [projectId]);

    return {
        project
    };
};
