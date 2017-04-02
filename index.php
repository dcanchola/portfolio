<?php
$errName = " ";
$errEmail = " ";
$errMessage = " ";
$errHuman = " ";
$result = " ";

//Check form for errors
if (isset($_POST["submit"])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$human = intval($_POST['human']);
	$from = 'Contact Form';
	$to = 'decanchola@gmail.com'; 
	$subject = "Message from Danielle's Contact Form"; 

	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	//Check if name has been entered
	if(!$_POST['name']) {
		$errName = '*Please enter your name';
	}

	//Check if email has been entered/is vaild
	if(!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$errEmail = '*Please enter a valid e-mail address';
	}

	//Check if message has been entered
	if(!$_POST['message']) {
		$errMessage = '*Please enter your message';
	}

	//Check if anti-spam test is correct
	if($human !== 5) {
		$errHuman = '*Your anti-spam is incorrect';
	}

	//If no errors, send email
	if(!$errName && !$errEmail && !$errMessage && !$errHuman) {
		if(mail ($to, $subject, $body, $from)) {
			$result = '<div class="alert alert-success">Thank you! I will be in touch as soon as possible.</div>';
		} else {
			$result = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
		}
	}
}
?>

<!DOCTYPE html>
<html class="lt-ie9">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, intial-scale=1">
	<title>Danielle Canchola</title>
	<!--Typekit fonts-->
	<script src="https://use.typekit.net/oaj0rle.js"></script>
	<script>try{Typekit.load({ async: false });}catch(e){}</script>
	<!--Backup fonts-->
	<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css?family=Josefin+Slab" rel="stylesheet"> 
	 <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" href="vendor/remodal.css">
	<link rel="stylesheet" href="vendor/remodal-default-theme.css">
	<script>
    // Picture element HTML5 shiv
    document.createElement( "picture" );
    </script>
	<script src="https://cdn.rawgit.com/scottjehl/picturefill/master/dist/picturefill.min.js" async></script>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<section class="jumboContainer">
	<img class="balloon" src="images/balloon.svg" />
	<img class="bubbles" src="images/bubbles.svg" />
	<img class="shinyBubble" src="images/singleBubble.svg" />
	<img class="plainBubble" src="images/plainBubble.svg" />
	<div class="titleContainer">
		<h2>DANIELLE CANCHOLA<br>
		WEB DEVELOPER &<br>UX DESIGNER</h2>
		<a href="#portfolio" class="btn btn-default" role="button">VIEW MY PORTFOLIO&nbsp;<span class="glyphicon glyphicon-menu-right"></span></a>
	</div>
	<section class="testContainer1"></section>
	<figure class="svg">
		<img class="pinwheel" src="images/pinwheel.svg"/>
		<div class="stick"></div>
	</figure>
	<header>
	<nav class="navbar navbar-inverse" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header">
			 	<!--creates bootstrap nav toggle button-->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
					<!--toggle glyphicaon-->
					<span class="glyphicon glyphicon-menu-hamburger"></span>
				</button>
			</div>
			
			<!--collapse div functionality is attached to toggle button-->
			<div class="collapse navbar-collapse" id="navbar-collapse">
				<ul class="nav navbar-nav" id="navLinks">
					<li id="li1"><a href="#about"><span class="glyphicon glyphicon-user">&nbsp;</span>ABOUT</a></li>
					<li id="li2"><a href="#portfolio"><span class="glyphicon glyphicon-folder-open">&nbsp;</span>PORTFOLIO</a></li>
					<li id="li3"><a href="#resume"><span class="glyphicon glyphicon-file">&nbsp;</span>RESUME</a></li>
					<li id="li4"><a href="#contact"><span class="glyphicon glyphicon-envelope">&nbsp;</span>CONTACT</a></li>
				</ul>
			</div>
		</div>
	</nav>
	</header>

<div class="container-fluid" id="bodyContainer">
	<div class="row" id="about">
		<article class="aboutMe">
			<h2>ABOUT ME</h2>
			<div class="col-sm-12">
			<picture>
				<source srcset="images/portraitdesktoplarge.png" alt="Portrait" media="(min-width:1400px)">
				<source srcset="images/portraitdesktop.png" alt="Portrait" media="(min-width:768px)">
				<img id="mobilePortrait" src="images/portraitmobile.png" alt="Portrait">
			</picture>
			<p>
			<br>
			Life is spent creating stories and experiences of the most meaningful purposes; the most fascinating designs. 
			It is my objective to ensure these experiences are realized innovatively through the digital space. My name is 
			Danielle Canchola, and I'm a user experience/user interface and web designer based in Chicago, IL. I am a Columbia 
			College Chicago alumni with a Bachelor's degree in Interaction Design. My specialties are UX/UI and front-end development.<br><br>

			My work primarily involves technologies such as HTML5, CSS3, Javascript, jQuery, Adobe Photoshop, Adobe Illustrator, 
			and the utilization of UX concepts. Within each of my projects I am passionate about building fascinating stories from 
			the moment an idea materializes to the point a final product is released. I prioritize the process involved in creating; 
			a process which allows for iterative development and fine-tuning to produce a digital experience that is nothing 
			short of magic.<br><br>

			As well as design and development, I am an avid social media user and enjoy reading, writing, and the entertainment
			world. My mind thrives being fed by creative resources and creative minds. In every aspect that I have been 
			inspired by others' creative work, I work with the mind to inspire back. As a developer and designer, I work to
			create interactive experiences that will not only engage participants, but spark a positive impact that lasts.</p>
			</div>
		</article>
	</div>

	<div class="row" id="about2">
		<h2>WHAT I DO</h2>
		<div class="col-sm-4">
			<picture>
				<source class="img-responsive" srcset="images/uxlogoredlarge.png" media="(min-width: 1440px)">
				<img class="img-responsive" srcset="images/uxlogored.png" alt="UX Icon">
			</picture>
			<h4>UX/UI</h4>
			<p>I create participant-centered design solutions to optimize your users' experience.</p>
		</div>
		<div class="col-sm-4">
			<picture>
				<source class="img-responsive" srcset="images/devlogobluelarge.png" media="(min-width: 1440px)">
				<img class="img-responsive" srcset="images/devlogoblue.png" alt="Web Dev Icon">
			</picture>
			<h4>WEB DEV</h4>
			<p>I work with front-end development languages to design beautiful websites.</p>
		</div>
		<div class="col-sm-4">
			<picture>
				<source class="img-responsive" srcset="images/designlogoyellowlarge.png" media="(min-width: 1440px)">
				<img class="img-responsive" srcset="images/designlogoyellow.png" alt="Design Icon">
			</picture>
			<h4>DESIGN</h4>
			<p>I apply skilled design principles towards visual and interaction design projects.</p>
		</div>
	</div>

	<div class="row" id="portfolio">
		<div class="row">
			<h2>MY WORK</h2>

			<!--INTERACTIVE CONCERT-->
			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal" href="#modal1"><img class="img-responsive" src="images/interactiveconcert1.png" alt="Interactive Concert CSS Website"><div class="hover">INTERACTIVE CONCERT<br>CSS3 Illustration Website</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal1">
			        <div class="remodal" data-remodal-id="modal">
			            <button type="button" data-remodal-action="close" class="remodal-close"></button>
			            <h4 class="modal-title">INTERACTIVE CONCERT</h4>
			            <div class="modal-body">
			            	<p class="descrip">
			            		Interactive Concert is a pure CSS illustration site using CSS3 transitions and animations to invite user interaction.<br>
				  				<a href="interactiveconcert/index.html" target="_blank">+&nbsp;INTERACTIVE CONCERT</a>
				  			</p>
			            	<figure class="modalFigure">
				                <img src="images/interactiveconcert3.png" alt="Interactive Concert" />
			  				</figure>
			            </div>
			    	</div>
				</div>
			</div>

			<!--COASTER CHALLENGE-->
			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal2" href="#modal2"><img class="img-responsive" src="images/coasterchallenge1.png" alt="COASTER CHALLENGE 2016"><div class="hover">COASTER CHALLENGE 2016<br>Website</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal2">
					<div class="remodal" data-remodal-id="modal2">
				        <button type="button" data-remodal-action="close" class="remodal-close"></button>
				        <h4 class="modal-title">SPECIAL OLYMPICS COASTER CHALLENGE 2016</h4>
				        <div class="modal-body">
	                      	<p class="descrip">
	        					The Coaster Challenge is an annual event held in partnership between Special Olympics Illinois and Six Flags Great America. As a team-based student project effort,
	        					an interactive infographic website was created for Special Olypmics Illinois to inform guests about the details of the event. Our team of twelve worked in an agile/scrum
	        					environment, dividing into three smaller teams focused on web development, graphic design, and game aspects of the website. I worked primarily on the web development
	        					team for the duration of the project, utilizing technologies such as HTML5, CSS3, JavaScript, jQuery, JSON, AJAX, and SVG. I also contributed as a copywriter and editor for 
	        					site content and voice. The infographic was utilized by Special Olympics Illinois to gain a wider audience and increase donors for Coaster Challenge 2016,
	        					which took place on September 25, 2016.<br>
	        					<a href="http://coaster.soill.org" target="_blank">+&nbsp;COASTER CHALLENGE</a>
	        				</p>
				        	<figure class="modalFigure">
	                        	<img src="images/coasterchallenge2.png" alt="Coaster Challenge" />
	                        </figure>
	                        <figure class="modalFigure">
	                        	<img src="images/coasterchallenge6.png" alt="Coaster Challenge" />
	                        	<figcaption>The team utilized storyboarding techniques often to organize the display of information and how it would be fed to users. This allowed us to visualize the 
	                        	layout of the infographic and create a balance between its interactive assets and informational assets.</figcaption>
	                        </figure>

	                        <figure class="modalFigure">
	                        	<img src="images/coasterchallenge5.png" alt="Coaster Challenge" />
	                        	<figcaption>Our work was first revealed to the public at Columbia College Chicago's annual Urban Arts Festival, Manifest. The showcase included the Coaster Challenge site
	                        	and game as well as other fun interactive experiences we created just for the event, such as a Coaster Challenge-themed animated gif booth.</figcaption>
	                        </figure>
	                        <figure class="modalFigure">
	                        	<img src="images/coasterchallenge4.png" alt="Coaster Challenge" />
	                        	<figcaption>A Coaster Challenge-themed facial recognition experience was also created exclusively for Manifest utliizing Processing, a coding language for producing visual arts.</figcaption>
	                        </figure>
	                        <figure class="modalFigure">
	                        	<img src="images/coasterchallenge7.png" alt="Coaster Challenge" />
	                        </figure>
	                        <figure class="modalFigure">
	                        	<img src="images/coasterchallenge9.png" alt="Coaster Challenge" />
	                        </figure>
				        </div>
				    </div>
				</div>
				<!-- /.modal -->
			</div>
		

			<!--CIMMFEST-->
			
			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal3" href="#modal3"><img class="img-responsive" src="images/cimmfest1.png" alt="CIMMFEST AD CAMPAIGN"><div class="hover">CIMMFEST AD CAMPAIGN<br>Web Prototype/Ad Campaign</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal3">
				    <div class="remodal" data-remodal-id="modal3">
				        <button type="button" data-remodal-action="close" class="remodal-close"></button>
				        <h4 class="modal-title">CIMMFEST AD CAMPAIGN</h4>
			            <div class="modal-body">
			            	<p class="descrip">
			            		CIMMfest is Chicago's International Movies and Music Festival, drawing crowds of indie music/film entrepeneurs and professionals alike. Its general audience
			            		covers a large age spectrum, ranging roughly late teens to mid-forties in the creative industry. As part of a student team of five, my job was to develop a fully immersive
			            		interactive media test campaign to expand CIMMfest's appeal to college students and increase millenial attendance at the 2016 festival. This test campaign would allow us 
			            		to gain the insights and research needed to ultimately produce a final interactive campaign pitch for implementation with CIMMfest 2017. As our team's interaction designer
			            		for digital mediums, I worked primarily on tactics to expand CIMMfest's web and social media presence for college students.
			            		<a href="docs/Cimmfest.pdf" target="_blank">+&nbsp;CIMMFEST CAMPAIGN STRATEGY</a>
			            		<a href="https://invis.io/R37A7NYT9" target="_blank">+&nbsp;CIMMFEST WEB PAGE PROTOTYPE</a>
			            	</p>
			            	<figure class="modalFigure">
                            	<img src="images/cimmfest2.png" alt="Cimmfest" />
                            	<figcaption>Our test campaign for CIMMfest 2016, CIMMVASION, encompassed primarily guerilla marketing with local colleges as well as spreading the word of CIMMfest opportunities and events
                            	on social media outlets such as Facebook, Twitter, and Instagram. During this time, we also began preparing bigger picture marketing plans for CIMMfest's website and 
                            	social media outlets such as Snapchat that would ultimately be implemented into our 2017 campaign pitch, EXPRESSION MEETS ADVENTURE.
                            	</figcaption>
                            </figure>
                            <figure class="modalFigure">
                            	<img src="images/cimmfest3.png" alt="Cimmfest" />
                            	<figcaption>A wireframe was created to showcase how our idea of a single-page student microsite might be implemented into the CIMMVASION campaign. This microsite was imagined to include a 
                            	variety of sections covering points of interest to students, such as student contests and student-created content. This concept inspired our final web presence pitch for CIMMfest 2017.</figcaption>
                            </figure>
                            <figure class="modalFigure">
                            	<img src="images/cimmfest4.png" alt="Cimmfest" />
                            	<figcaption class="descrip">
                            		We created a very basic visual prototype to accompany the wireframe and build out the core structure of our campaign webpage idea. 
                            		While this prototype did not serve as an integrated part of our active test campaign CIMMVASION, we decided it was an important asset to begin implementing
                            		as it would be a core piece of our final pitch for CIMMfest 2017. 
                            	</figcaption>
                            </figure>
                            <figure class="modalFigure">
                           	 	<img src="images/cimmfest5.png" alt="Cimmfest" />
                           	 	<figcaption>The final iteration of our student microsite idea is an interactive Invision prototype. The idea for CIMMfest 2017 is to evolve the "microsite" into
                           	 	a full-fledged students section on CIMMfest's website, which the site currently lacks. This section will be home to all opportunities for students to get involved
                           	 	with the festival, whether it be through internships, contests, live streams, or CIMMfest-sponsored college events. </figcaption>
                           	</figure>
			  			</div>
				    </div>
				</div>
			</div>

			<!--INTERACTIVE SOLAR SYSTEM-->

			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal4" href="#modal4"><img class="img-responsive" src="images/solarsystem.png" alt="Interactive Solar System Infographic"><div class="hover">INTERACTIVE SOLAR SYSTEM<br>Processing/Infographic</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal4">
				    <div class="remodal" data-remodal-id="modal4">
				        <button type="button" data-remodal-action="close" class="remodal-close"></button>
				        <h4 class="modal-title">INTERACTIVE SOLAR SYSTEM INFOGRAPHIC</h4>
			            <div class="modal-body">
			            	<p class="descrip">
				  				Interactive Solar System is an interactive infographic created using the p5.js Javascript library. This project concept originated in Processing as an animated display of the solar system. Interactive concepts were added later on to allow for a more engaging and educational experience. Being written using p5.js, the infographic is capable of being embedded onto websites. 
				  				<br><a href="InteractiveSolarSystem/index.html" target="_blank">+&nbsp;INTERACTIVE SOLAR SYSTEM</a>
				  			</p>
				            <figure class="modalFigure">
				                <img src="images/solarsystem1.png" alt="Interactive Solar System" />
				  			</figure>
			            </div>
				    </div>
				</div>
			</div>
		</div>


		<!--ANGULARJS TUTORIAL-->
		<div class="row">
			<div class="col-sm-3">
					<div class="hoverDiv">
						<a data-remodal-target="modal5" href="#modal5"><img class="img-responsive" src="images/angular1.png" alt="Interactive Solar System Infographic"><div class="hover">ANGULARJS TUTORIAL<br>AngularJS Demo</div></a>
					</div>
					<!-- Modal -->
					<div class="remodal-bg" id="modal5">
					    <div class="remodal" data-remodal-id="modal5">
					        <button type="button" data-remodal-action="close" class="remodal-close"></button>
					        <h4 class="modal-title">ANGULARJS TUTORIAL</h4>
				            <div class="modal-body">
				            	<p class="descrip">
					  				This project is a basic AngularJS tutorial that explores the fundamentals of the framework and demonstrates it in action with a simple MadLib application.
					  				<br><a href="AngularTutorial/index.html" target="_blank">+&nbsp;ANGULARJS TUTORIAL</a>
					  			</p>
					            <figure class="modalFigure">
					                <img src="images/angular2.png" alt="AngularJS Tutorial" />
					  			</figure>
				            </div>
					    </div>
					</div>
			</div>


		<!--KENNEDY SPACE CENTER SITE REDESIGN-->

			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal6" href="#modal6"><img class="img-responsive" src="images/ksc.png" alt="Kennedy Space Center Site Redesign"><div class="hover">KENNEDY SPACE CENTER<br>UX/Conceptual Site Redesign</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal6">
				    <div class="remodal" data-remodal-id="modal6">
			            <button type="button" data-remodal-action="close" class="remodal-close"></button>
			            <h4 class="modal-title">KENNEDY SPACE CENTER SITE REDESIGN</h4>
			            <div class="modal-body">
			            	<p class="descrip">
			  					This UX-based project documents a redesign of the Kennedy Space Center website. Processes involved to reach more sufficient design solutions for the site included user testing, paper prototyping, wireframes, and Balsamiq prototyping. This redesign concentrated on three main areas of interest, including the site homepage, informational attraction pages, and the ticket-buying experience.
			  					<a href="docs/KSC1.pdf" target="_blank">+&nbsp;KENNEDY SPACE CENTER SITE ANALYSIS</a>
			  					<a href="docs/KSC2.pdf" target="_blank">+&nbsp;KENNEDY SPACE CENTER REDESIGN DOCUMENT</a>
			  				</p>
				            <figure class="modalFigure">
				                <img src="images/kscwireframes.png" alt="Kennedy Space Center Redesign Wireframes" />
				                <figcaption>Some of the redesign wireframes created for the homepage and ticket buying experiences.</figcaption>
				            </figure>
				            <figure class="modalFigure">
				                <img src="images/kscpaperproto.png" alt="Kennedy Space Center Redesign Paper Prototypes" />
				                <figcaption>Paper prototypes utilized to visualize design and organize site information.</figcaption>	
				            </figure>	                     
			            </div>
				    </div>
				</div>
			</div>

			<!--IAM ALUMNI SITE CONCEPT-->

			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal7" href="#modal7"><img class="img-responsive" src="images/itdthumb.png" alt="Columbia College Chicago IAM Alumni Site"><div class="hover">IAM ALUMNI SITE<br>UX/Website Build Plan</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal7">
				    <div class="remodal" data-remodal-id="modal7">
				        <button type="button" data-remodal-action="close" class="remodal-close"></button>
				        <h4 class="modal-title">COLUMBIA COLLEGE CHICAGO IAM ALUMNI SITE</h4>
			            <div class="modal-body">
			           		<p class="descrip">
			  					The Columbia College Chicago IAM Alumni Network plan is the result of the efforts of a team of ten students from Columbia's Interactive Arts and Media department. The team compiled UX research on the creation of a department-centric alumni network as well as developing low-fidelity prototypes for the site. My roles within the team included research, user experience, prototyping, and content writing. A final proposal for the details and development of the site was compiled and delivered to the department. 
			  					<br><a href="docs/ITDFinal.pdf" target="_blank">+&nbsp;IAM ALUMNI NETWORK BUILD PLAN</a>
			  				</p>
				            <figure class="modalFigure">
	                            <img src="images/itdpic1.png" alt="Columbia College Chicago IAM Alumni Network Document" />
	                        </figure>
	                        <figure class="modalFigure">
	                            <img src="images/itdpic2.png" alt="User Personas" />
	                            <figcaption>A couple user personas designed by the team to identify our target audience for the network.</figcaption>
	                        </figure>
	                        <figure class="modalFigure">
	                            <img src="images/itdpic3.png" alt="User Flows" />
	                            <figcaption>An example user flow for the network's student audience.</figcaption>
	                        </figure>
	                        <figure class="modalFigure">
	                            <img src="images/itdpic4.png" alt="Prototype" />
	                            <figcaption>We created low-fidelity prototypes for the network to lay out its possible structure and functionality.</figcaption>
	                        </figure>
			            </div>
				    </div>
				</div>
			</div>

			<!--INFORMATION ARCHITECTURE OF CCC IAM SITE-->

			<div class="col-sm-3">
				<div class="hoverDiv">
					<a data-remodal-target="modal8" href="#modal8"><img class="img-responsive" src="images/infoarch1.png" alt="CCC IAM SITE RESTRUCTURE"><div class="hover">CCC IAM SITE RESTRUCTURE<br>Information Architecture</div></a>
				</div>
				<!-- Modal -->
				<div class="remodal-bg" id="modal8">
				    <div class="remodal" data-remodal-id="modal8">
				    <button type="button" data-remodal-action="close" class="remodal-close"></button>
				    <h4 class="modal-title">INFORMATION ARCHITECTURE OF CCC IAM SITE</h4>
			        	<div class="modal-body">
			        		<p class="descrip">
			        			Columbia College Chicago's Interactive Arts and Media department website holds a large variety of information for its enrolled students. While some of this 
			        			information is useful to students, much of it is not organized in an adequate manner; and not all of it is up-to-date or even used by current students. As 
			        			part of a student team of three, I worked to restructure the IAM site's information architecture in a way that is more efficient and accessible for students.
			        			The methods used to carry out our analysis included conducting user task tests and card sorts as well as analyzing the IAM site's Google Analytics. These tests
			        			provided us with results beneficial to the development of a navigation restructure that would overall improve the site's information architecture.
			        			<br><a href="docs/InfoArch1.pdf" target="_blank">+&nbsp;IAM INFORMATION ARCHITECTURE DOCUMENT</a>
			        		</p>
							<figure class="modalFigure">
	                            <img src="images/infoarch2.png" alt="IAM Site" />
	                        </figure>
			            </div>
				    </div>
				</div>
			</div>
			</div>

			<!--CULTURAL MUSIC BOX-->
			<div class="row">
				<div class="col-sm-3">
					<div class="hoverDiv">
						<a data-remodal-target="modal9" href="#modal9"><img class="img-responsive" src="images/infoarchmid1.png" alt="Info. Architecture of Memories"><div class="hover">ARCHITECTURE OF MEMORIES<br>Information Architecture</div></a>
					</div>
					<!-- Modal -->
					<div class="remodal-bg" id="modal9">
						<div class="remodal" data-remodal-id="modal9">
			                <button type="button" data-remodal-action="close" class="remodal-close"></button>
			                <h4 class="modal-title">INFORMATION ARCHITECTURE OF MEMORIES</h4>
				            <div class="modal-body">
				            	<p class="descrip">
					  					As a means of attacking one of the most complex information systems in existence, the human brain, this project explores the endless opportunities available to organize the memories
					  					of the brain into a unique and structured information architecture. The approach was to create an organized, user-friendly means of retrieving memories of the brain,
										similar to a search engine. However, unlike a search engine, the mediums and technologies to choose from to create this information architecture were limitless; offering a blank
										slate through which to brainstorm and create. Drawing from my own perspective that memories, though abstract, can at times be almost sensory, I concluded that the best way to retrieve
										memories could be through an experiential exhibit, called REFLECTION, which organizes memories into their own physical spaces, ready to be discovered or retrieved. This paper explores
										what the information architecture of that exhibit might be like as well as the participant experience that might come with it.
					  					<br><a href="docs/InfoArch2.pdf" target="_blank">+&nbsp;REFLECTION: MEMORY EXHIBIT DOCUMENT</a>
					  			</p>
					            <figure class="modalFigure">
					                <img src="images/infoarchmid2.png" alt="Reflection: Memory Exhibit" />
					                <figcaption>Some simple visual references for the appearance of the proposed exhibit.</figcaption>
					  			</figure>
					  			<figure class="modalFigure">
					  				<img src="images/infoarchmid3.png" alt="Reflection: Memory Exhibit"/>
					  				<figcaption>Some of the information architecture concepts utilized for the organization of this "exhibit" included affinity diagrams, organizational templates, taxonomies, voice guides,
					  				and scenario maps.</figcaption>
					  			</figure>
				  			</div>
			            </div>
					</div>
				</div>

		
				<div class="col-sm-3">
					<div class="hoverDiv">
						<a data-remodal-target="modal10" href="#modal10"><img class="img-responsive" src="images/cmb.png" alt="Cultural Music Box"><div class="hover">CULTURAL MUSIC BOX<br>Arduino Prototype Concept</div></a>
					</div>
					<!-- Modal -->
					<div class="remodal-bg" id="modal10">
						<div class="remodal" data-remodal-id="modal10">
			                <button type="button" data-remodal-action="close" class="remodal-close"></button>
			                <h4 class="modal-title">CULTURAL MUSIC BOX</h4>
				            <div class="modal-body">
				            	<p class="descrip">
					  					The Cultural Music Box is an Arduino-based prototype concept for an educational music box that may teach children about culture and the music of diverse cultures. Each box involves a combination of custom-tailored music for its respective cultures and color-coded light displays to match the colors of each culture.  I utilized LED, light-sensing, and Piezo technology to develop a working prototype to demonstrate the music box in action. An analysis of its prototype stages was recorded to determine the most sufficient design solutions for a future product.
					  					<br><a href="docs/pcpaper1.pdf" target="_blank">+&nbsp;CULTURAL MUSIC BOX PAPER</a>
					  			</p>
					            <figure class="modalFigure">
					                <img src="images/pcpaper.png" alt="Cultural Music Box Research Paper" />
					  			</figure>
				  			</div>
			            </div>
					</div>
				</div>

				<div class="col-sm-3">
					<div class="hoverDiv">	
						<a data-remodal-target="modal11" href="#modal11"><img class="img-responsive" src="images/night.png" alt="Dichotomies"><div class="hover">DICHOTOMIES<br>Design/Illustration</div></a>
					</div>
					<!-- Modal -->
					<div class="remodal-bg" id="modal11">
					    <div class="remodal" data-remodal-id="modal11">
					        <button type="button" data-remodal-action="close" class="remodal-close"></button>
					        <h4 class="modal-title">DICHOTOMIES</h4>
				            <div class="modal-body">
				            	<p class="descrip">
				  					The images sampled here were created for a project focused on visualizing and illustrating dichotomies in Adobe Suite. Each image displays an artistic visualization of my perspective on each concept.
				  				</p>
				  				<div class="flex-container">
					            	<figure class="modalFigure flex-item">
			                            <img src="images/cold.png" alt="Cold" />
			                            <figcaption>"Cold"</figcaption>
		                            </figure>
		                            <figure class="modalFigure flex-item">
			                            <img src="images/evil.png" alt="Evil" />
			                            <figcaption>"Evil"</figcaption>
		                            </figure>
		                            <figure class="modalFigure flex-item">
			                            <img src="images/innocence.png" alt="Innocence" />
			                    		<figcaption>"Innocence"</figcaption>
		                    		</figure>
		                    		<figure class="modalFigure flex-item">
			                            <img src="images/night2.png" alt="Night" />
			                            <figcaption>"Night"</figcaption>
		                            </figure>
	                            </div>
				            </div>
					    </div>
					</div>	
				</div>
		</div>
	</div>

    <div class="row" id="designprocess">
		<h2>DESIGN PROCESS</h2>
		<div class="col-sm-12">
		<picture>
			<source srcset="images/desktopdesignprocess.svg" media="(min-width: 768px)">
			<img class="img-responsive" srcset="images/mobiledesignprocess.svg" alt="Design Process">
		</picture>
		</div>
	</div>

	<div class="row" id="resume">
	<section class="resumeContainer">
		<h2>RESUME</h2>
		<div class="col-sm-12">
			<h4>EXPERIENCE</h4><hr>
			<p>
				<span class="wdpr">
					<strong>Communication Technology Intern</strong>
					<br>
					<em>Walt Disney Parks and Resorts<br>January 2017-June 2017</em>
				</span>
			</p><br>
			<ul class="exp">
				<li>Completed website analytics reporting and communication</li>
				<li>Posted content to WDP&R intranet, ensuring sites were up-to-date</li>
				<li>Provided technology support for WDP&R Public Affairs, including web, CMS, and intranet</li>
				<li>Provided testing support and bug reports/feedback as needed</li>
			</ul><br>
			<p>	
				<span class="lbi">
					<strong>Web Developer Intern</strong>
					<br>
					<em>Leo Burnett Interactive<br>June 2016-August 2016</em>
				</span>
			</p><br>
			<ul class="exp">
				<li>Developed internal and external client websites using various CMS and templating technologies</li>
				<li>Produced wireframes and visual design prototypes for internal client website</li>
				<li>Participated in internal site reviews with project clients and directors</li>
				<li>Maintained websites by tracking and resolving ticketed issues</li>
				<li>Created user personas and user flows for social media-based campaign pitch</li>
			</ul><br>

			<h4>PROJECTS</h4><hr>
			<p>
				<span class="iamTeam">
					<strong>Special Olympics Coaster Challenge Site, 2016</strong>
					<br>
					<em>User Experience Design, Web Developer</em>
					<br>
					Conducted user experience research based on event audience trends; Contributed front-end skills on the web development team to produce interactive infographic website
				</span><br><br>

				<span class="iadc">
					<strong>CIMMfest Interactive Ad Campaign, 2016</strong>
					<br>
					<em>User Experience Design, Lead Web Designer, Copywriter</em>
					<br>
					Designed campaign site prototypes and ad content for Columbia College Chicago collaborative CIMMfest millenial advertising campaign
				</span><br><br>

				<span class="alumNet">
					<strong>CCC IAM Alumni Network, 2015</strong>
					<br>
					<em>User Experience Design, Information Architecture</em>
					<br>
					Collaborated in agile/scrum based team environment; Implemented user experience research and design; Developed build plan for future 
					Columbia College Chicago Interactive Arts & Media department alumni network
				</span><br><br>
			</p>

			<h4>SKILLS</h4><hr>
			<p>
				<span class="technical">
					<strong>Technical Skills</strong>
					<br>
					HTML5, CSS3, Sass, Javascript, jQuery, JSON, AJAX, Processing, C#, Bootstrap, Responsive Design, Google Analytics, Adobe Omniture, CMS, Social Media</span>
				<br><br>

				<span class="design">
					<strong>Design Skills</strong>
					<br>
					User Experience, User Interfaces, Sketching, Wireframing, Agile/Scrum, Prototyping, User Testing, User Personas, Information Architecture
				</span><br><br>

				<span class="software">
					<strong>Software</strong>
					<br>
					Adobe Photoshop, Adobe Illustrator, Adobe Dreamweaver, Balsamiq, InVision, Visual Studio 2013, Microsoft Office
				</span><br><br>
			</p><br>

			<h4>EDUCATION</h4><hr>
			<p><strong>Columbia College Chicago</strong>, Chicago, IL<br>
			Bachelor of Arts in Interaction Design, May 2016<br><br><br>
			<a href="docs/Resume.pdf" target="_blank" id="resumePDF"><span class="glyphicon glyphicon-file">&nbsp;</span>View in PDF Format</a></p><br>
		</div>
		</section>
	</div>

	<div class="row" id="contact">
		<h2>CONTACT ME</h2>
		<!-- CONTACT FORM-->
		<form class="form-horizontal" role="form" method="post" action="index.php">
		    <div class="form-group">
		        <label for="name" class="col-sm-2 control-label">Name</label>
		        <div class="col-sm-10">
		            <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
		            <?php echo "<p class='text-danger'>$errName</p>";?>
		        </div>
		    </div>
		    <div class="form-group">
		        <label for="email" class="col-sm-2 control-label">Email</label>
		        <div class="col-sm-10">
		            <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
		            <?php echo "<p class='text-danger'>$errEmail</p>";?>
		        </div>
		    </div>
		    <div class="form-group">
		        <label for="message" class="col-sm-2 control-label">Message</label>
		        <div class="col-sm-10">
		           <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']); ?></textarea>
		            <?php echo "<p class='text-danger'>$errMessage</p>"; ?>
		        </div>
		    </div>
		    <div class="form-group">
		        <label for="human" class="col-sm-2 control-label">2 + 3 = ?</label>
		        <div class="col-sm-10">
		            <input type="text" class="form-control" id="human" name="human" placeholder="Captcha Answer">
		            <?php echo "<p class='text-danger'>$errHuman</p>"; ?>
		        </div>
		    </div>
		    <div class="form-group">
		        <div class="col-sm-10 col-sm-offset-2">
		            <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
		        </div>
		    </div>
		    <div class="form-group">
		        <div class="col-sm-10 col-sm-offset-2">
		           <?php echo $result; ?>
		        </div>
		    </div>
		</form>
		<footer>
			<ul>
				<li><a href="https://www.linkedin.com/in/danielle-canchola-983a69105" target="_blank"><i class="fa fa-lg fa-linkedin"></i></a></li>
				<li><a href="https://plus.google.com/u/0/115850913030569709468/posts" target="_blank"><i class="fa fa-lg fa-google-plus"></i></a></li>
				<li><a href="https://twitter.com/danielle_can" target="_blank"><i class="fa fa-lg fa-twitter"></i></a></li>
				<li><a href="https://www.pinterest.com/danielle_can/" target="_blank"><i class="fa fa-lg fa-pinterest"></i></a></li>
				<li><a href="https://gist.github.com/dcanchola" target="_blank"><i class="fa fa-lg fa-github"></i></a></li>
			</ul>
			<p>©2017 Danielle Canchola</p>
		</footer>
	</div>
</div>
</section>
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="vendor/remodal.min.js"></script>
<script src="script.js"></script>
</body>
</html>