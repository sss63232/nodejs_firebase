
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)


class Poker extends Phaser.Sprite {
	/**
	 * Poker
	 * @param {Phaser.Game} aGame A reference to the currently running game.
	 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
	 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
	 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
	 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
	 */
	constructor(aGame, aX, aY, aKey, aFrame) {
		super(aGame, aX, aY, aKey || 'poker', aFrame  == undefined || aFrame == null? 'card0.jpg' : aFrame);
		this.animations.add('poker', ['card0.jpg'], 60, true);
		
		// public fields
		
		this.fCard0_jpg = this;
		
	}
	
	/* sprite-methods-begin */
	// -- user code here --
	/* sprite-methods-end */
}
/* --- end generated code --- */
// -- user code here --
export default Poker;