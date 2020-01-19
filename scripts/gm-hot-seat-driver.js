Hooks.on("controlToken", (token, isControlled) => {
	  let gameSettingsEnabled = game.settings.get('foundry-hot-seat-observer', 'hotSeatObserver') && game.settings.get('foundry-hot-seat-observer', 'toggleGMSelect');
	  let tokenViableForChange = token.actor && token.actor.isPC;
      if (gameSettingsEnabled && tokenViableForChange && game.user.isGM === true) {
	        let hotSeatPlayerName = game.settings.get('foundry-hot-seat-observer', 'hotSeatPlayerName')
            let hotSeatPlayerUser = game.users.players.find(t => t.name === hotSeatPlayerName);

            if(hotSeatPlayerUser && isControlled){
               hotSeatPlayerUser.update({character: token.actor.id});
               //Hooks.callAll("test", token, hotSeatPlayerUser);

               let updateData = {
               	    user: hotSeatPlayerUser,
               	    token: token
               }

               let options = {};

               SocketInterface.trigger('updateToken', {data: updateData});
            }
            else if(hotSeatPlayerUser && !isControlled){
                
            }
            //let.game


      	

      }
});


Hooks.on("updateToken", (data) => {

	let x = 2;
});
