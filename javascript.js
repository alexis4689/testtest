	Array.prototype.forEach.call(document.querySelectorAll('.key li'), function(li){
			li.addEventListener('mouseenter', function(){
				document.body.classList.add('hover-'+this.className);
			});
			li.addEventListener('mouseleave', function(){
				document.body.classList.remove('hover-'+this.className);
			});
		});
