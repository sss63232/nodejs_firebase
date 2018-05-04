
// -- user code here --
import button from './prefabs/button';
import MenuItem from './prefabs/MenuItem';

import Facade from '../../src/puremvc/core/patterns/facade/Facade';
/* --- start generated code --- */

// Generated by  1.4.4 (Phaser v2.6.2)


class Menu extends Phaser.State {
	
	/**
	 * Menu.
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
		this.add.sprite(-283, -96, 'bg');
		
		var _menu_dino = new button(this.game, 35, 24);
		_menu_dino.name = 'btnDino';
		this.add.existing(_menu_dino);
		
		var _menu_single = new button(this.game, 164, 164);
		_menu_single.name = 'btnSingle';
		this.add.existing(_menu_single);
		
		var _menu_multiple = new button(this.game, 38, 307);
		_menu_multiple.name = 'btnMultiple';
		this.add.existing(_menu_multiple);
		
		this.add.text(76, 75, 'Dino', {"font":"bold 20px Arial"});
		
		this.add.text(65, 361, 'Multiple', {"font":"bold 20px Arial"});
		
		this.add.text(195, 218, 'Single', {"font":"bold 20px Arial"});
		
		var _group = new MenuItem(this.game);
		_group.name = 'btnSlot';
		_group.position.setTo(174, 319);
		
		
		
		// public fields
		
		this.fMenu_dino = _menu_dino;
		this.fMenu_single = _menu_single;
		this.fMenu_multiple = _menu_multiple;
		// user code
		this.initObjects();
		Facade.getInstance('Game').sendNotification('GAME_SCENE_CHANGED');
		
	}
	
	/* state-methods-begin */
	initObjects() {
	}
	/* state-methods-end */
	
}
/* --- end generated code --- */
// -- user code here --
export default Menu;