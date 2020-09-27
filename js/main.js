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
					$('#award-description').text("This award recognizes the most forward-facing, problem-solving, original and inspiring young business in the Chattanooga area. This company embodies the innovative spirit and has a legitimate chance to be a household name.");
					break;
					case 'colabs-high-growth-co-of-the-year':
					$('#award-description').text("This award celebrates a founder who has taken the entrepreneurial journey head on, with demonstrated success in building their team, attracting capital, and pursuing their market.");
					break;
					case 'incubators-goldfinch-of-the-year':
					$('#award-description').text("This award celebrates INCubator Clients who have excelled in their industry and implemented innovative designs and strategies for growth – all the while embodying the entrepreneurial spirit.");
					break;
					case 'launch-chas-micro-business-of-the-year':
					$('#award-description').text("This award recognizes a LAUNCH entrepreneur with fewer than five employees who has worked and persevered, despite the challenges they face as a woman-owned business or as an entrepreneur of color.");
					break;
					case 'society-of-works-coworker-of-the-year':
					$('#award-description').text("This award recognizes an individual or organization who is a positive force in the Society of Work community and beyond by collaborating with, supporting, and cheering on those around them.");
					break;
					case 'charlie-e-brock-ecosystem-builder-of-the-year':
					$('#award-description').html("Charlie Brock is the former CEO of Launch Tennessee, a public-private partnership dedicated to making Tennessee the #1 state for starting and scaling businesses. Brock is native to the Chattanooga area and has been a champion for the startup community since its conception, as an investor, mentor and leader." +
					"<br><br>In the spirit of Charlie’s dedication to the Chattanooga entrepreneurial community, this award is dedicated to an individual who encourages collaboration between supporting organizations and exemplifies selfless dedication to making Chattanooga a stronger and more inclusive entrepreneurial ecosystem.");
					break;
					case 'the-enterprise-ctr-tech-goes-home-volunteer-of-the-year':
					$('#award-description').html("<p>Volunteers are the cornerstone of many organizations and are vital to raising awareness in the communities in which they live and work. This award is for a person who volunteers or volunteered their time to improve the community through various contributions and community service. </p>" +
					"<p>Each year, The Enterprise Center and Tech Goes Home honors individuals for their commitment to outstanding volunteerism and making a difference for startups and organizations . The TEC/TGH Volunteer of the Year Award recognizes outstanding volunteers for their commitment to Chattanooga organizations, awareness, education, research and support.</p>" +
					"<p>Nominees assisted or spearheaded a campaign or service that proved beneficial to an individual and/or the community.</p>" +
					"<p>Nominees must reside or have a business in Hamilton County.</p>" +
					"<p>Nominee’s contributions must be of an extraordinary nature.</p>" +
					"<p>Nominee selflessly gives of their time to improving the community without receiving monetary compensation.</p>" +
					"<p>Nominees may be considered a mentor to others based upon their volunteer efforts.</p>"
					);
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
