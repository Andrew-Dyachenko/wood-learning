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
var test1 = {
	init: function () {
		var self = this;
		this.form = $('#test1 form');
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
				return false;
			}
		}
		return true;
	},
	checkTest: function () {
		this.answers = ['1-1A', '1-2A', '1-3B', '1-4C', '1-5B', '1-6C', '1-7A', '1-8B', '1-9C', '1-10A'];
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
};
var test2 = {
	init: function () {
		var self = this;
		this.form = $('#test2 form');
		this.submit = this.form.find('button');
		this.inputs = this.form.find('input');
		this.inputGroups = [];
		this.form.find('li').each(function (index, element) {
			self.inputGroups.push($(this).find('input'));
			self.inputs.on('click', function () {
				console.debug(self.isReady());
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
				return false;
			}
		}
		return true;
	},
	checkTest: function () {
		this.answers = ['2-1B', '2-1D', '2-2A', '2-3B', '2-4C', '2-4D', '2-5C', '2-6C', '2-7A', '2-8C', '2-9A', '2-10C'];
		function check (element, index, array) {
			return $('#' + element).prop('checked');
		}
		if (this.answers.every(check))
			$('#propertiesTestSuccess').modal('show');
		else
			$('#propertiesTestFailed').modal('show');
	},
	reset: function () {
		this.inputs.each(function () {
			$(this).attr('checked', false);
		});
		this.submit.attr('disabled', true);
	}
};
/**commonTest
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