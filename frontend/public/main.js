const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	//reset: true //Animation repeat
})

sr.reveal(`.home__data, products__data, .steps__content,
			.footer__container`)
//sr.reveal(`.home__img`,{origin: 'bottom'})
//sr.reveal(`.products__card`,{interval: 100})
//sr.reveal(`.about__img, .testimonial__img`,{origin: 'right'})
//sr.reveal(`.about__data, .testimonial__data`,{origin: 'left'})