rate = 2
shape(4, () => (Math.sin(time * rate) + 1) * 0.5)
	.out(o1)
shape(50, () => (Math.cos(time * rate) + 1) * 0.5)
	.diff(o1)
	.kaleid(4)
	.rotate(Math.PI * 0.25)
	.repeat(4, 4)
	.out(o2)
osc(20, 0.5, 1)
	.diff(o2)
	.modulate(voronoi(15)
		.kaleid(5)
		.rotate(Math.PI * 0.5)
		.modulate(o0, 0.1))
	.out()