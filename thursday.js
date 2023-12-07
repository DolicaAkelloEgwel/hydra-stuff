shape([1.5,2,4,0.5,2,50,2].fast(1.5), 0.4, 0.4)
	.repeat(5,2)
	.diff(gradient(3, 8), 1.5)
	.modulate(osc([1, 7, 0.3, 12, 2, 50].fast(0.8), 0.05)
		.kaleid(() => [4, 20, 3, 0.5, -5].fast())
		.modulate(o0, () => Math.cos(time * 0.25)), 0.2)
	.out();