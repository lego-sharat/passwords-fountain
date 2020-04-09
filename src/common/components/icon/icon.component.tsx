import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './icon.styles';
import { IconName, icons } from '@/assets/icons';

export const Icon: TypedComponent<Props> = ({
    name,
    width = 100,
    height = 100,
}: Props) => {
    return (
        <Wrapper src={icons[name]} width={width} height={height} alt="icon" />
    );
};

interface Props {
    name: IconName;
    width?: number;
    height?: number;
}

Icon.propTypes = {
    name: PropTypes.any.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};
