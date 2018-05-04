
// -- user code here --
import Ball from './prefabs/Ball';
import Paddle from './prefabs/Paddle';
import Back from './prefabs/Back';
import Heart from './prefabs/Heart';

import Facade from '../../src/puremvc/core/patterns/facade/Facade';
/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)


class MultiPlayer extends Phaser.State {
	
	/**
	 * MultiPlayer.
	 */
	constructor() {
		
		super();
		
	}
	
	init() {
		
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
	}
	
	preload () {
		
	}
	
	create() {
		this.add.sprite(-350, -150, 'bg');
		
		var _hearts = this.add.group();
		
		var _heart_up = new Heart(this.game, 0, 197);
		_hearts.add(_heart_up);
		
		var _heart_down = new Heart(this.game, 0, 228);
		_hearts.add(_heart_down);
		
		var _paddles = this.add.group();
		
		var _paddle_down = new Paddle(this.game, 99, 424);
		_paddles.add(_paddle_down);
		
		var _paddle_up = new Paddle(this.game, 99, 1);
		_paddles.add(_paddle_up);
		
		var _texts = this.add.group();
		
		var _info_up = this.add.text(163, 131, 'infoText', {"font":"bold 20px Arial"}, _texts);
		_info_up.angle = -180.0;
		_info_up.anchor.setTo(0.5136601974184234, -0.07597359187585012);
		
		var _info_down = this.add.text(124, 321, 'infoText', {"font":"bold 20px Arial"}, _texts);
		
		var _backs = this.add.group();
		
		var _back = new Back(this.game, 235, 165);
		_backs.add(_back);
		
		this.add.text(272, 218, 'Back', {"font":"bold 20px Arial"}, _backs);
		
		var _ball = new Ball(this.game, 130, 365);
		this.add.existing(_ball);
		
		
		
		// public fields
		
		this.fHeart_up = _heart_up;
		this.fHeart_down = _heart_down;
		this.fPaddle_down = _paddle_down;
		this.fPaddle_up = _paddle_up;
		this.fInfo_up = _info_up;
		this.fInfo_down = _info_down;
		this.fBack = _back;
		this.fBall = _ball;
		// user code
		this.initObjects();
		Facade.getInstance('Game').sendNotification('GAME_SCENE_CHANGED');
		
	}
	
	/* state-methods-begin */
	// -- user code here --
	initObjects() {
		this.fPaddle_up.alignIn(this.game.world.bounds, Phaser.TOP_CENTER);
		this.fPaddle_down.alignIn(this.game.world.bounds, Phaser.BOTTOM_CENTER);
	}
	/* state-methods-end */
	
}
/* --- end generated code --- */
// -- user code here --
export default MultiPlayer;