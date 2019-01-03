/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { TextControl, PanelBody } = wp.components;

/**
 * Register example block
 */
export default registerBlockType(
    'jsforwpadvblocks/meta-box',
    {
        title: __( 'Example - Meta Box', 'jsforwpadvblocks' ),
        description: __( 'An example of how to build a block with a meta box field.', 'jsforwpadvblocks'),
        category: 'common',
        icon: {
            background: 'rgba(254, 243, 224, 0.52)',
            src: icon,
        },         
        keywords: [
            __( 'Meta', 'jsforwpadvblocks' ),
            __( 'Custom field', 'jsforwpadvblocks' ),
            __( 'Box', 'jsforwpadvblocks' ),
        ],
        attributes: {
            text: {
                type: 'string',
                source: 'meta',
                meta: 'jsforwpadvblocks_gb_metabox',
            },
        },
        edit: props => {
            const { attributes: { text }, className, setAttributes } = props;
            return [
                <InspectorControls>
                    <PanelBody>
                        <TextControl
                            label={ __( 'Meta box', 'jsforwpadvblocks' ) }
                            value={ text }
                            onChange={ text => setAttributes( { text } ) }
                        />
                    </PanelBody>
                </InspectorControls>,                
                <div className={ className } >
                    <p>{ __( 'Check the meta', 'jsforwpadvblocks' ) }</p>
                </div>
            ];
        },
        save: props => {
            return (
                <p>{ __( 'Check the meta', 'jsforwpadvblocks' ) }</p>
            );
        },
    },
);
