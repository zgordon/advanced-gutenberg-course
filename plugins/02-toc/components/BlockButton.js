const { getBlockType } = wp.blocks;
const { BlockIcon } = wp.blockEditor;
const { Button } = wp.components;
const { select, dispatch, withSelect } = wp.data;

import classnames from 'classnames';

const BlockButton = ( { block, isBlockSelected } ) => {
	const blockType = getBlockType( block.name );
	return (
		<Button
			className={ classnames( 'components-button block-editor-block-navigation__item-button', {
				'is-selected': isBlockSelected,
			} ) }
			onClick={ () => dispatch( 'core/editor' ).selectBlock( block.clientId ) }
		>
			<BlockIcon icon={ blockType.icon } />
			<span className={ 'block-editor-block-navigation__item-button__block-label' }>
				{ blockType.title }
			</span>
		</Button>
	);
};

// export default BlockButton;
export default withSelect( ( select, ownProps ) => {
	const { clientId } = ownProps.block;
	return {
		isBlockSelected: select( 'core/editor' ).isBlockSelected( clientId ),
	};
} )( BlockButton );
