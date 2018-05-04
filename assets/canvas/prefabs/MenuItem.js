
// -- user code here --
import button from './button';

/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


class MenuItem extends Phaser.Group {
	set btnLabel(x) {
		console.warn(x);
	}
	/**
	 * MenuItem.
	 * @param {Phaser.Game} aGame A reference to the currently running game.
	 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.
    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
	 * @param {string} aName A name for this group. Not used internally but useful for debugging.
	 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
	 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
	 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
	 */
	constructor(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
		
		super(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
		
		var _background = new button(this.game, -1, -1);
		this.add(_background);
		
		var _text = this.game.add.text(91, 78, 'Button', {"font":"bold 20px Arial","align":"center"}, this);
		_text.pivot.setTo(33.0, 11.0);
		_text.anchor.setTo(0.5, 0.5);
		
		
		
		// public fields
		
		this.fBackground = _background;
		this.fText = _text;
		
	}
	
	/* group-methods-begin */
	// -- user code here --
	/* group-methods-end */
}
/* --- end generated code --- */
// -- user code here --
export default MenuItem;