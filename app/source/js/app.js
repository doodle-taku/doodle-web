var paths = [
	{
		from: './app/source/images/**/*',
		to: './app/public/images'
	}, {
		from: './app/source/fonts/**/*',
		to: './app/public/fonts'
	}, {
		from: './app/source/js/**/*',
		to: './app/public/js'
	}, {
		from: './app/source/plugins/**/*',
		to: './app/public/plugins'
	}
];


var paths = {
	mark_base: {
		from: 'M249.653,132.575c-5.624-1.788-17.369-10.077-22.494-7.151c-10.498,5.991-15.167,35.846-10.818,47.124c1.849,4.796,11.964,10.206,16.862,11.763c4.898,1.558,16.28,2.983,20.56,0.136c10.063-6.695,23.494-33.765,18.384-44.719C269.653,134.38,255.277,134.363,249.653,132.575z',
		to: 'M115.652,0 0,0 19.449,236.11 115.652,266 211.855,236.11 231.305,0'
	},
	mark_D: {
		from: '',
		to: ''
	},
	mark_shadow: {
		from: '',
		to: ''
	},
	o1: {
		from: '',
		to: ''
	},
	o2: {
		from: '',
		to: ''
	},
	d: {
		from: '',
		to: ''
	},
	l: {
		from: '',
		to: ''
	},
	e: {
		from: '',
		to: ''
	}
}

window.onload = function(){
	var speed = 2000;

	var svg = Snap(600,300).remove().attr({viewBox: [0, 0, 600, 300]});
	//.path(pathString,segmentArray)：図形の描画
	var path = svg.path(paths.mark_base.from).attr({fill: '#6da500'});
	svg.click(function() {
		path.stop().attr({
			path: paths.mark_base.from,
			fill: '#6da500'
		}).animate({
			path: paths.mark_base.to,
			fill: '#6dccc6'
		}, speed);
	});
	svg.prependTo(container);
};
