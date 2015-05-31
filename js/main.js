$(document).ready(function () {
	$('#photo-gallery .item').nivoLightbox();

	function equalHeight () {
	    var biggestHeight = 0;
	    $('#photo-gallery .item img').each(function () {
	        if($(this).height() > biggestHeight) {
	            biggestHeight = $(this).height();  
	        }  
	    });
	    $('#photo-gallery .item').height(biggestHeight); 
	}
	
	$(window).resize(function () {
		$('#photo-gallery .item').removeAttr('style');
		equalHeight();
	});

	$('#photo-gallery .item').removeAttr('style');
	equalHeight();
	var counter = 0;
	var interval = setInterval(function(){
		if ($('#photo-gallery .item').height() == 0 && counter <= 10) {
			$('#photo-gallery .item').removeAttr('style');
			equalHeight();
			counter++;
		}
		else {
			clearInterval(interval);
		}
	}, 1000);

	setTimeout(function () {
		$('.banner .text small').addClass('active');
	}, 800);
});
var commonTest = {
	init: function () {
		var self = this;
		this.form = $('#commonTest form');
		this.submit = this.form.find('button');
		this.inputs = this.form.find('input:radio');
		this.inputGroups = [];
		this.form.find('li').each(function (index, element) {
			self.inputGroups.push($(this).find('input:radio'));
			self.inputs.on('click', function () {
				if (self.isReady()) {
					self.submit.removeAttr('disabled');
				}
			});
		});
	},
	isReady: function () {
		for (var i = 0; i < this.inputGroups.length; i++) {
			var z = 0;
			for (var t = 0; t < this.inputGroups[i].length; t++) {
				if ($(this.inputGroups[i][t]).prop('checked')) z++;
			}
			if (!z) {
				console.debug('false');
				return false;
			}
		}
		console.debug('true');
		return true;
	},
	checkTest: function () {
		this.answers = ['1A', '2A', '3B', '4C', '5B', '6C', '7A', '8B', '9C', '10A'];
		function check (element, index, array) {
			return $('#' + element).prop('checked');
		}
		if (this.answers.every(check))
			$('#commonTestSuccess').modal('show');
		else
			$('#commonTestFailed').modal('show');
	},
	reset: function () {
		this.inputs.each(function () {
			$(this).attr('checked', false);
		});
		this.submit.attr('disabled', true);
	}
}
/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});