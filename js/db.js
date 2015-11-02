mainApp.service('dbService', function() {
	
    var skills = [
    	{
	        title : "Document Information",
	        items : [
		        "HTML",
		        "HTML5",
		        "XHTML",
		        "Javascript",
		        "CSS",
		        "CSS3",
		        "IFrame",
		        "Bootstrap"
		    ]
		},
		{
	        title : "JavaScript Libraries",
	        items : [
		        "jQuery",
		        "Prototype",
		        "GSAP",
		        "AngularJS",
		        "Froogaloop",
		        "FitVids.JS",
		        "Google Hosted Libraries",
		        "Modernizr",
		        "SwipeJS",
		        "EnquireJS",
		        "Isotope",
		        "KnockoutJS",
		        "Lightbox",
		        "Fancybox",
		        "SimplyScroll",
		        "SizzleJS",
		        "Twitter Platform",
		        "Hover Intent",
		        "WebGL",
		        "Three.js"

		    ]
		},
		{
	        title : "Frameworks",
	        items : [
		        "PHP",
		        "ASP.NET",
		        "Ruby on Rails",
		        "J2EE"
		    ]
		},
		{
	        title : "PhoneGap",
	        items : [
	        	"PhoneGap",
		        "Cordova",
		        "Ionic"
		    ]
		},
		{
	        title : "Content Management System",
	        items : [
		        "Wordpress",
		        "Joomla",
		        "Drupal", 
		        "CodeIgniter",
		        "Squarespace",
		        "Tumblr"
		    ]
		},
		{
	        title : "Database",
	        items : [
		        "SQL",
		        "MySQL",
		        "MSSQL"
		    ]
		},
        {
	        title : "OOP",
	        items : [
	        	"Java",
		        "C++",
		        "C#",
		        "Python",
		        "C",
		        "Objective-C"
		    ]
		},
		{
	        title : "Coding Style or Standard",
	        items : [
		        "PSR-1/2",
		        "Geosoft.no",
		        "Google C++ Style Guide", 
		        "Objective-C Style Guide",
		        "Java Style Guide", 
		        "Python Style Guide", 
		        "Shell Style Guide", 
		        "HTML/CSS Style Guide", 
		        "JavaScript Style Guide", 
		        "AngularJS Style Guide", 
		        "Common Lisp Style Guide", 
		        "Vimscript Style Guide"
		    ]
		},
		{
	        title : "Wireframing",
	        items : [
		        "Balsamiq",
		        "fluidui"
		    ]
		},
		{
	        title : "Stack",
	        items : [
		        "LAMP stack",
		        "MEAN stack"
		    ]
		},
    	{
	        title : "Web Server",
	        items : [
		        "Apache",
		        "IIS 7",
		        "nginx"
		    ]
		},
		{
	        title : "Server Information",
	        items : [
		        "Unix",
		        "OpenSSL",
		        "Fedora",
		        "Debian",
		        "Ubuntu"
		    ]
		},
		{
	        title : "Hosting Providers",
	        items : [
	        	"GoDaddy",
		        "HostGator",
		        "NetGroup",
		        "Rackspace",
		        "Linode",
		        "Hetzner",
		        "Site5",
		        "UberGlobal",
		        "Amazon",
		        "SiteHost",
		        "Colo4",
		        "OVH",
		        "Intergenia"
		    ]
		},
		{
	        title : "Nameserver Providers",
	        items : [
	        	"GoDaddy DNS",
		        "InterNetX DNS",
		        "Site5 DNS", 
		        "ZoneEdit"
		    ]
		},
		{
	        title : "Email Services",
	        items : [
		        "SPF",
		        "Google Apps for Business",
		        "Mailgun",
		        "Microsoft Exchange Online",
		        "Office 365 Mail",
		        "GoDaddy Email",
		        "McAfee SaaS Email"
		    ]
		},
		{
	        title : "SSL Certificate",
	        items : [
		        "Parallels SSL",
		        "GlobalSign",
		        "AlphaSSL",
		        "Network Solution SSL",
		        "Geo Trust SSL",
		        "RapidSSL",
		        "Comodo SSL",
		        "DigiCert SSL"
		    ]
		},
		{
	        title : "Ecommerce",
	        items : [
	        	"WooCommerce",
		        "Magento",
		        "Cart Functionality", 
		        "Shopify",
		        "Squarespace Commerce",
		        "Volusion"
		    ]
		},
		{
	        title : "Payment Providers",
	        items : [
		        "Paypal",
		        "Stripe",
		        "Authorize.net",
		        "Maestro",
		        "MasterCard",
		        "Visa",
		        "Pound Sterling"
		    ]
		},
		{
	        title : "Advertising",
	        items : [
		        "Facebook Custom Audiences",
		        "DoubleClick.Net",
		        "Google Adsense",
		        "SkimLinks"
		    ]
		},
		{
	        title : "Mapping",
	        items : [
		        "Google Maps"
		    ]
		},
		{
	        title : "Analytics and Tracking",
	        items : [
		        "Google Analytics",
		        "CrazyEgg",
		        "Google Conversion Tracking"
		    ]
		},
		{
	        title : "Aggregation Funcitonality",
	        items : [
		        "RSS",
		        "Atom",
		        "Really Simple Discovery",
		        "Live Writer Support",
		        "Pingback Support",
		        "Dublin Core",
		        "FeedBurner",
		        "GoogleFeedProxy"
		    ]
		},
		{
	        title : "Content Delivery Network",
	        items : [
		        "MaxCDN",
		        "CloudFont",
		        "Vimeo CDN", 
		        "Akamai",
		        "GStatic Google Static Content",
		        "AJAX Libraries API",
		        "Microsoft Azure Blob Storage",
		        "Wordpress Grid"
		    ]
		},
		{
	        title : "Audio/Video Media",
	        items : [
		        "Youtube",
		        "Vimeo"
		    ]
		},
		{
	        title : "Language",
	        items : [
		        "English",
		        "Chinese"
		    ]
		}
    ];

    var urls = [
        {
        	desc:"DOZ platform provides unique content marketing with the best webmarketing experts.",
            url:"https://app.doz.com/",
            keyword:"AngularJS, Crowdsourcing, SEO, Marketing, SMO, API, PHP, Responsive",
            role:"AngularJS, SEO, PHP, Responsive"
        },
        {
        	desc:"Worktile is a simple and powerful team collaboration tools to solve efficiency, communication, sharing and recording problems. Work with your colleagues anytime and anywhere.",
            url:"https://worktile.com/",
            keyword:"AngularJS, Mobile, Tools, Collaboration, HTML5, CSS3, jQuery, Web Sockets, Redis, Socket.IO, Bootstrap, Node.js",
            role:"AngularJS, jQuery, Web Sockets, HTML5, CSS3, Bootstrap, Socket.IO"
        },
        {
        	desc:"Create email reminders in seconds",
            url:"http://reme.io/",
            keyword:"AngularJS, HTML5, CSS3, jQuery",
            role:"AngularJS, HTML5, CSS3, jQuery"
        },
        {
        	desc:"Textile Machine Spare Parts Supplier: One-Stop Shop",
            url:"http://behrisbaf.com/#!/en/home",
            keyword:"AngularJS, Shopping, jQuery, Bootstrap, CSS3",
            role:"I fixed and updated front-end working with AngularJS, Bootstrap, CSS3"
        },
        {
        	desc:"Educando is an online school management platform that allows you to simplify everyday tasks and easily share information between students, teachers and parents.",
            url:"http://tryme.educando.pt/",
            keyword:"AngularJS, Bootstrap, jQuery, School Management, Planning",
            role:"AngularJS, Bootstrap, jQuery, Front-end update"
        },
        {
        	desc:"Fitblok is a One-Page Web app, which provides users with a gym-like experience and enables fitness trainers to develop their own following.",
            url:"http://domainnamesales.com/domain/fitblok.com",
            keyword:"AngularJS, jQuery, 3rd Party Plugins Itegration",
            role:"AngularJS, jQuery"
        },
        {
        	desc:"NewlyWish is a simple and managed registry experience for the modern couple.",
            url:"https://www.newlywish.com/",
            keyword:"AngularJS, Ecommerce, Bootstrap, jQuery",
            role:"AngularJS, Ecommerce, Bootstrap, jQuery"
        },
        {
        	desc:"A Q&A site for home improvement questions. Get free home advice from Redbeacon experts within 24 hours.",
            url:"https://www.redbeacon.com/",
            keyword:"AngularJS, Responsive, Bootstrap, SASS, jQuery, Django",
            role:""
        },
        {
        	desc:"",
            url:"http://aedle.net/en",
            keyword:"Apache, Laravel, Google Analytics, jQuery, Euro, PounSterling, Mobile, AJAX Libraries API, Google Maps API, HTML5, CSS",
            role:""
        },
        {
        	desc:"Healthcare company site",
            url:"http://www.pelotonequity.com/",
            keyword:"GoDaddy DNS, ASP.NET, Google Analytics, jQuery, Google Hosted Libraries, Google Font API, AJAX Libraries API",
            role:""
        },
        {
        	desc:"With cake teacher you will learn cake decorating step by step from the comfort of your own home.",
            url:"http://www.caketeacher.com/",
            keyword:"Apache, HostGator, Joomla, PHP, Facebook Custom Audiences, Google Analytics, jQuery, Facebook SDK, SwipeJS, Vimeo, Google Font API, RSS, OpenSSL",
            role:""
        },
        {
        	desc:"Make an online reservation",
            url:"http://canaves.com/",
            keyword:"Apache, Parallels SSL, SPF, Wordpress, HTML5, jQuery, jQuery UI",
            role:""
        },
        {
        	desc:"Online shop",
            url:"http://www.rapha.cc/rd/en/",
            keyword:"nginx, GeoTrust SSL, RapidSSL, Linode, Wordpress, PHP, Froogaloop, FitVids.JS, jQuery, Vimeo, Pound Sterling, HTML5, CSS3",
            role:""
        },
        {
        	desc:"Hillside Park website",
            url:"http://www.hillsidepark.net/",
            keyword:"Apache, DreamHost Hosting, Dreamhost DNS, Wordpress, PHP, Google Analytics, jQuery",
            role:""
        },
        {
        	desc:"Online shop",
            url:"http://www.maderna.sk/",
            keyword:"Apache, PHP, Google Analytics, jQuery",
            role:""
        },
        {
        	desc:"Blogsite",
            url:"http://www.need2know.co.uk/",
            keyword:"IIS 7, Wordpress, PHP, ASP.NET, WooCommerce",
            role:""
        },
        {
        	desc:"Online furniture shop",
            url:"http://www.nostalgiaantiques.com.au/",
            keyword:"Drupal, PHP, Google Maps",
            role:""
        },
        {
        	desc:"Restaurant Website",
            url:"http://arcinspirations.com/trio",
            keyword:"CodeIgniter, SwipeJS, Modernizr, EnquireJS, jQuery, Isotope, HTML5",
            role:""
        },
        {
        	desc:"Furniture company website",
            url:"http://www.blacksofsopwell.com/",
            keyword:"PHP, jQuery, Lightbox, Fancybox",
            role:""
        },
        {
        	desc:"",
            url:"http://swimpclothing.com/",
            keyword:"Wordpress, jQuery, Youtube, ",
            role:""
        },
        {
        	desc:"",
            url:"http://thinkmac.co.uk/",
            keyword:"Wordpress, PHP, Twitter Platform, Hover Intent",
            role:""
        },
        {
        	desc:"",
            url:"http://www.aktive.cz/",
            keyword:"PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://www.stopin-praha.cz/",
            keyword:"PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://www.paragraphny.com/",
            keyword:"Squarespace",
            role:""
        },
        {
        	desc:"",
            url:"http://www.kadernictvi-iren.cz/",
            keyword:"PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://www.vlasy.cz/",
            keyword:"Wordpress, PHP, WooCommerce, SwipeJS",
            role:""
        },
        {
        	desc:"",
            url:"http://www.darkov.cz/",
            keyword:"Wordpress, PHP, ASP.NET",
            role:""
        },
        {
        	desc:"",
            url:"http://www.allcredit.cz/",
            keyword:"PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://hoteldelpintor.com/",
            keyword:"Wordpress, PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://lodges.co.uk/",
            keyword:"Wordpress, PHP",
            role:""
        },
        {
        	desc:"",
            url:"http://somethingspecialgiftbaskets.com/",
            keyword:"Wordpress, WooCommerce",
            role:""
        },
        {
        	desc:"",
            url:"http://devbox.ikeo.com/apidoc/",
            keyword:"API, PHP, REST",
            role:""
        }

 /*
        ,
        {
        	desc:"",
            url:"",
            keyword:"",
            role:""
        }
*/
    ];

    for(i=0; i<urls.length;i++)
    	urls[i].index = i;

    var urlItems = {};
	
	for (var key in urls[0])
		if (key != "index")
			urlItems[key] = false;
	urlItems.url = true;
	urlItems.role = true;
	
    var endings = ["Best.", "All Best.", "Best Wishes.", "Best Regards.", "Thanks!", "Thanks so much!"];
    var myNames = ["Solafort.", "Covernal.", "Li, LiaoMing.", ""];
    var greatings = ["Hi", "Dear", "Hello", ""];
	var denoms = ["Sir", "Mr.", "Dr.", "Mis.", ""];
	var years = [
        "",
        "a lot of", 
        "lots of", 
        "1 year", 
        "2 years", 
        "3 years", 
        "4 years", 
        "5 years",
        "more than 5 years"
    ];

    var skillDescriptions = [
    	"I have experience in %s.", // I have experience in Java
    	"I have %y experience as a %s developer.", // I have a 3 years of work experience as a Java developer.
    	"I am a %s developer with %y experience.", // I am a Java developer with 4.5 years of experience.
    	"I have %y experience in %s.", // I have 4 years of experience in Java.
    	"I always follow %s.", // I follow standard Java coding conventions.
    	"I always comply with %s.", // I comply with the Google Java Standard.
    	"I have proficient %s skills.",
    	"I'm fluent in speaking %s.",
    	"I'm a proficient speaker of %s."
    ];

    var titles = [
		"Related results",
		"My results",
		"Please check my results",
		""
	];

	var beforeComments = [
        "No data yet.",
        ""
    ];

    var afterComments = [
        "I look forward to hearing from you soon.",
        "If you need any more information, please let me know.",
        "I hope to hear from you soon.",
        "If you need any more info, just drop me a line.",
		"I think you'd better to make sure a developer has the right skills and experience for your project.",
		"I'm willing to do any kind of small task what you need mostly before start.",
        "I will provide you good quality and service with professional looking and well-formed structure if I have a chance to do this.", 
        ""
    ];
    
    return {
    	endings : endings,
    	myNames : myNames,
    	skills : skills,
    	years : years,
    	greatings : greatings,
    	denoms : denoms,
    	titles : titles,
    	urls : urls,
    	urlItems : urlItems,    	
    	skillDescriptions : skillDescriptions,
    	beforeComments : beforeComments,
    	afterComments : afterComments
    };
});