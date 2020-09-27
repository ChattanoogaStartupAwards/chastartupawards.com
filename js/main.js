/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

			$('#demo-category').change(function(e) {
				switch(e.target.value) {
					case 'startup-of-the-year':
					$('#award-description').text("The most forward-facing, problem-solving, original and inspiring young business in the Chattanooga area. This company embodies the innovative spirit and has a legitimate chance to be a household name.");
					break;
					case 'colabds-high-growth-co-of-the-year':
					$('#award-description').text("This award celebrates a founder who has taken the entrepreneurial journey head on, with success in building their team, attracting capital, and pursuing their market.");
					break;
					case 'launch-chas-micro-business-of-the-year':
					$('#award-description').text("This award recognizes a LAUNCH entrepreneur with fewer than five employees who has worked and persevered, despite the challenges they face as a woman-owned business or as an entrepreneur of color.");
					break;
					case 'incubators-incubated-biz-of-the-year':
					$('#award-description').text("A diamond in the rough polished to perfection through perseverance, hard work and by leveraging the bountiful resources in Chattanooga’s ecosystem is no longer a hidden gem.");
					break;
					case 'society-of-works-coworder-of-the-year':
					$('#award-description').text("This individual or organization promotes and relentlessly campaigns for redefining how we work, collaborate and work together. ");
					break;
					case 'the-enterprise-ctr-tech-goes-home-volunteer-of-the-year':
					$('#award-description').text("Volunteers are the cornerstone of many organizations and are vital to raising awareness in the communities in which they live and work. This award is for a person who volunteers or volunteered their time to improve the community through various contributions and community service. Each year, The Enterprise Center and Tech Goes Home honors individuals for their commitment to outstanding volunteerism and making a difference for startups and organizations . The TEC/TGH Volunteer of the Year Award recognizes outstanding volunteers for their commitment to Chattanooga organizations, awareness, education, research and support.");
					break;
				}
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});

})(jQuery);
